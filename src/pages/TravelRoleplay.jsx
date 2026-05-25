import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, BookOpen, ChevronRight, Languages, Map, PlayCircle, User } from 'lucide-react';
import { travelScenarios } from '../data/travel-scenarios';
import { speakText } from '../utils/tts';

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

export default function TravelRoleplay() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(null);

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
               onClick={() => setSelectedScenarioId(scenario.id)}
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

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="pb-8">
      <button 
        onClick={() => setSelectedScenarioId(null)}
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

        {scenario.key_vocabulary?.length > 0 && (
          <div className="glass-panel p-5">
            <h3 className="text-sm text-blue-200 font-medium mb-4 flex items-center gap-2">
              <BookOpen size={16} />
              Key vocabulary
            </h3>
            <div className="vocab-list">
              {scenario.key_vocabulary.map((word, idx) => (
                <div key={idx} className="vocab-row">
                  <div>
                    <p className="text-white font-semibold">{word.en}</p>
                    <p className="text-slate-400 text-xs">English</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{word.jp}</p>
                    <p className="text-slate-400 text-xs">日本語</p>
                  </div>
                  <div>
                    <p className="text-slate-200">{word.zh}</p>
                    <p className="text-slate-400 text-xs">中文</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
