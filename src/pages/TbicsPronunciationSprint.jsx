import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ListVideo,
  PauseCircle,
  PlayCircle,
  RotateCcw,
  StopCircle,
  Volume2,
} from 'lucide-react';
import {
  cleanSpeechText,
  dailySprintItems,
  diagnosticPrompts,
  getSprintSlowRate,
  sprintSentenceDrills,
  sprintWordGroups,
  sprintWords,
} from '../data/tbics-pronunciation-sprint';
import {
  cancelSpeech,
  getEnglishVoices,
  pauseSpeech,
  resumeSpeech,
  speakText,
  subscribeToVoiceChanges,
} from '../utils/tts';

const HARD_ITEMS_STORAGE_KEY = 'tbicsPronunciationSprintHardItems';
const NOTES_STORAGE_KEY = 'tbicsPronunciationSprintNotes';
const VOICE_STORAGE_KEY = 'tbicsPronunciationSprintVoiceURI';
const DAILY_PROGRESS_STORAGE_KEY = 'tbicsPronunciationSprintDailyProgress';

const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

const loadJson = (key, fallback) => {
  try {
    const rawValue = window.localStorage?.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch {
    return fallback;
  }
};

const loadText = (key, fallback = '') => {
  try {
    return window.localStorage?.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
};

const normalizeHardItems = (items) => (Array.isArray(items) ? items.filter(Boolean) : []);

const renderPauseText = (pauseText = '') =>
  pauseText.split(/(\/{1,2})/g).map((part, index) => {
    if (part === '/' || part === '//') {
      return (
        <span className={`sprint-pause ${part === '//' ? 'major' : ''}`} key={`${part}-${index}`}>
          {part}
        </span>
      );
    }

    return part;
  });

export default function TbicsPronunciationSprint() {
  const [playbackMode, setPlaybackMode] = useState('idle');
  const [isPaused, setIsPaused] = useState(false);
  const [speechError, setSpeechError] = useState('');
  const [activeItemId, setActiveItemId] = useState('');
  const [activeRoundLabel, setActiveRoundLabel] = useState('');
  const [dailyRound, setDailyRound] = useState(0);
  const [dailyMode, setDailyMode] = useState('all');
  const [rate, setRate] = useState(0.9);
  const [englishVoices, setEnglishVoices] = useState([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState(() => loadText(VOICE_STORAGE_KEY));
  const [hardItemIds, setHardItemIds] = useState(() =>
    normalizeHardItems(loadJson(HARD_ITEMS_STORAGE_KEY, [])),
  );
  const [notes, setNotes] = useState(() => loadJson(NOTES_STORAGE_KEY, {}));
  const [dailyProgress, setDailyProgress] = useState(() =>
    loadJson(DAILY_PROGRESS_STORAGE_KEY, { completedRounds: 0, lastCompletedAt: '' }),
  );
  const playbackSessionRef = useRef(0);
  const isMountedRef = useRef(true);

  const hardItemIdSet = useMemo(() => new Set(hardItemIds), [hardItemIds]);
  const sentenceById = useMemo(
    () => new Map(sprintSentenceDrills.map((sentence) => [sentence.id, sentence])),
    [],
  );
  const wordById = useMemo(() => new Map(sprintWords.map((word) => [word.id, word])), []);
  const dailyItems = useMemo(() => {
    if (dailyMode === 'words') {
      return dailySprintItems.filter((item) => item.type === 'word' || item.type === 'phrase');
    }

    if (dailyMode === 'sentences') {
      return dailySprintItems.filter((item) => item.type === 'sentence');
    }

    return dailySprintItems;
  }, [dailyMode]);

  const isSpeaking = playbackMode !== 'idle';
  const activeItemText =
    sprintWords.find((word) => word.id === activeItemId)?.term ||
    sprintSentenceDrills.find((sentence) => sentence.id === activeItemId)?.text ||
    dailySprintItems.find((item) => item.id === activeItemId)?.text ||
    '';

  useEffect(() => {
    isMountedRef.current = true;
    const syncVoices = () => {
      const nextVoices = getEnglishVoices();
      setEnglishVoices(nextVoices);
      setSelectedVoiceURI((currentVoiceURI) => {
        if (currentVoiceURI && nextVoices.some((voice) => voice.voiceURI === currentVoiceURI)) {
          return currentVoiceURI;
        }

        const defaultVoice = nextVoices.find((voice) => voice.default) ?? nextVoices[0];
        return defaultVoice?.voiceURI ?? '';
      });
    };

    syncVoices();
    const unsubscribe = subscribeToVoiceChanges(syncVoices);

    return () => {
      isMountedRef.current = false;
      playbackSessionRef.current += 1;
      cancelSpeech();
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage?.setItem(HARD_ITEMS_STORAGE_KEY, JSON.stringify(hardItemIds));
    } catch {
      // Local persistence is optional.
    }
  }, [hardItemIds]);

  useEffect(() => {
    try {
      window.localStorage?.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
    } catch {
      // Local persistence is optional.
    }
  }, [notes]);

  useEffect(() => {
    try {
      window.localStorage?.setItem(VOICE_STORAGE_KEY, selectedVoiceURI);
    } catch {
      // Local persistence is optional.
    }
  }, [selectedVoiceURI]);

  useEffect(() => {
    try {
      window.localStorage?.setItem(DAILY_PROGRESS_STORAGE_KEY, JSON.stringify(dailyProgress));
    } catch {
      // Local persistence is optional.
    }
  }, [dailyProgress]);

  const beginPlaybackSession = (mode) => {
    playbackSessionRef.current += 1;
    setPlaybackMode(mode);
    setIsPaused(false);
    setSpeechError('');
    setActiveItemId('');
    setActiveRoundLabel('');
    setDailyRound(0);
    return playbackSessionRef.current;
  };

  const finishPlaybackSession = (sessionId) => {
    if (!isMountedRef.current || playbackSessionRef.current !== sessionId) {
      return;
    }

    setPlaybackMode('idle');
    setIsPaused(false);
    setActiveItemId('');
    setActiveRoundLabel('');
  };

  const stopCurrentSpeech = () => {
    playbackSessionRef.current += 1;
    cancelSpeech();
    setPlaybackMode('idle');
    setIsPaused(false);
    setActiveItemId('');
    setActiveRoundLabel('');
    setDailyRound(0);
  };

  const pauseCurrentSpeech = () => {
    pauseSpeech();
    setIsPaused(true);
  };

  const resumeCurrentSpeech = () => {
    resumeSpeech();
    setIsPaused(false);
  };

  const speakRawText = async (text, sessionId, nextRate = rate) => {
    if (playbackSessionRef.current !== sessionId) {
      return false;
    }

    await speakText(cleanSpeechText(text), {
      rate: nextRate,
      lang: 'en-US',
      voiceURI: selectedVoiceURI,
    });

    return playbackSessionRef.current === sessionId;
  };

  const speakWordSequence = async (word, sessionId) => {
    const normalRate = Math.max(0.75, Math.min(rate, 0.95));
    const slowRate = getSprintSlowRate(word.term);
    setActiveItemId(word.id);
    setActiveRoundLabel('Normal 1/2');

    if (!(await speakRawText(word.term, sessionId, normalRate))) {
      return false;
    }

    for (let repeatIndex = 1; repeatIndex <= 3; repeatIndex += 1) {
      setActiveRoundLabel(`Slow ${repeatIndex}/3 - ${slowRate.toFixed(2)}x`);
      await wait(180);

      if (!(await speakRawText(word.term, sessionId, slowRate))) {
        return false;
      }
    }

    setActiveRoundLabel('Normal 2/2');
    await wait(180);

    return speakRawText(word.term, sessionId, normalRate);
  };

  const playWord = async (word) => {
    const sessionId = beginPlaybackSession('word');

    try {
      await speakWordSequence(word, sessionId);
    } catch {
      setSpeechError('Word pronunciation is not available in this browser.');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const loopWord = async (word) => {
    const sessionId = beginPlaybackSession('word-loop');

    try {
      while (playbackSessionRef.current === sessionId) {
        if (!(await speakWordSequence(word, sessionId))) {
          return;
        }

        await wait(360);
      }
    } catch {
      setSpeechError('Word loop is not available in this browser.');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const playSentence = async (sentence) => {
    const sessionId = beginPlaybackSession('sentence');
    setActiveItemId(sentence.id);
    setActiveRoundLabel('Sentence');

    try {
      await speakRawText(sentence.text, sessionId, rate);
    } catch {
      setSpeechError('Sentence pronunciation is not available in this browser.');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const loopSentence = async (sentence, count = 10) => {
    const sessionId = beginPlaybackSession('sentence-loop');
    setActiveItemId(sentence.id);

    try {
      for (let repeatIndex = 1; repeatIndex <= count; repeatIndex += 1) {
        if (playbackSessionRef.current !== sessionId) {
          return;
        }

        setActiveRoundLabel(`Sentence ${repeatIndex}/${count}`);

        if (!(await speakRawText(sentence.text, sessionId, rate))) {
          return;
        }

        await wait(450);
      }
    } catch {
      setSpeechError('Sentence loop is not available in this browser.');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const speakDailyItem = async (item, sessionId) => {
    setActiveItemId(item.id);
    setActiveRoundLabel(item.type === 'sentence' ? 'Daily sentence' : 'Daily word');

    const matchingWord = wordById.get(item.sourceId);
    if (matchingWord) {
      return speakWordSequence({ ...matchingWord, id: item.id }, sessionId);
    }

    const matchingSentence = sentenceById.get(item.sourceId);
    const speechText = matchingSentence?.text ?? item.text;
    return speakRawText(speechText, sessionId, item.type === 'sentence' ? rate : getSprintSlowRate(item.text));
  };

  const playDailyItem = async (item) => {
    const sessionId = beginPlaybackSession('daily-one');

    try {
      await speakDailyItem(item, sessionId);
    } catch {
      setSpeechError('Daily sprint item playback is not available in this browser.');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const loopDailySprint = async (roundCount = 30) => {
    const sessionId = beginPlaybackSession('daily-loop');

    try {
      for (let roundIndex = 1; roundIndex <= roundCount; roundIndex += 1) {
        if (playbackSessionRef.current !== sessionId) {
          return;
        }

        setDailyRound(roundIndex);
        setActiveRoundLabel(`Round ${roundIndex}/${roundCount}`);

        for (const item of dailyItems) {
          if (!(await speakDailyItem(item, sessionId))) {
            return;
          }

          await wait(300);
        }

        setDailyProgress({
          completedRounds: roundIndex,
          lastCompletedAt: new Date().toISOString(),
        });
        await wait(800);
      }
    } catch {
      setSpeechError('Daily sprint playback is not available in this browser.');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const toggleHardItem = (itemId) => {
    setHardItemIds((currentIds) =>
      currentIds.includes(itemId)
        ? currentIds.filter((id) => id !== itemId)
        : [...currentIds, itemId],
    );
  };

  const resetDailyProgress = () => {
    setDailyProgress({ completedRounds: 0, lastCompletedAt: '' });
  };

  const updateNote = (noteId, value) => {
    setNotes((currentNotes) => ({
      ...currentNotes,
      [noteId]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="presentation-coach pronunciation-sprint-page"
    >
      <header className="page-header presentation-hero">
        <div>
          <p className="presentation-kicker">TBICS Final Rehearsal</p>
          <h1 className="page-title">Pronunciation Sprint</h1>
          <p className="page-subtitle">
            High-impact word and sentence loops for fragmented, integrated, pathway, and the closing line.
          </p>
        </div>
      </header>

      <section className="glass-panel sprint-control-panel" aria-label="Pronunciation sprint controls">
        <div className="rate-control">
          <Volume2 size={16} />
          <label htmlFor="sprint-rate">Speech rate</label>
          <input
            id="sprint-rate"
            type="range"
            min="0.55"
            max="1.05"
            step="0.05"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
          <span>{rate.toFixed(2)}x</span>
        </div>

        <div className="voice-control">
          <Volume2 size={16} />
          <label htmlFor="sprint-voice">English TTS voice</label>
          <select
            id="sprint-voice"
            value={selectedVoiceURI}
            onChange={(event) => setSelectedVoiceURI(event.target.value)}
            disabled={isSpeaking || englishVoices.length === 0}
          >
            {englishVoices.length === 0 && <option value="">No English voices detected</option>}
            {englishVoices.map((voice) => (
              <option key={voice.voiceURI} value={voice.voiceURI}>
                {voice.name} ({voice.lang}){voice.default ? ' - default' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="sprint-playback-controls">
          {!isSpeaking && (
            <>
              <button
                className="coach-control primary"
                type="button"
                onClick={() => loopDailySprint(30)}
                disabled={dailyItems.length === 0}
              >
                <ListVideo size={18} />
                Loop Daily 30x
              </button>
              <button
                className="coach-control secondary"
                type="button"
                onClick={() => loopDailySprint(10)}
                disabled={dailyItems.length === 0}
              >
                <RotateCcw size={18} />
                Loop 10x
              </button>
            </>
          )}
          {isSpeaking && !isPaused && (
            <button className="coach-control primary" type="button" onClick={pauseCurrentSpeech}>
              <PauseCircle size={18} />
              Pause
            </button>
          )}
          {isSpeaking && isPaused && (
            <button className="coach-control primary" type="button" onClick={resumeCurrentSpeech}>
              <PlayCircle size={18} />
              Resume
            </button>
          )}
          <button className="coach-control danger" type="button" onClick={stopCurrentSpeech} disabled={!isSpeaking}>
            <StopCircle size={18} />
            Stop
          </button>
        </div>

        <div className="sprint-mode-row" aria-label="Daily sprint filter">
          {[
            { id: 'all', label: 'All' },
            { id: 'words', label: 'Words only' },
            { id: 'sentences', label: 'Sentences only' },
          ].map((mode) => (
            <button
              key={mode.id}
              className={`sprint-mode-button ${dailyMode === mode.id ? 'active' : ''}`}
              type="button"
              onClick={() => setDailyMode(mode.id)}
              disabled={isSpeaking}
            >
              {mode.label}
            </button>
          ))}
          <button className="sprint-mode-button ghost" type="button" onClick={resetDailyProgress}>
            Reset rounds
          </button>
        </div>

        {isSpeaking && (
          <div className="active-speech-card sprint-active-card" aria-live="polite">
            <p className="playback-status">
              {playbackMode === 'daily-loop'
                ? `Daily sprint ${dailyRound ? `round ${dailyRound}` : 'starting'}`
                : activeRoundLabel || 'Playing'}
            </p>
            <p className="active-speech-english">{activeItemText || 'Preparing next item...'}</p>
          </div>
        )}

        {speechError && <p className="speech-error">{speechError}</p>}
      </section>

      <section className="glass-panel sprint-daily-panel" aria-label="Daily high-value sprint list">
        <div className="sprint-section-header">
          <div>
            <p className="presentation-kicker">Daily 30x</p>
            <h2>Final Sprint List</h2>
          </div>
          <span>{dailyProgress.completedRounds}/30 rounds</span>
        </div>
        <div className="sprint-daily-list">
          {dailyItems.map((item, index) => (
            <button
              className={`sprint-daily-item ${activeItemId === item.id ? 'active' : ''}`}
              key={item.id}
              type="button"
              onClick={() => playDailyItem(item)}
              disabled={isSpeaking}
            >
              <span>{index + 1}</span>
              <strong>{item.text}</strong>
              <small>{item.type}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="practice-grid sprint-practice-grid">
        <div className="sprint-word-groups">
          {sprintWordGroups.map((group) => (
            <article className="glass-panel sprint-word-panel" key={group.id}>
              <div className="sprint-section-header">
                <div>
                  <p className="presentation-kicker">{group.title}</p>
                  <h2>{group.description}</h2>
                </div>
              </div>

              <div className="sprint-word-list">
                {group.words.map((word, wordIndex) => {
                  const isActive = activeItemId === word.id;
                  const isHard = hardItemIdSet.has(word.id);

                  return (
                    <div className={`sprint-word-card ${isActive ? 'active' : ''}`} key={word.id}>
                      <div className="sprint-card-main">
                        <div>
                          <strong>{wordIndex + 1}. {word.term}</strong>
                          <span>{word.correctCue}</span>
                        </div>
                        <span className="sprint-stress-badge">{group.title}</span>
                      </div>

                      <dl className="sprint-word-details">
                        <div>
                          <dt>音節：</dt>
                          <dd>{word.slow}</dd>
                        </div>
                        <div>
                          <dt>重音：</dt>
                          <dd>{word.stress}</dd>
                        </div>
                        <div>
                          <dt>中文：</dt>
                          <dd lang="zh-Hant">{word.meaningZh}</dd>
                        </div>
                        <div>
                          <dt>例句：</dt>
                          <dd>{word.example}</dd>
                        </div>
                      </dl>

                      {word.avoid.length > 0 && (
                        <p className="sprint-warning">
                          Avoid: {word.avoid.join(', ')}
                        </p>
                      )}

                      <div className="sprint-card-actions">
                        <button className="slow-word-mini-button primary" type="button" onClick={() => playWord(word)}>
                          Play
                        </button>
                        <button className="slow-word-mini-button wide" type="button" onClick={() => loopWord(word)}>
                          Loop one
                        </button>
                        <button
                          className={`slow-word-mini-button wide ${isHard ? 'primary' : ''}`}
                          type="button"
                          onClick={() => toggleHardItem(word.id)}
                          disabled={isSpeaking}
                        >
                          {isHard ? 'Hard item' : 'Mark hard'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <aside className="glass-panel sprint-sentence-panel">
          <div className="sprint-section-header">
            <div>
              <p className="presentation-kicker">Sentence Fluency</p>
              <h2>Key lines from Slide 15 and the closing</h2>
            </div>
          </div>

          <div className="sprint-sentence-list">
            {sprintSentenceDrills.map((sentence) => {
              const isActive = activeItemId === sentence.id;
              const isHard = hardItemIdSet.has(sentence.id);

              return (
                <article className={`sprint-sentence-card ${isActive ? 'active' : ''}`} key={sentence.id}>
                  <div className="sprint-sentence-title">
                    <span>{sentence.title}</span>
                    <button
                      className={`slow-word-mini-button ${isHard ? 'primary' : ''}`}
                      type="button"
                      onClick={() => toggleHardItem(sentence.id)}
                      disabled={isSpeaking}
                    >
                      {isHard ? 'Hard' : 'Mark'}
                    </button>
                  </div>
                  <p className="sprint-sentence-text">{sentence.text}</p>
                  <p className="sprint-pause-line">{renderPauseText(sentence.pauseText)}</p>
                  {sentence.avoid?.length > 0 && (
                    <p className="sprint-warning">Avoid: {sentence.avoid.join(', ')}</p>
                  )}
                  <div className="sprint-watch-row">
                    {sentence.watch.map((watchItem) => (
                      <span key={watchItem}>{watchItem}</span>
                    ))}
                  </div>
                  <div className="sprint-card-actions">
                    <button
                      className="slow-word-mini-button primary"
                      type="button"
                      onClick={() => playSentence(sentence)}
                    >
                      Play
                    </button>
                    <button className="slow-word-mini-button wide" type="button" onClick={() => loopSentence(sentence, 10)}>
                      Loop 10x
                    </button>
                    <button className="slow-word-mini-button wide" type="button" onClick={() => loopSentence(sentence, 30)}>
                      Loop 30x
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </section>

      <section className="glass-panel sprint-notes-panel" aria-label="Speaking diagnosis notes">
        <div className="sprint-section-header">
          <div>
            <p className="presentation-kicker">Speaking Diagnosis</p>
            <h2>Notes for the next recording</h2>
          </div>
        </div>
        <div className="sprint-notes-grid">
          {diagnosticPrompts.map((prompt) => (
            <label className="sprint-note-field" key={prompt.id}>
              <span>{prompt.label}</span>
              <textarea
                value={notes[prompt.id] ?? ''}
                onChange={(event) => updateNote(prompt.id, event.target.value)}
                rows={3}
              />
            </label>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
