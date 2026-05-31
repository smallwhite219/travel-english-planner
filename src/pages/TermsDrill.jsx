import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ChevronRight, ChevronLeft, BookOpen, Filter, Shuffle, RotateCcw, Layers, GraduationCap } from 'lucide-react';
import { technicalTerms } from '../data/technical-terms';
import { vocabularyTerms, vocabularySections } from '../data/vocabulary-terms';
import { speakText } from '../utils/tts';

// Merge both data sources into a unified format
const buildUnifiedTerms = () => {
  // Vocabulary terms from docx — already have section/slide info
  const vocabItems = vocabularyTerms.map((v, i) => ({
    id: `vocab-${i}`,
    term: v.term,
    translation: v.translation,
    practice_sentence: v.practice_phrase,
    section: v.section,
    slide: v.slide,
    slideTitle: v.slideTitle,
    source: 'vocabulary',
  }));

  // Technical terms — existing data
  const techItems = technicalTerms.map((t, i) => ({
    id: `tech-${i}`,
    term: t.term,
    translation: t.translation,
    pronunciation: t.pronunciation,
    stress: t.stress,
    practice_sentence: t.practice_sentence,
    section: 'Technical Terms',
    slide: null,
    slideTitle: null,
    source: 'technical',
  }));

  return [...vocabItems, ...techItems];
};

const ALL_TERMS = buildUnifiedTerms();

// Build section options
const ALL_SECTIONS = [
  { name: 'All', count: ALL_TERMS.length },
  ...vocabularySections.map(s => ({ name: s.name, count: s.termCount })),
  { name: 'Technical Terms', count: technicalTerms.length },
];

// Section colors for visual distinction
const SECTION_COLORS = {
  'Introduction': { bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.4)', text: '#a5b4fc', dot: '#818cf8' },
  'Background': { bg: 'rgba(139, 92, 246, 0.15)', border: 'rgba(139, 92, 246, 0.4)', text: '#c4b5fd', dot: '#a78bfa' },
  'System Design': { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.4)', text: '#93c5fd', dot: '#60a5fa' },
  'Research Questions': { bg: 'rgba(14, 165, 233, 0.15)', border: 'rgba(14, 165, 233, 0.4)', text: '#7dd3fc', dot: '#38bdf8' },
  'Method': { bg: 'rgba(20, 184, 166, 0.15)', border: 'rgba(20, 184, 166, 0.4)', text: '#5eead4', dot: '#2dd4bf' },
  'Results': { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.4)', text: '#6ee7b7', dot: '#34d399' },
  'Discussion': { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.4)', text: '#fcd34d', dot: '#fbbf24' },
  'Conclusion': { bg: 'rgba(239, 68, 68, 0.15)', border: 'rgba(239, 68, 68, 0.4)', text: '#fca5a5', dot: '#f87171' },
  'Technical Terms': { bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.4)', text: '#d8b4fe', dot: '#c084fc' },
};

const DEFAULT_COLOR = { bg: 'rgba(100, 116, 139, 0.15)', border: 'rgba(100, 116, 139, 0.4)', text: '#94a3b8', dot: '#64748b' };

