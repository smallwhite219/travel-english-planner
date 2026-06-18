import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUp,
  EyeOff,
  ListVideo,
  PauseCircle,
  PlayCircle,
  RotateCcw,
  StopCircle,
  Volume2,
} from 'lucide-react';
import {
  slowWordPracticeGroups,
  slowWordPracticeWords,
} from '../data/slow-word-practice';
import {
  cancelSpeech,
  getEnglishVoices,
  pauseSpeech,
  resumeSpeech,
  speakText,
  subscribeToVoiceChanges,
} from '../utils/tts';

const WORD_ORDER_STORAGE_KEY = 'travelEnglishSlowWordOrder';

const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

const defaultWordOrder = slowWordPracticeWords.map((word) => word.id);

const normalizeWordOrder = (storedOrder) => {
  const availableIds = new Set(defaultWordOrder);
  const uniqueStoredIds = Array.isArray(storedOrder)
    ? storedOrder.filter((id, index) => availableIds.has(id) && storedOrder.indexOf(id) === index)
    : [];
  const missingIds = defaultWordOrder.filter((id) => !uniqueStoredIds.includes(id));

  return [...uniqueStoredIds, ...missingIds];
};

const loadSavedWordOrder = () => {
  try {
    const rawOrder = window.localStorage?.getItem(WORD_ORDER_STORAGE_KEY);
    return normalizeWordOrder(rawOrder ? JSON.parse(rawOrder) : []);
  } catch {
    return defaultWordOrder;
  }
};

