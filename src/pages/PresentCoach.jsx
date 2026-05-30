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
import talperDeckPdf from '../assets/talper-presentation/TALPer_SRL_4L_20min.pdf';
import { cancelSpeech, pauseSpeech, resumeSpeech, speakText } from '../utils/tts';

const clampSlideIndex = (index) =>
  Math.min(Math.max(index, 0), talperPresentationSlides.length - 1);

export default function PresentCoach() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playbackMode, setPlaybackMode] = useState('idle');
  const [isPaused, setIsPaused] = useState(false);
  const [speechError, setSpeechError] = useState('');
  const [rate, setRate] = useState(0.9);
  const playbackSessionRef = useRef(0);
  const isMountedRef = useRef(true);

  const activeSlide = talperPresentationSlides[activeIndex];
  const pdfPageUrl = `${talperDeckPdf}#page=${activeSlide.pdfPage}&toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
  const progress = ((activeIndex + 1) / talperPresentationSlides.length) * 100;
  const isSpeaking = playbackMode !== 'idle';

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
      playbackSessionRef.current += 1;
      cancelSpeech();
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
  };

  const goToSlide = (index) => {
    if (isSpeaking) {
      stopCurrentSpeech();
    }
    setActiveIndex(clampSlideIndex(index));
  };

  const speakCurrentSlide = async () => {
    const sessionId = beginPlaybackSession('single');

    try {
      await speakText(activeSlide.script, { rate, lang: 'en-US' });
    } catch {
      setSpeechError('此瀏覽器目前無法啟動語音合成，請確認 Web Speech API 或系統語音設定。');
    } finally {
      finishPlaybackSession(sessionId);
    }
  };

  const playAllSlides = async () => {
    const sessionId = beginPlaybackSession('all');

    try {
      for (let index = 0; index < talperPresentationSlides.length; index += 1) {
        if (playbackSessionRef.current !== sessionId) {
          return;
        }

        if (isMountedRef.current) {
          setActiveIndex(index);
        }

        await new Promise((resolve) => setTimeout(resolve, 300));

        if (playbackSessionRef.current !== sessionId) {
          return;
        }

        await speakText(talperPresentationSlides[index].script, { rate, lang: 'en-US' });
      }
    } catch {
      setSpeechError('此瀏覽器目前無法啟動語音合成，請確認 Web Speech API 或系統語音設定。');
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
              </>
            )}
            {isSpeaking && !isPaused && (
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
          <p className="playback-status">
            {playbackMode === 'all'
              ? `正在連續播放全部投影片，目前第 ${activeSlide.number} 頁`
              : `正在播放第 ${activeSlide.number} 頁講稿`}
          </p>
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
              min="0.65"
              max="1.1"
              step="0.05"
              value={rate}
              onChange={(event) => setRate(Number(event.target.value))}
            />
            <span>{rate.toFixed(2)}x</span>
          </div>

          {speechError && <p className="speech-error">{speechError}</p>}

          <p className="script-copy">{activeSlide.script}</p>
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
