import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, BookOpen, CheckCircle, ChevronRight, Languages, Map, PlayCircle, RotateCcw, Target, User } from 'lucide-react';
import { travelScenarios } from '../data/travel-scenarios';
import { SRSService } from '../utils/srsService';
import { speakText } from '../utils/tts';

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'at', 'back', 'be', 'for', 'from', 'have', 'i',
  'if', 'in', 'is', 'it', 'me', 'my', 'of', 'on', 'or', 'please', 'that',
  'the', 'there', 'this', 'to', 'you', 'your'
]);

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(' ')
    .filter(token => token.length > 2 && !STOP_WORDS.has(token));
}

function buildPracticePrompts(scenario) {
  const prompts = scenario.key_questions_officer_asks?.length
    ? scenario.key_questions_officer_asks
    : [
        `Start this ${scenario.name} conversation with a useful English response.`,
        `Ask for help in this situation: ${scenario.location}.`
      ];

  const answers = scenario.your_answers?.length
    ? scenario.your_answers
    : (scenario.english || [])
        .filter(phrase => !phrase.speaker || phrase.speaker === 'You')
        .map(phrase => phrase.text);

  return prompts.map((prompt, index) => ({
    prompt,
    target: answers[index] || answers[0] || 'Could you help me with this?'
  }));
}

function evaluateResponse({ answer, target, scenario }) {
  const normalizedAnswer = normalizeText(answer);

  if (!normalizedAnswer) {
    return {
      level: 'Try again',
      tone: 'red',
      summary: 'Write one complete English response before checking.',
      tips: ['Use the suggested answer as your first model, then try again from memory.'],
      missingTerms: [],
      target
    };
  }

  const answerTokens = new Set(tokenize(answer));
  const targetTokens = tokenize(target);
  const matchedTokens = targetTokens.filter(token => answerTokens.has(token));
  const coverage = targetTokens.length ? matchedTokens.length / targetTokens.length : 0;
  const expectedTerms = (scenario.key_vocabulary || [])
    .map(item => item.en)
    .filter(term => normalizeText(target).includes(normalizeText(term)));
  const missingTerms = expectedTerms.filter(term => !normalizeText(answer).includes(normalizeText(term)));
  const hasPoliteFrame = /\b(could|can|may|would|please|sorry|thank|i would like|i have|im|i am|yes|no)\b/.test(normalizedAnswer);
  const hasEnoughLength = normalizedAnswer.split(' ').length >= 4;

  const tips = [];
  if (!hasEnoughLength) {
    tips.push('Make it a full sentence, not only a keyword.');
  }
  if (!hasPoliteFrame) {
    tips.push('Use a clear polite frame such as "Could you..." or "I would like...".');
  }
  if (missingTerms.length > 0) {
    tips.push(`Include the key term: ${missingTerms.join(', ')}.`);
  }
  if (coverage < 0.5) {
    tips.push('Stay closer to the target response before making your own variation.');
  }
  if (tips.length === 0) {
    tips.push('Good. Now practice saying it aloud without looking.');
  }

  if (coverage >= 0.68 && missingTerms.length === 0 && hasEnoughLength) {
    return {
      level: 'Complete',
      tone: 'emerald',
      summary: 'Your response covers the core meaning.',
      tips,
      missingTerms,
      target
    };
  }

  if (coverage >= 0.35 || missingTerms.length <= 1) {
    return {
      level: 'Needs detail',
      tone: 'amber',
      summary: 'The response is usable, but one important detail is missing or weak.',
      tips,
      missingTerms,
      target
    };
  }

  return {
    level: 'Try again',
    tone: 'red',
    summary: 'This does not match the situation closely enough yet.',
    tips,
    missingTerms,
    target
  };
}

function legacyEnglishPhrases(scenario) {
  const staffLines = (scenario.key_questions_officer_asks || []).map(text => ({
    speaker: scenario.officer_role || scenario.staff_role || 'Staff',
    text,
    zh: ''
  }));

  const answerLines = (scenario.your_answers || scenario.key_phrases || []).map(text => ({
    speaker: 'You',
    text,
    zh: ''
  }));

  return [...staffLines, ...answerLines];
}

