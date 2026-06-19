import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  ListVideo,
  PauseCircle,
  PlayCircle,
  RotateCcw,
  StopCircle,
  Volume2,
} from 'lucide-react';
import {
  talperPresentationMeta,
  talperPresentationSlides,
} from '../data/talper-presentation';
import talperDeckPdf from '../assets/talper-presentation/TBICS2026_TALPer_SRL4L_15min.pdf';
import {
  cancelSpeech,
  getEnglishVoices,
  pauseSpeech,
  resumeSpeech,
  speakText,
  subscribeToVoiceChanges,
} from '../utils/tts';

const clampSlideIndex = (index) =>
  Math.min(Math.max(index, 0), talperPresentationSlides.length - 1);

const SPEECH_RATE_MIN = 0.45;
const SPEECH_RATE_MAX = 1.1;

const splitScriptParagraphs = (text = '') =>
  text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const getScriptParagraphPairs = (slide) => {
  const englishParagraphs = splitScriptParagraphs(slide.script);
  const zhParagraphs = splitScriptParagraphs(slide.scriptZh);

  return englishParagraphs.map((english, index) => ({
    english,
    zh: zhParagraphs[index] ?? '',
  }));
};

const getNarrationScript = (slide) => slide.narrationScript || slide.script;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const tokenizeScript = (script) =>
  script.match(/[A-Za-z]+(?:[-'][A-Za-z]+)*|\r?\n|\s+|[^A-Za-z\s]+/g) ?? [];

const isWordToken = (token) => /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/.test(token);

const cleanPlaybackCueText = (text = '') =>
  text
    .replace(/\/+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim();

const cleanSentenceText = (text = '') =>
  text
    .replace(/[｜/]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim();

const splitPracticeSentences = (script = '') =>
  cleanSentenceText(script)
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter((sentence) => /[A-Za-z]/.test(sentence)) ?? [];

const splitZhSentences = (text = '') =>
  text
    .match(/[^\u3002\uff01\uff1f]+[\u3002\uff01\uff1f]?/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) ?? [];

const createSpeechSegmentsForParagraph = (slide, paragraph, paragraphIndex) => {
  const narrationParagraphs = splitScriptParagraphs(getNarrationScript(slide));
  const narrationSentences = splitPracticeSentences(narrationParagraphs[paragraphIndex] ?? paragraph.english);
  const englishSentences = splitPracticeSentences(paragraph.english);
  const zhSentences = splitZhSentences(paragraph.zh);

  return englishSentences.map((english, sentenceIndex) => ({
    id: `${slide.number}-${paragraphIndex}-${sentenceIndex}`,
    slideNumber: slide.number,
    sentenceNumber: sentenceIndex + 1,
    paragraphIndex,
    english: cleanPlaybackCueText(english),
    zh: zhSentences.length === englishSentences.length ? zhSentences[sentenceIndex] : paragraph.zh,
    speech: cleanPlaybackCueText(
      narrationSentences.length === englishSentences.length
        ? narrationSentences[sentenceIndex]
        : english,
    ),
  }));
};

const getSlideSpeechSegments = (slide) =>
  getScriptParagraphPairs(slide).flatMap((paragraph, paragraphIndex) =>
    createSpeechSegmentsForParagraph(slide, paragraph, paragraphIndex),
  );
export default function PresentCoach() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playbackMode, setPlaybackMode] = useState('idle');
  const [isPaused, setIsPaused] = useState(false);
  const [speechError, setSpeechError] = useState('');
  const [lastSpokenWord, setLastSpokenWord] = useState('');
  const [lastSpokenSentence, setLastSpokenSentence] = useState('');
  const [activeSpeechCue, setActiveSpeechCue] = useState(null);
  const [rate, setRate] = useState(0.9);
  const [englishVoices, setEnglishVoices] = useState([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('');
  const playbackSessionRef = useRef(0);
  const isMountedRef = useRef(true);

  const activeSlide = talperPresentationSlides[activeIndex];
  const pdfPageUrl = `${talperDeckPdf}#page=${activeSlide.pdfPage}&toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
  const progress = ((activeIndex + 1) / talperPresentationSlides.length) * 100;
  const isSpeaking = playbackMode !== 'idle';
  const scriptParagraphPairs = getScriptParagraphPairs(activeSlide);

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
    setLastSpokenWord('');
    setLastSpokenSentence('');
    setActiveSpeechCue(null);
  };

  const goToSlide = (index) => {
    if (isSpeaking) {
      stopCurrentSpeech();
    }
    setActiveIndex(clampSlideIndex(index));
  };

  const speakSegment = async (segment, sessionId) => {
    if (playbackSessionRef.current !== sessionId) {
      return false;
    }

    setLastSpokenWord('');
    setLastSpokenSentence(segment.english);
    setActiveSpeechCue(segment);

    await speakText(segment.speech || segment.english, {
      rate,
      lang: 'en-US',
      voiceURI: selectedVoiceURI,
    });

    return playbackSessionRef.current === sessionId;
  };

  const speakSlideSegments = async (slide, sessionId) => {
    const segments = getSlideSpeechSegments(slide);

    for (const segment of segments) {
      if (!(await speakSegment(segment, sessionId))) {
        return false;
      }
    }

    return true;
  };

  const speakCurrentSlide = async () => {
    const sessionId = beginPlaybackSession('single');

    try {
      await speakSlideSegments(activeSlide, sessionId);
    } catch {
      setSpeechError(
        'Speech playback is not available in this browser. Please try Chrome or Edge with an English voice installed.',
      );
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const playSlides = async ({ loop = false } = {}) => {
    const sessionId = beginPlaybackSession(loop ? 'all-loop' : 'all');

    try {
      do {
        for (let index = 0; index < talperPresentationSlides.length; index += 1) {
          if (playbackSessionRef.current !== sessionId) {
            return;
          }

          if (isMountedRef.current) {
            setActiveIndex(index);
          }

          await sleep(300);

          if (!(await speakSlideSegments(talperPresentationSlides[index], sessionId))) {
            return;
          }
        }
      } while (loop && playbackSessionRef.current === sessionId);
    } catch {
      setSpeechError(
        'Speech playback is not available in this browser. Please try Chrome or Edge with an English voice installed.',
      );
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const playAllSlides = () => playSlides({ loop: false });

  const loopAllSlides = () => playSlides({ loop: true });

  const loopCurrentSlide = async () => {
    const sessionId = beginPlaybackSession('slide-loop');
    const slide = activeSlide;

    try {
      do {
        if (!(await speakSlideSegments(slide, sessionId))) {
          return;
        }
      } while (playbackSessionRef.current === sessionId);
    } catch {
      setSpeechError(
        'Speech playback is not available in this browser. Please try Chrome or Edge with an English voice installed.',
      );
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const speakWord = async (word) => {
    const sessionId = beginPlaybackSession('word');
    setLastSpokenWord(word);
    setLastSpokenSentence('');
    setActiveSpeechCue(null);

    try {
      await speakText(word, {
        rate: Math.max(SPEECH_RATE_MIN, Math.min(rate, 0.95)),
        lang: 'en-US',
        voiceURI: selectedVoiceURI,
      });
    } catch {
      setSpeechError('Word pronunciation is not available in this browser.');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const speakSentence = async (segment) => {
    const sessionId = beginPlaybackSession('sentence');

    try {
      await speakSegment(segment, sessionId);
    } catch {
      setSpeechError('Sentence pronunciation is not available in this browser.');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const loopSentence = async (segment) => {
    const sessionId = beginPlaybackSession('sentence-loop');

    try {
      do {
        if (!(await speakSegment(segment, sessionId))) {
          return;
        }
      } while (playbackSessionRef.current === sessionId);
    } catch {
      setSpeechError('Sentence pronunciation is not available in this browser.');
    } finally {
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

  const renderScriptTokens = (script) =>
    tokenizeScript(script).map((token, index) => {
      if (token === '\n' || token === '\r\n') {
        return <br key={`br-${index}`} />;
      }

      if (!isWordToken(token)) {
        return token;
      }

      const isActiveWord = lastSpokenWord.toLowerCase() === token.toLowerCase();

      return (
        <button
          key={`${token}-${index}`}
          className={`script-word ${isActiveWord ? 'active' : ''}`}
          type="button"
          onClick={() => speakWord(token)}
          aria-label={`Pronounce ${token}`}
          title={`Pronounce ${token}`}
        >
          {token}
        </button>
      );
    });

  const renderSentenceControls = (paragraph, paragraphIndex) => {
    const segments = createSpeechSegmentsForParagraph(activeSlide, paragraph, paragraphIndex);

    if (segments.length === 0) {
      return null;
    }

    return (
      <div className="sentence-practice" aria-label="Sentence pronunciation controls">
        {segments.map((segment) => {
          const isActiveSentence = activeSpeechCue?.id === segment.id;

          return (
            <span className="sentence-practice-set" key={segment.id}>
              <button
                className={`sentence-practice-button ${isActiveSentence ? 'active' : ''}`}
                type="button"
                onClick={() => speakSentence(segment)}
                aria-label={`Pronounce sentence ${segment.sentenceNumber}: ${segment.english}`}
                title={`Pronounce sentence ${segment.sentenceNumber}`}
              >
                <Volume2 size={13} />
                <span>{segment.sentenceNumber}</span>
              </button>
              <button
                className={`sentence-practice-button loop ${isActiveSentence && playbackMode === 'sentence-loop' ? 'active' : ''}`}
                type="button"
                onClick={() => loopSentence(segment)}
                aria-label={`Loop sentence ${segment.sentenceNumber}: ${segment.english}`}
                title={`Loop sentence ${segment.sentenceNumber}`}
              >
                <RotateCcw size={13} />
              </button>
            </span>
          );
        })}
      </div>
    );
  };

  const playbackStatusText = (() => {
    if (playbackMode === 'all') {
      return `Playing all slides. Current slide: ${activeSlide.number}.`;
    }
    if (playbackMode === 'all-loop') {
      return `Looping all slides. Current slide: ${activeSlide.number}.`;
    }
    if (playbackMode === 'slide-loop') {
      return `Looping slide ${activeSlide.number}.`;
    }
    if (playbackMode === 'sentence-loop') {
      return `Looping sentence ${activeSpeechCue?.sentenceNumber ?? ''}.`;
    }
    if (playbackMode === 'word') {
      return `Pronouncing: ${lastSpokenWord}`;
    }
    if (playbackMode === 'sentence') {
      return `Practicing sentence ${activeSpeechCue?.sentenceNumber ?? ''}.`;
    }
    return `Playing slide ${activeSlide.number}.`;
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="presentation-coach"
    >
      <header className="page-header presentation-hero">
        <div>
          <p className="presentation-kicker">Conference Rehearsal Deck</p>
          <h1 className="page-title">Presentation Coach</h1>
          <p className="page-subtitle">{talperPresentationMeta.title}</p>
        </div>
        <a
          className="source-link"
          href={talperPresentationMeta.sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={16} />
          Open Slides
        </a>
      </header>

      <section className="presentation-stage glass-panel" aria-label="TALPer presentation slide player">
        <div className="stage-topline">
          <div>
            <span className="slide-pill">Slide {activeSlide.number}</span>
            <span className="slide-section">{activeSlide.section}</span>
          </div>
          <span className="deck-duration">{talperPresentationMeta.totalDuration}</span>
        </div>

        <div className="slide-frame-shell">
          <iframe
            key={activeSlide.pdfPage}
            className="slide-frame"
            src={pdfPageUrl}
            title={`Slide ${activeSlide.number}: ${activeSlide.title}`}
          />
        </div>

        <div className="slide-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className="slide-controls">
          <button
            className="coach-control secondary"
            onClick={() => goToSlide(activeIndex - 1)}
            disabled={activeIndex === 0 || playbackMode === 'all'}
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <div className="listen-controls" aria-label="Narration controls">
            {!isSpeaking && (
              <>
                <button className="coach-control primary" onClick={speakCurrentSlide}>
                  <PlayCircle size={18} />
                  Listen
                </button>
                <button className="coach-control secondary" onClick={playAllSlides}>
                  <ListVideo size={18} />
                  Play All
                </button>
                <button className="coach-control secondary" onClick={loopCurrentSlide}>
                  <RotateCcw size={18} />
                  Loop Slide
                </button>
                <button className="coach-control secondary" onClick={loopAllSlides}>
                  <ListVideo size={18} />
                  Loop All
                </button>
              </>
            )}
            {isSpeaking && !isPaused && playbackMode !== 'word' && (
              <button className="coach-control primary" onClick={pauseCurrentSpeech}>
                <PauseCircle size={18} />
                Pause
              </button>
            )}
            {isSpeaking && isPaused && (
              <button className="coach-control primary" onClick={resumeCurrentSpeech}>
                <PlayCircle size={18} />
                Resume
              </button>
            )}
            <button className="coach-control danger" onClick={stopCurrentSpeech} disabled={!isSpeaking}>
              <StopCircle size={18} />
              Stop
            </button>
          </div>

          <button
            className="coach-control secondary"
            onClick={() => goToSlide(activeIndex + 1)}
            disabled={activeIndex === talperPresentationSlides.length - 1 || playbackMode === 'all'}
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>

        {isSpeaking && (
          <div className="active-speech-card" aria-live="polite">
            <p className="playback-status">{playbackStatusText}</p>
            {activeSpeechCue && (
              <>
                <p className="active-speech-english">{activeSpeechCue.english}</p>
                {activeSpeechCue.zh && (
                  <p className="active-speech-zh" lang="zh-Hant">
                    {activeSpeechCue.zh}
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </section>

      <section className="practice-grid">
        <article className="glass-panel script-panel">
          <div className="script-header">
            <div>
              <p className="presentation-kicker">Speaker Notes</p>
              <h2>{activeSlide.title}</h2>
              <p>{activeSlide.subtitle}</p>
            </div>
            <button className="round-reset" onClick={() => goToSlide(0)} aria-label="Back to first slide">
              <RotateCcw size={18} />
            </button>
          </div>

          <div className="rate-control">
            <Volume2 size={16} />
            <label htmlFor="speech-rate">Speech rate</label>
            <input
              id="speech-rate"
              type="range"
              min={SPEECH_RATE_MIN}
              max={SPEECH_RATE_MAX}
              step="0.05"
              value={rate}
              onChange={(event) => setRate(Number(event.target.value))}
            />
            <span>{rate.toFixed(2)}x</span>
          </div>

          <div className="voice-control">
            <Volume2 size={16} />
            <label htmlFor="english-voice">English TTS voice</label>
            <select
              id="english-voice"
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

          {speechError && <p className="speech-error">{speechError}</p>}

          <div className="script-copy bilingual-script">
            {scriptParagraphPairs.map((paragraph, index) => (
              <div className="script-pair" key={`${activeSlide.number}-${index}`}>
                <p className="script-copy-en interactive-script">
                  {renderScriptTokens(paragraph.english)}
                </p>
                {renderSentenceControls(paragraph, index)}
                {paragraph.zh && (
                  <p className="script-copy-zh" lang="zh-Hant">
                    {paragraph.zh}
                  </p>
                )}
              </div>
            ))}
          </div>
        </article>

        <aside className="glass-panel slide-list-panel">
          <div className="slide-list-title">
            <FileText size={18} />
            <span>Slide Navigator</span>
          </div>
          <div className="slide-list">
            {talperPresentationSlides.map((slide, index) => (
              <button
                key={slide.number}
                className={`slide-list-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span>{String(slide.number).padStart(2, '0')}</span>
                <strong>{slide.title}</strong>
                <small>{slide.section}</small>
              </button>
            ))}
          </div>
        </aside>
      </section>
    </motion.div>
  );
}
