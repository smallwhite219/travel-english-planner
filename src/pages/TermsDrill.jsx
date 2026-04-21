import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ChevronRight, BookOpen } from 'lucide-react';
import { technicalTerms } from '../data/technical-terms';
import { speakText } from '../utils/tts';

export default function TermsDrill() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const currentTerm = technicalTerms[currentIndex];

  const handleNext = () => {
    setShowDetails(false);
    setCurrentIndex((prev) => (prev + 1) % technicalTerms.length);
  };

  const handleTTS = (text) => {
    speakText(text, 0.85); // slower rate for clarity
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-full"
    >
      <header className="page-header mb-6">
        <h1 className="page-title leading-tight">Terms Drill</h1>
        <p className="page-subtitle">Master your academic vocabulary pronunciation</p>
      </header>
      
      <div className="flex-1 flex flex-col justify-center items-center py-4">
        <span className="text-sm text-gray-500 mb-4 tracking-widest uppercase">
          Term {currentIndex + 1} of {technicalTerms.length}
        </span>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full relative preserve-3d cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            {/* The Glass Card */}
            <div className={`glass-panel p-8 w-full min-h-[300px] flex flex-col justify-center items-center text-center transition-all duration-300 ${showDetails ? 'ring-2 ring-blue-500/50' : ''}`}>
              <h2 className="text-4xl font-bold mb-4 text-white tracking-wide">
                {currentTerm.term}
              </h2>
              
              {!showDetails ? (
                <p className="text-gray-400 mt-8 animate-pulse text-sm">Tap to reveal pronunciation</p>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full flex justify-center flex-col items-center gap-4"
                >
                  <div className="bg-white/10 rounded-lg px-6 py-2 border border-white/20">
                    <span className="text-xl font-mono text-blue-300 tracking-wider">
                      {currentTerm.pronunciation}
                    </span>
                  </div>
                  
                  {currentTerm.translation && (
                    <div className="text-gray-300 font-medium text-lg px-4 text-center mt-2">
                      {currentTerm.translation}
                    </div>
                  )}
                  
                  {currentTerm.practice_sentence && (
                    <div className="text-left w-full mt-4 bg-black/30 p-4 rounded-xl border-l-4 border-l-purple-500">
                      <p className="text-sm text-gray-400 mb-1 flex items-center gap-1"><BookOpen size={14}/> Practice Sentence</p>
                      <p className="text-md text-gray-200 leading-relaxed">
                        "{currentTerm.practice_sentence}"
                      </p>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleTTS(currentTerm.practice_sentence); }}
                        className="mt-3 text-purple-400 flex items-center gap-1 text-sm hover:text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-full w-fit"
                      >
                        <PlayCircle size={16} /> Play Sentence
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
            
            {/* Floating TTS button for the main term */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleTTS(currentTerm.term);
              }}
              className="absolute -top-4 -right-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-4 shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-transform hover:scale-110 border border-blue-400"
            >
              <PlayCircle size={28} />
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 w-full flex justify-end">
          <button 
            onClick={handleNext}
            className="glass-button primary w-full justify-center text-lg py-4"
          >
            Next Term <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
