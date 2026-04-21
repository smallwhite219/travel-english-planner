import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { qaBank } from '../data/qa-bank';
import { speakText } from '../utils/tts';

export default function QASimulator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = qaBank.qa_scenarios;
  const currentQ = questions[currentIndex];

  const nextQuestion = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const getDifficultyColor = (diff) => {
    if (diff === 'common') return 'text-green-400 bg-green-400/10 border-green-400/20';
    if (diff === 'moderate') return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    return 'text-red-400 bg-red-400/10 border-red-400/20';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-8"
    >
      <header className="page-header">
        <h1 className="page-title text-orange-400">Q&A Simulator</h1>
        <p className="page-subtitle">Listen to questions and practice your answers</p>
      </header>
      
      <div className="mb-4 flex justify-between items-center text-sm">
        <span className="text-gray-400 uppercase tracking-wider text-xs font-bold">
          {currentIndex + 1} / {questions.length}
        </span>
        <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${getDifficultyColor(currentQ.difficulty)}`}>
          {currentQ.difficulty}
        </span>
      </div>

      <div className="glass-panel p-6 mb-6 border-t-4 border-orange-500">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs text-orange-300 font-mono uppercase bg-orange-500/10 px-2 py-1 rounded">
            Audience asks:
          </span>
          <button 
            onClick={() => speakText(currentQ.question)}
            className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <PlayCircle size={20} />
          </button>
        </div>
        <p className="text-lg font-medium text-white leading-relaxed mb-2">
          "{currentQ.question}"
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <button 
          onClick={() => setShowAnswer(!showAnswer)}
          className="glass-button text-sm px-6 text-gray-300"
        >
          {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
          {showAnswer ? 'Hide Model Answer' : 'Reveal Model Answer'}
        </button>
      </div>

      <AnimatePresence>
        {showAnswer && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="glass-panel p-6 border border-white/5 bg-black/40 mb-6">
              <h3 className="text-sm text-blue-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} /> 
                Recommended Response
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {currentQ.model_answer}
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3">Key Phrases to Hit:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentQ.key_phrases.map((phrase, idx) => (
                    <span key={idx} className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs">
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={nextQuestion} className="glass-button primary w-full justify-center py-4">
        Next Question
      </button>

    </motion.div>
  );
}