export default function SlowWordPractice() {
  const [playbackMode, setPlaybackMode] = useState('idle');
  const [isPaused, setIsPaused] = useState(false);
  const [speechError, setSpeechError] = useState('');
  const [activeSlowWordId, setActiveSlowWordId] = useState('');
  const [activeSlowRound, setActiveSlowRound] = useState('');
  const [selectedSlowGroupId, setSelectedSlowGroupId] = useState('all');
  const [wordOrder, setWordOrder] = useState(loadSavedWordOrder);
  const [skippedWordIds, setSkippedWordIds] = useState([]);
  const [rate, setRate] = useState(0.9);
  const [englishVoices, setEnglishVoices] = useState([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('');
  const playbackSessionRef = useRef(0);
  const isMountedRef = useRef(true);

  const wordById = useMemo(
    () => new Map(slowWordPracticeWords.map((word) => [word.id, word])),
    [],
  );
  const skippedWordIdSet = useMemo(() => new Set(skippedWordIds), [skippedWordIds]);
  const orderedSlowWords = useMemo(
    () => normalizeWordOrder(wordOrder).map((id) => wordById.get(id)).filter(Boolean),
    [wordById, wordOrder],
  );
  const selectedGroupWords =
    selectedSlowGroupId === 'all'
      ? orderedSlowWords
      : orderedSlowWords.filter((word) => word.groupId === selectedSlowGroupId);
  const selectedSlowWords = selectedGroupWords.filter((word) => !skippedWordIdSet.has(word.id));
  const activeSlowWord = slowWordPracticeWords.find((word) => word.id === activeSlowWordId);
  const isSpeaking = playbackMode !== 'idle';
  const skippedSelectedCount = selectedGroupWords.length - selectedSlowWords.length;

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
      window.localStorage?.setItem(WORD_ORDER_STORAGE_KEY, JSON.stringify(wordOrder));
    } catch {
      // Order persistence is optional; playback still works without localStorage.
    }
  }, [wordOrder]);

  const beginPlaybackSession = (mode) => {
    playbackSessionRef.current += 1;
    setSpeechError('');
    setPlaybackMode(mode);
    setIsPaused(false);
    setActiveSlowWordId('');
    setActiveSlowRound('');
    return playbackSessionRef.current;
  };

  const finishPlaybackSession = (sessionId) => {
    if (!isMountedRef.current || playbackSessionRef.current !== sessionId) {
      return;
    }

    setPlaybackMode('idle');
    setIsPaused(false);
  };

  const stopCurrentSpeech = () => {
    playbackSessionRef.current += 1;
    cancelSpeech();
    setPlaybackMode('idle');
    setIsPaused(false);
    setActiveSlowWordId('');
    setActiveSlowRound('');
  };

  const moveWord = (wordId, direction) => {
    const visibleIds = selectedGroupWords.map((word) => word.id);
    const visibleIndex = visibleIds.indexOf(wordId);
    const targetVisibleIndex = visibleIndex + direction;

    if (visibleIndex < 0 || targetVisibleIndex < 0 || targetVisibleIndex >= visibleIds.length) {
      return;
    }

    const targetWordId = visibleIds[targetVisibleIndex];
    setWordOrder((currentOrder) => {
      const nextOrder = normalizeWordOrder(currentOrder);
      const fromIndex = nextOrder.indexOf(wordId);
      const toIndex = nextOrder.indexOf(targetWordId);

      if (fromIndex < 0 || toIndex < 0) {
        return nextOrder;
      }

      const [movedId] = nextOrder.splice(fromIndex, 1);
      nextOrder.splice(toIndex, 0, movedId);
      return nextOrder;
    });
  };

  const toggleSkippedWord = (wordId) => {
    setSkippedWordIds((currentIds) =>
      currentIds.includes(wordId)
        ? currentIds.filter((id) => id !== wordId)
        : [...currentIds, wordId],
    );
  };

  const resetOrder = () => {
    setWordOrder(defaultWordOrder);
  };

  const clearSkippedWords = () => {
    setSkippedWordIds([]);
  };

  const speakSlowWordSequence = async (word, sessionId) => {
    if (playbackSessionRef.current !== sessionId) {
      return false;
    }

    const normalRate = Math.max(0.75, Math.min(rate, 0.95));
    setActiveSlowWordId(word.id);
    setActiveSlowRound('Normal 1/2');

    await speakText(word.term, {
      rate: normalRate,
      lang: 'en-US',
      voiceURI: selectedVoiceURI,
    });

    for (let repeatIndex = 1; repeatIndex <= 3; repeatIndex += 1) {
      if (playbackSessionRef.current !== sessionId) {
        return false;
      }

      setActiveSlowRound(`Slow ${repeatIndex}/3`);
      await wait(180);

      if (playbackSessionRef.current !== sessionId) {
        return false;
      }

      await speakText(word.term, {
        rate: 0.65,
        lang: 'en-US',
        voiceURI: selectedVoiceURI,
      });
    }

    if (playbackSessionRef.current !== sessionId) {
      return false;
    }

    setActiveSlowRound('Normal 2/2');
    await wait(180);

    if (playbackSessionRef.current !== sessionId) {
      return false;
    }

    await speakText(word.term, {
      rate: normalRate,
      lang: 'en-US',
      voiceURI: selectedVoiceURI,
    });

    return playbackSessionRef.current === sessionId;
  };

  const playSlowWordLoop = async () => {
    const sessionId = beginPlaybackSession('slow-all');

    try {
      while (playbackSessionRef.current === sessionId) {
        for (const word of selectedSlowWords) {
          const shouldContinue = await speakSlowWordSequence(word, sessionId);

          if (!shouldContinue) {
            return;
          }

          await wait(260);
        }
      }
    } catch {
      setSpeechError('Slow-word playback is not available in this browser.');
    } finally {
      if (playbackSessionRef.current === sessionId) {
        setActiveSlowWordId('');
        setActiveSlowRound('');
      }
      finishPlaybackSession(sessionId);
    }
  };

  const loopSingleSlowWord = async (word) => {
    const sessionId = beginPlaybackSession('slow-one');

    try {
      while (playbackSessionRef.current === sessionId) {
        const shouldContinue = await speakSlowWordSequence(word, sessionId);

        if (!shouldContinue) {
          return;
        }

        await wait(320);
      }
    } catch {
      setSpeechError('Slow-word playback is not available in this browser.');
    } finally {
      if (playbackSessionRef.current === sessionId) {
        setActiveSlowWordId('');
        setActiveSlowRound('');
      }
      finishPlaybackSession(sessionId);
    }
  };

  const pauseCurrentSpeech = () => {
    pauseSpeech();
    setIsPaused(true);
  };

  const resumeCurrentSpeech = () => {
    resumeSpeech();
    setIsPaused(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="presentation-coach slow-word-page"
    >
      <header className="page-header presentation-hero">
        <div>
          <p className="presentation-kicker">Pronunciation Drill</p>
          <h1 className="page-title">Slow Word</h1>
          <p className="page-subtitle">Normal word once, slow word three times, normal word once, then loop.</p>
        </div>
      </header>

      <section className="glass-panel script-panel slow-word-practice-page" aria-label="Slow-word pronunciation loop">
        <div className="rate-control">
          <Volume2 size={16} />
          <label htmlFor="slow-word-rate">Word rate</label>
          <input
            id="slow-word-rate"
            type="range"
            min="0.65"
            max="1.1"
            step="0.05"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
          <span>{rate.toFixed(2)}x</span>
        </div>

        <div className="voice-control">
          <Volume2 size={16} />
          <label htmlFor="slow-word-voice">English TTS voice</label>
          <select
            id="slow-word-voice"
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

        <div className="slow-word-practice">
          <div className="slow-word-header">
            <div>
              <p className="presentation-kicker">Slow Word</p>
              <div className="slow-word-title-row">
                <h3>{activeSlowWord?.term ?? 'Loop pronunciation drill'}</h3>
                <span className="slow-word-rhythm-badge" lang="zh-Hant">
                  正常 1 次 → 慢速 3 次 → 正常 1 次
                </span>
              </div>
              <p className="slow-word-explainer" lang="zh-Hant">
                可自行調整順序，也可只在本次略過；慢速會念原英文單字，不會刪除單字。
              </p>
            </div>
            <span>
              {selectedSlowWords.length}/{selectedGroupWords.length} active
            </span>
          </div>

          <div className="slow-word-controls">
            <select
              id="slow-word-group"
              value={selectedSlowGroupId}
              onChange={(event) => setSelectedSlowGroupId(event.target.value)}
              disabled={isSpeaking}
              aria-label="Slow-word category"
            >
              <option value="all">All slow words</option>
              {slowWordPracticeGroups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.title}
                </option>
              ))}
            </select>

            {!isSpeaking && (
              <button
                className="coach-control secondary"
                type="button"
                onClick={playSlowWordLoop}
                disabled={selectedSlowWords.length === 0}
              >
                <ListVideo size={16} />
                Loop All
              </button>
            )}
            {isSpeaking && !isPaused && (
              <button className="coach-control primary" type="button" onClick={pauseCurrentSpeech}>
                <PauseCircle size={16} />
                Pause
              </button>
            )}
            {isSpeaking && isPaused && (
              <button className="coach-control primary" type="button" onClick={resumeCurrentSpeech}>
                <PlayCircle size={16} />
                Resume
              </button>
            )}
            <button className="coach-control danger" type="button" onClick={stopCurrentSpeech} disabled={!isSpeaking}>
              <StopCircle size={16} />
              Stop
            </button>
          </div>

          <div className="slow-word-session-tools" aria-label="Slow-word session tools">
            <button
              className="slow-word-tool-button"
              type="button"
              onClick={clearSkippedWords}
              disabled={isSpeaking || skippedSelectedCount === 0}
            >
              <RotateCcw size={14} />
              取消本次略過
            </button>
            <button className="slow-word-tool-button" type="button" onClick={resetOrder} disabled={isSpeaking}>
              <RotateCcw size={14} />
              重設順序
            </button>
            <span lang="zh-Hant">本次略過 {skippedSelectedCount} 個；不會刪除單字。</span>
          </div>

          {isSpeaking && (
            <p className="playback-status">
              {playbackMode === 'slow-one'
                ? `Looping one word: ${activeSlowWord?.term ?? 'starting'} (${activeSlowRound || 'ready'}).`
                : `Slow-word loop: ${activeSlowWord?.term ?? 'starting'} (${activeSlowRound || 'ready'}).`}
            </p>
          )}

          {speechError && <p className="speech-error">{speechError}</p>}

          <div className="slow-word-list">
            {selectedGroupWords.map((word, index) => {
              const isActiveSlowWord = activeSlowWordId === word.id;
              const isSkippedWord = skippedWordIdSet.has(word.id);

              return (
                <article
                  key={word.id}
                  className={`slow-word-card ${isActiveSlowWord ? 'active' : ''} ${isSkippedWord ? 'skipped' : ''}`}
                >
                  <strong>{word.term}</strong>
                  <span>{word.slow}</span>
                  <div className="slow-word-card-controls">
                    <button
                      className="slow-word-mini-button"
                      type="button"
                      onClick={() => moveWord(word.id, -1)}
                      disabled={isSpeaking || index === 0}
                      aria-label={`Move ${word.term} earlier`}
                      title="Move earlier"
                    >
                      <ArrowUp size={13} />
                    </button>
                    <button
                      className="slow-word-mini-button"
                      type="button"
                      onClick={() => moveWord(word.id, 1)}
                      disabled={isSpeaking || index === selectedGroupWords.length - 1}
                      aria-label={`Move ${word.term} later`}
                      title="Move later"
                    >
                      <ArrowDown size={13} />
                    </button>
                    <button
                      className="slow-word-mini-button wide"
                      type="button"
                      onClick={() => toggleSkippedWord(word.id)}
                      disabled={isSpeaking}
                    >
                      <EyeOff size={13} />
                      {isSkippedWord ? '加入本次' : '本次略過'}
                    </button>
                    <button
                      className="slow-word-mini-button wide primary"
                      type="button"
                      onClick={() => loopSingleSlowWord(word)}
                      disabled={isSpeaking || isSkippedWord}
                    >
                      Loop one
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
