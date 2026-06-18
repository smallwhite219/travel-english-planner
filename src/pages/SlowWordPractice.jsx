import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ListVideo,
  PauseCircle,
  PlayCircle,
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

const formatSlowPronunciation = (text = '') =>
  text
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const normalizedPart = part.toLowerCase();
      const speechOverrides = {
        pih: 'pihh',
        nih: 'nihh',
      };

      if (speechOverrides[normalizedPart]) {
        return speechOverrides[normalizedPart];
      }

      if (/^[a-z]$/i.test(part)) {
        return part.toUpperCase();
      }

      return normalizedPart;
    })
    .join(' ... ')
    .replace(/\s+/g, ' ')
    .trim();

const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

export default function SlowWordPractice() {
  const [playbackMode, setPlaybackMode] = useState('idle');
  const [isPaused, setIsPaused] = useState(false);
  const [speechError, setSpeechError] = useState('');
  const [activeSlowWordId, setActiveSlowWordId] = useState('');
  const [activeSlowRound, setActiveSlowRound] = useState('');
  const [selectedSlowGroupId, setSelectedSlowGroupId] = useState('all');
  const [rate, setRate] = useState(0.9);
  const [englishVoices, setEnglishVoices] = useState([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('');
  const playbackSessionRef = useRef(0);
  const isMountedRef = useRef(true);

  const selectedSlowWords =
    selectedSlowGroupId === 'all'
      ? slowWordPracticeWords
      : slowWordPracticeWords.filter((word) => word.groupId === selectedSlowGroupId);
  const activeSlowWord = slowWordPracticeWords.find((word) => word.id === activeSlowWordId);
  const isSpeaking = playbackMode !== 'idle';

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

      await speakText(formatSlowPronunciation(word.slow), {
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
          <p className="page-subtitle">Normal once, slow pronunciation three times, normal once, then loop.</p>
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
              <h3>{activeSlowWord?.term ?? 'Loop pronunciation drill'}</h3>
            </div>
            <span>{selectedSlowWords.length} words</span>
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

          {isSpeaking && (
            <p className="playback-status">
              {playbackMode === 'slow-one'
                ? `Looping one word: ${activeSlowWord?.term ?? 'starting'} (${activeSlowRound || 'ready'}).`
                : `Slow-word loop: ${activeSlowWord?.term ?? 'starting'} (${activeSlowRound || 'ready'}).`}
            </p>
          )}

          {speechError && <p className="speech-error">{speechError}</p>}

          <div className="slow-word-list">
            {selectedSlowWords.map((word) => {
              const isActiveSlowWord = activeSlowWordId === word.id;

              return (
                <button
                  key={word.id}
                  className={`slow-word-card ${isActiveSlowWord ? 'active' : ''}`}
                  type="button"
                  onClick={() => loopSingleSlowWord(word)}
                  disabled={isSpeaking}
                  aria-label={`Loop slow pronunciation for ${word.term}`}
                  title={`Loop ${word.term}`}
                >
                  <strong>{word.term}</strong>
                  <span>{word.slow}</span>
                  <small>Loop one</small>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