export default function TermsDrill() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [activeSection, setActiveSection] = useState('All');
  const [isShuffled, setIsShuffled] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // Filter + optional shuffle
  const filteredTerms = useMemo(() => {
    let terms = activeSection === 'All'
      ? ALL_TERMS
      : ALL_TERMS.filter(t => t.section === activeSection);
    
    if (isShuffled) {
      terms = [...terms].sort(() => Math.random() - 0.5);
    }
    return terms;
  }, [activeSection, isShuffled]);

  const currentTerm = filteredTerms[currentIndex] || filteredTerms[0];
  const sectionColor = SECTION_COLORS[currentTerm?.section] || DEFAULT_COLOR;

  const handleNext = useCallback(() => {
    setDirection(1);
    setShowDetails(false);
    setCurrentIndex(prev => (prev + 1) % filteredTerms.length);
  }, [filteredTerms.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setShowDetails(false);
    setCurrentIndex(prev => (prev - 1 + filteredTerms.length) % filteredTerms.length);
  }, [filteredTerms.length]);

  const handleTTS = useCallback((text) => {
    speakText(text, 0.85);
  }, []);

  const handleSectionChange = useCallback((section) => {
    setActiveSection(section);
    setCurrentIndex(0);
    setShowDetails(false);
    setShowFilter(false);
  }, []);

  const handleShuffle = useCallback(() => {
    setIsShuffled(prev => !prev);
    setCurrentIndex(0);
    setShowDetails(false);
  }, []);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setShowDetails(false);
    setIsShuffled(false);
  }, []);

  if (!currentTerm) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col min-h-0"
    >
      {/* Header */}
      <header className="page-header mb-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="page-title leading-tight flex items-center gap-2">
              <GraduationCap size={28} className="text-blue-400" />
              Vocabulary Drill
            </h1>
            <p className="page-subtitle">Master your presentation vocabulary</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleShuffle}
              className={`p-2.5 rounded-xl border transition-all ${
                isShuffled 
                  ? 'bg-purple-900/50 border-purple-500/50 text-purple-300' 
                  : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-white'
              }`}
              title={isShuffled ? 'Shuffled' : 'Shuffle'}
            >
              <Shuffle size={18} />
            </button>
            <button
              onClick={() => setShowFilter(prev => !prev)}
              className={`p-2.5 rounded-xl border transition-all ${
                showFilter
                  ? 'bg-blue-900/50 border-blue-500/50 text-blue-300'
                  : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-white'
              }`}
              title="Filter by section"
            >
              <Filter size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Section Filter Panel */}
      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mb-4"
          >
            <div className="glass-panel p-4">
              <div className="flex items-center gap-2 mb-3">
                <Layers size={16} className="text-blue-400" />
                <span className="text-sm font-medium text-gray-300">Filter by Section</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_SECTIONS.map(sec => {
                  const color = SECTION_COLORS[sec.name] || DEFAULT_COLOR;
                  const isActive = activeSection === sec.name;
                  return (
                    <button
                      key={sec.name}
                      onClick={() => handleSectionChange(sec.name)}
                      className="px-3 py-1.5 rounded-full text-sm font-medium transition-all border"
                      style={{
                        backgroundColor: isActive ? color.bg : 'transparent',
                        borderColor: isActive ? color.border : 'rgba(75, 85, 99, 0.5)',
                        color: isActive ? color.text : '#9ca3af',
                      }}
                    >
                      {sec.name === 'All' ? '📚 All' : sec.name}
                      <span className="ml-1.5 text-xs opacity-70">({sec.count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="mb-4 px-1">
        <div className="flex items-center justify-between mb-1.5">
          <span 
            className="text-xs font-medium px-2.5 py-0.5 rounded-full border"
            style={{
              backgroundColor: sectionColor.bg,
              borderColor: sectionColor.border,
              color: sectionColor.text,
            }}
          >
            {currentTerm.section}
            {currentTerm.slideTitle && ` · ${currentTerm.slideTitle}`}
          </span>
          <span className="text-xs text-gray-500 font-mono">
            {currentIndex + 1} / {filteredTerms.length}
          </span>
        </div>
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full rounded-full"
            style={{ backgroundColor: sectionColor.dot }}
            animate={{ width: `${((currentIndex + 1) / filteredTerms.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Card Area */}
      <div className="flex flex-col items-center py-2">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div 
            key={currentTerm.id + currentIndex}
            custom={direction}
            initial={{ x: direction * 80, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction * -80, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full relative cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            <div 
              className="glass-panel p-6 w-full min-h-[260px] flex flex-col justify-center items-center text-center transition-all duration-300"
              style={{
                borderColor: showDetails ? sectionColor.border : undefined,
                boxShadow: showDetails ? `0 0 30px ${sectionColor.bg}` : undefined,
              }}
            >
              {/* Term */}
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-wide">
                {currentTerm.term}
              </h2>

              {!showDetails ? (
                <p className="text-gray-500 mt-6 animate-pulse text-sm">Tap to reveal details</p>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex flex-col items-center gap-3"
                >
                  {/* Pronunciation (for technical terms) */}
                  {currentTerm.pronunciation && (
                    <div className="bg-gray-800 rounded-lg px-5 py-1.5 border border-gray-600">
                      <span className="text-lg font-mono text-blue-300 tracking-wider">
                        {currentTerm.pronunciation}
                      </span>
                    </div>
                  )}

                  {/* Chinese translation */}
                  <div 
                    className="font-medium text-xl px-4 text-center"
                    style={{ color: sectionColor.text }}
                  >
                    {currentTerm.translation}
                  </div>

                  {/* Practice sentence */}
                  {currentTerm.practice_sentence && (
                    <div 
                      className="text-left w-full mt-2 p-4 rounded-xl border-l-4"
                      style={{
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                        borderLeftColor: sectionColor.dot,
                      }}
                    >
                      <p className="text-sm text-gray-400 mb-1 flex items-center gap-1">
                        <BookOpen size={14}/> Practice Phrase
                      </p>
                      <p className="text-md text-gray-200 leading-relaxed italic">
                        "{currentTerm.practice_sentence}"
                      </p>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleTTS(currentTerm.practice_sentence); }}
                        className="mt-3 flex items-center gap-1 text-sm px-3 py-1.5 rounded-full w-fit transition-all hover:scale-105"
                        style={{
                          backgroundColor: sectionColor.bg,
                          color: sectionColor.text,
                          border: `1px solid ${sectionColor.border}`,
                        }}
                      >
                        <PlayCircle size={16} /> Play Phrase
                      </button>
                    </div>
                  )}

                  {/* Slide reference tag */}
                  {currentTerm.slide && (
                    <span className="text-xs text-gray-600 mt-1">
                      Slide {currentTerm.slide}
                    </span>
                  )}
                </motion.div>
              )}
            </div>

            {/* Floating TTS button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleTTS(currentTerm.term);
              }}
              className="absolute -top-3 -right-2 rounded-full p-3.5 shadow-lg transition-transform hover:scale-110 border"
              style={{
                backgroundColor: sectionColor.dot,
                borderColor: sectionColor.text,
                boxShadow: `0 0 20px ${sectionColor.bg}`,
              }}
            >
              <PlayCircle size={24} className="text-white" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 w-full flex gap-3 pb-6">
        <button 
          onClick={handlePrev}
          className="glass-button flex-1 justify-center text-base py-3.5"
        >
          <ChevronLeft size={18} /> Prev
        </button>
        <button 
          onClick={handleReset}
          className="glass-button justify-center px-4 py-3.5"
          title="Reset to first"
        >
          <RotateCcw size={18} />
        </button>
        <button 
          onClick={handleNext}
          className="glass-button primary flex-[2] justify-center text-base py-3.5"
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}