function PhraseList({ title, icon: Icon, phrases, lang }) {
  if (!phrases?.length) return null;

  return (
    <div className="glass-panel p-5">
      <h3 className="text-sm text-slate-300 font-medium mb-4 flex items-center gap-2">
        <Icon size={16} />
        {title}
      </h3>
      <ul className="space-y-3">
        {phrases.map((phrase, idx) => (
          <li key={idx} className="phrase-row">
            <button
              onClick={() => speakText(phrase.text, { lang, rate: lang === 'ja-JP' ? 0.82 : 0.88 })}
              className="phrase-play"
              aria-label={`Play ${title} phrase ${idx + 1}`}
            >
              <PlayCircle size={17} />
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="phrase-speaker">{phrase.speaker || 'You'}</span>
              </div>
              <p className="phrase-text">"{phrase.text}"</p>
              {phrase.zh && <p className="phrase-translation">{phrase.zh}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function VocabCell({ text, label, lang, strong = true }) {
  return (
    <div className="vocab-cell">
      <button
        onClick={() => speakText(text, { lang, rate: lang === 'ja-JP' ? 0.82 : 0.88 })}
        className="vocab-play"
        aria-label={`Play ${label}: ${text}`}
      >
        <PlayCircle size={16} />
      </button>
      <div className="min-w-0">
        <p className={strong ? 'text-white font-semibold' : 'text-slate-200'}>{text}</p>
        <p className="text-slate-400 text-xs">{label}</p>
      </div>
    </div>
  );
}

export default function TravelRoleplay() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(null);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [draftAnswer, setDraftAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [srsMessage, setSrsMessage] = useState('');

  const openScenario = (scenarioId) => {
    setSelectedScenarioId(scenarioId);
    setPracticeIndex(0);
    setDraftAnswer('');
    setFeedback(null);
    setSrsMessage('');
  };

  const closeScenario = () => {
    setSelectedScenarioId(null);
    setPracticeIndex(0);
    setDraftAnswer('');
    setFeedback(null);
    setSrsMessage('');
  };

  if (!selectedScenarioId) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-8">
        <header className="page-header">
          <h1 className="page-title text-green-400">Travel Scenarios</h1>
          <p className="page-subtitle">Navigate Japan with confidence</p>
        </header>

        <div className="grid gap-4 mt-6">
          {travelScenarios.map(scenario => (
             <button 
               key={scenario.id} 
               onClick={() => openScenario(scenario.id)}
               className="glass-panel p-4 text-left transition-colors flex items-center justify-between scenario-card"
             >
               <div>
                 <span className="text-xs text-emerald-300 font-mono mb-1 block">{scenario.id}</span>
                 <h3 className="text-white font-medium">{scenario.name}</h3>
                 <p className="text-gray-400 text-xs mt-1">{scenario.location}</p>
                 {scenario.trip_context && (
                   <p className="text-slate-300 text-xs mt-2">{scenario.trip_context}</p>
                 )}
               </div>
               <ChevronRight className="text-gray-500" />
             </button>
          ))}
        </div>
      </motion.div>
    );
  }

  const scenario = travelScenarios.find(s => s.id === selectedScenarioId);
  const englishPhrases = scenario.english || legacyEnglishPhrases(scenario);
  const practicePrompts = buildPracticePrompts(scenario);
  const activePractice = practicePrompts[practiceIndex] || practicePrompts[0];

  const selectPractice = (index) => {
    setPracticeIndex(index);
    setDraftAnswer('');
    setFeedback(null);
    setSrsMessage('');
  };

  const checkResponse = () => {
    const nextFeedback = evaluateResponse({
      answer: draftAnswer,
      target: activePractice.target,
      scenario
    });
    setFeedback(nextFeedback);
    setSrsMessage('');
  };

  const resetPractice = () => {
    setDraftAnswer('');
    setFeedback(null);
    setSrsMessage('');
  };

  const addPracticeToSRS = () => {
    const result = SRSService.addCustomCard({
      prompt: activePractice.prompt,
      answer: activePractice.target,
      scenarioId: scenario.id,
      scenarioName: scenario.name
    });

    setSrsMessage(result.added ? 'Added to SRS review.' : 'Already in SRS review.');
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="pb-8">
      <button 
        onClick={closeScenario}
        className="text-gray-400 text-sm mb-6 flex items-center gap-1 hover:text-white"
      >
        <ChevronRight size={16} className="rotate-180" /> Back to Scenarios
      </button>

      <div className="mb-6">
        <span className="text-xs text-emerald-300 font-mono">{scenario.id}</span>
        <h2 className="text-2xl font-bold text-white mb-2">{scenario.name}</h2>
        <p className="text-sm text-gray-400 flex items-center gap-2"><Map size={14}/> {scenario.location}</p>
        {scenario.trip_context && (
          <p className="text-sm text-slate-300 mt-2">{scenario.trip_context}</p>
        )}
      </div>

      <div className="space-y-4">
        {scenario.attention?.length > 0 && (
          <div className="glass-panel p-5 attention-panel">
            <h3 className="text-sm text-amber-200 font-medium mb-3 flex items-center gap-2">
              <AlertCircle size={16} />
              What to watch
            </h3>
            <ul className="space-y-2">
              {scenario.attention.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-200 leading-relaxed">- {item}</li>
              ))}
            </ul>
          </div>
        )}

        <PhraseList title="English phrases" icon={User} phrases={englishPhrases} lang="en-US" />
        <PhraseList title="Japanese phrases" icon={Languages} phrases={scenario.japanese} lang="ja-JP" />

        <div className="glass-panel p-5">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="text-sm text-emerald-200 font-medium flex items-center gap-2">
              <Target size={16} />
              Response practice
            </h3>
            <span className="text-xs text-slate-400">System feedback only</span>
          </div>

          <div className="grid gap-2 mb-4">
            {practicePrompts.map((item, idx) => (
              <button
                key={`${scenario.id}-${idx}`}
                onClick={() => selectPractice(idx)}
                className={`text-left rounded-xl border px-3 py-2 text-sm transition-colors ${
                  practiceIndex === idx
                    ? 'border-emerald-400 bg-emerald-500/15 text-white'
                    : 'border-slate-700 bg-slate-900/50 text-slate-300 hover:border-slate-500'
                }`}
              >
                {item.prompt}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Your response</p>
            <textarea
              value={draftAnswer}
              onChange={(event) => setDraftAnswer(event.target.value)}
              rows={3}
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white outline-none focus:border-emerald-400"
              placeholder="Type your English answer here..."
            />

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={checkResponse}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
              >
                <CheckCircle size={16} />
                Check
              </button>
              <button
                onClick={() => speakText(activePractice.target, { lang: 'en-US', rate: 0.88 })}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-slate-400"
              >
                <PlayCircle size={16} />
                Model
              </button>
              <button
                onClick={resetPractice}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-slate-400"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>
          </div>

          {feedback && (
            <div className={`mt-4 rounded-2xl border p-4 ${
              feedback.tone === 'emerald'
                ? 'border-emerald-500/60 bg-emerald-950/40'
                : feedback.tone === 'amber'
                  ? 'border-amber-500/60 bg-amber-950/40'
                  : 'border-red-500/60 bg-red-950/40'
            }`}>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="font-semibold text-white">{feedback.level}</p>
                <button
                  onClick={addPracticeToSRS}
                  className="rounded-lg border border-slate-500 px-3 py-1 text-xs font-semibold text-slate-100 hover:border-white"
                >
                  Add to SRS
                </button>
              </div>
              <p className="text-sm text-slate-200 mb-3">{feedback.summary}</p>
              <div className="rounded-xl bg-slate-950/50 p-3 mb-3">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Suggested answer</p>
                <p className="text-sm text-white">{feedback.target}</p>
              </div>
              <ul className="space-y-1">
                {feedback.tips.map((tip, idx) => (
                  <li key={idx} className="text-sm text-slate-200">- {tip}</li>
                ))}
              </ul>
              {srsMessage && <p className="mt-3 text-xs text-emerald-300">{srsMessage}</p>}
            </div>
          )}
        </div>

        {scenario.key_vocabulary?.length > 0 && (
          <div className="glass-panel p-5">
            <h3 className="text-sm text-blue-200 font-medium mb-4 flex items-center gap-2">
              <BookOpen size={16} />
              Key vocabulary
            </h3>
            <div className="vocab-list">
              {scenario.key_vocabulary.map((word, idx) => (
                <div key={idx} className="vocab-row">
                  <VocabCell text={word.en} label="English" lang="en-US" />
                  <VocabCell text={word.jp} label="日本語" lang="ja-JP" />
                  <VocabCell text={word.zh} label="中文" lang="zh-TW" strong={false} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
