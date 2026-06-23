import { useCallback, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  PlayCircle,
  RotateCcw,
  Shuffle,
  Volume2,
} from 'lucide-react';
import { termsFlashcards } from '../data/terms-flashcards';
import { cancelSpeech, speakText } from '../utils/tts';

const splitPronunciation = (pronunciation = '') =>
  pronunciation
    .replace(/\s+/g, ' ')
    .split(/[-\s]+/)
    .map((part) => part.trim())
    .filter(Boolean);

const getStressParts = (pronunciation = '') =>
  splitPronunciation(pronunciation).filter((part) => /[A-Z]{2,}/.test(part));

const getSpeechSyllableText = (pronunciation = '') =>
  splitPronunciation(pronunciation)
    .map((part) => part.toLowerCase())
    .join('. ');

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomIndex = (currentIndex, length) => {
  if (length <= 1) {
    return 0;
  }

  let nextIndex = currentIndex;

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }

  return nextIndex;
};

export default function TermsDrill() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechError, setSpeechError] = useState('');
  const speechSessionRef = useRef(0);

  const currentTerm = termsFlashcards[currentIndex];
  const stressParts = useMemo(
    () => getStressParts(currentTerm?.pronunciation),
    [currentTerm?.pronunciation],
  );

  const goToCard = useCallback((nextIndex, nextDirection = 1) => {
    cancelSpeech();
    speechSessionRef.current += 1;
    setIsSpeaking(false);
    setSpeechError('');
    setDirection(nextDirection);
    setIsFlipped(false);
    setCurrentIndex(nextIndex);
  }, []);

  const handlePrev = useCallback(() => {
    goToCard((currentIndex - 1 + termsFlashcards.length) % termsFlashcards.length, -1);
  }, [currentIndex, goToCard]);

  const handleNext = useCallback(() => {
    goToCard((currentIndex + 1) % termsFlashcards.length, 1);
  }, [currentIndex, goToCard]);

  const handleRandom = useCallback(() => {
    goToCard(getRandomIndex(currentIndex, termsFlashcards.length), 1);
  }, [currentIndex, goToCard]);

  const playPronunciation = useCallback(async () => {
    const sessionId = speechSessionRef.current + 1;
    speechSessionRef.current = sessionId;
    cancelSpeech();
    setIsSpeaking(true);
    setSpeechError('');

    try {
      await speakText(currentTerm.word, { rate: 0.65, lang: 'en-US' });

      const syllableText = getSpeechSyllableText(currentTerm.pronunciation);

      for (let round = 0; round < 3; round += 1) {
        if (speechSessionRef.current !== sessionId) {
          return;
        }

        await wait(180);
        await speakText(syllableText, { rate: 0.55, lang: 'en-US' });
      }

      if (speechSessionRef.current !== sessionId) {
        return;
      }

      await wait(220);
      await speakText(currentTerm.word, { rate: 0.78, lang: 'en-US' });
    } catch {
      setSpeechError('這個瀏覽器目前無法使用 Web Speech API 播放發音。');
    } finally {
      if (speechSessionRef.current === sessionId) {
        setIsSpeaking(false);
      }
    }
  }, [currentTerm]);

  if (!currentTerm) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex min-h-0 flex-col"
    >
      <header className="page-header mb-4">
        <div className="flex w-full items-start justify-between gap-3">
          <div>
            <h1 className="page-title flex items-center gap-2 leading-tight">
              <GraduationCap size={28} className="text-blue-400" />
              Terms Flashcards
            </h1>
            <p className="page-subtitle">
              Conference English pronunciation cards for stress, meaning, and example practice
            </p>
          </div>
          <div className="rounded-full border border-blue-500/30 bg-blue-950/30 px-3 py-1.5 text-sm font-semibold text-blue-100">
            {currentIndex + 1} / {termsFlashcards.length}
          </div>
        </div>
      </header>

      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-gray-800">
        <motion.div
          className="h-full rounded-full bg-blue-400"
          animate={{ width: `${((currentIndex + 1) / termsFlashcards.length) * 100}%` }}
          transition={{ duration: 0.25 }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.button
            key={currentTerm.id}
            type="button"
            custom={direction}
            initial={{ x: direction * 70, opacity: 0, scale: 0.97 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction * -70, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={() => setIsFlipped((value) => !value)}
            className="glass-panel min-h-[360px] w-full rounded-2xl p-5 text-left shadow-xl transition-all md:min-h-[410px] md:p-8"
          >
            <div className="flex h-full min-h-[320px] flex-col justify-between gap-6 md:min-h-[360px]">
              {!isFlipped ? (
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <span className="mb-4 rounded-full border border-gray-700 bg-gray-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Front
                  </span>
                  <h2 className="max-w-full break-words text-4xl font-bold leading-tight text-white md:text-5xl">
                    {currentTerm.word}
                  </h2>
                  <p className="mt-5 rounded-xl border border-blue-500/30 bg-blue-950/30 px-4 py-3 font-mono text-xl font-semibold tracking-wide text-blue-200 md:text-2xl">
                    {currentTerm.pronunciation}
                  </p>
                  {stressParts.length > 0 && (
                    <p className="mt-3 text-sm font-medium text-emerald-200">
                      重音：{stressParts.join(', ')}
                    </p>
                  )}
                  <p className="mt-8 text-sm text-gray-500">點擊卡片看中文與例句</p>
                </div>
              ) : (
                <div className="flex flex-1 flex-col justify-center gap-4">
                  <span className="w-fit rounded-full border border-gray-700 bg-gray-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Back
                  </span>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-gray-400">中文解釋</p>
                    <p className="text-2xl font-bold leading-snug text-blue-100">{currentTerm.meaning}</p>
                  </div>
                  <div className="rounded-xl border-l-4 border-blue-400 bg-gray-950/60 p-4">
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-400">
                      <BookOpen size={16} />
                      英文例句
                    </p>
                    <p className="text-lg leading-relaxed text-white">{currentTerm.example}</p>
                    <p className="mt-3 text-base leading-relaxed text-gray-300">{currentTerm.translation}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-medium">
                    <span className="rounded-full bg-gray-800 px-3 py-1 text-gray-300">
                      {currentTerm.category}
                    </span>
                    <span className="rounded-full bg-gray-800 px-3 py-1 text-gray-300">
                      Difficulty {currentTerm.difficulty}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.button>
        </AnimatePresence>

        {speechError && <p className="mt-3 text-sm text-red-200">{speechError}</p>}

        <button
          type="button"
          onClick={playPronunciation}
          disabled={isSpeaking}
          className="glass-button primary mt-4 w-full justify-center py-3.5 text-base"
        >
          {isSpeaking ? <Volume2 size={20} /> : <PlayCircle size={20} />}
          {isSpeaking ? '播放中...' : '播放發音'}
        </button>
      </div>

      <nav className="grid grid-cols-3 gap-2 pb-6 pt-4">
        <button type="button" onClick={handlePrev} className="glass-button justify-center py-3">
          <ChevronLeft size={18} />
          上一張
        </button>
        <button type="button" onClick={handleRandom} className="glass-button justify-center py-3">
          <Shuffle size={18} />
          隨機練習
        </button>
        <button type="button" onClick={handleNext} className="glass-button primary justify-center py-3">
          下一張
          <ChevronRight size={18} />
        </button>
      </nav>

      <button
        type="button"
        onClick={() => {
          cancelSpeech();
          speechSessionRef.current += 1;
          setIsSpeaking(false);
          setSpeechError('');
          setIsFlipped(false);
          setCurrentIndex(0);
        }}
        className="mb-4 inline-flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-300"
      >
        <RotateCcw size={16} />
        回到第一張
      </button>
    </motion.div>
  );
}
