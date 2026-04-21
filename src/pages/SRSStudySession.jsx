import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { curriculum } from '../data/curriculum';
import { wordDictionary, roots } from '../data/morphology-data';
import { SRSService } from '../utils/srsService';
import { calculateNextReview, SRS_GRADES } from '../utils/srsEngine';
import { speakText } from '../utils/tts';
import WordFamilyGraph from '../components/WordFamilyGraph';

const SRSStudySession = ({ onNavigate }) => {
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const initQueue = () => {
      const progress = SRSService.getLocalProgress();
      const today = new Date();
      today.setHours(0,0,0,0);
      
      const newQueue = [];
      
      curriculum.forEach(week => {
        week.roots.forEach(rootId => {
          Object.values(wordDictionary).forEach(wordObj => {
            if (wordObj.root === rootId) {
              const prog = progress[wordObj.word];
              if (!prog) {
                newQueue.push({ wordObj, isNew: true, progress: null });
              } else {
                const reviewDate = new Date(prog.nextReviewDate);
                reviewDate.setHours(0,0,0,0);
                if (reviewDate <= today) {
                  newQueue.push({ wordObj, isNew: false, progress: prog });
                }
              }
            }
          });
        });
      });
      
      setQueue(newQueue.sort(() => Math.random() - 0.5));
    };

    initQueue();
  }, []);

  const handleFlip = () => {
    if (!isFlipped && queue[currentIndex]) {
      speakText(queue[currentIndex].wordObj.word);
    }
    setIsFlipped(true);
  };

  const handleRate = async (grade) => {
    const currentItem = queue[currentIndex];
    const newProgress = calculateNextReview(currentItem.progress, grade);
    
    await SRSService.updateWordProgress(currentItem.wordObj.word, newProgress);

    if (grade === SRS_GRADES.AGAIN) {
      setQueue(prev => [...prev, { ...currentItem, progress: newProgress, isNew: false }]);
    }

    nextCard();
  };

  const nextCard = () => {
    setIsFlipped(false);
    if (currentIndex + 1 >= queue.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-center">
        <h2 className="text-4xl font-bold text-emerald-400 mb-4">Session Complete!</h2>
        <p className="text-gray-400 mb-8">You've finished all reviews for today. Great job!</p>
        <button 
          onClick={() => onNavigate('srs-dashboard')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  if (queue.length === 0) {
    return <div className="p-8 text-center text-white">Loading session...</div>;
  }

  const currentItem = queue[currentIndex];
  const { wordObj } = currentItem;

  // Prepare family data for the current word's root
  const rootData = roots[wordObj.root];
  const familyData = rootData ? {
    root: wordObj.root,
    mean: rootData.mean,
    family: rootData.words
  } : null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 p-4 pt-12 items-center overflow-y-auto pb-64">
      
      {/* Top Bar Progress */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6 px-4">
        <button onClick={() => onNavigate('srs-dashboard')} className="text-gray-400 hover:text-white transition-colors">
          ← Quit
        </button>
        <span className="text-gray-500 font-mono text-sm bg-gray-800 px-3 py-1 rounded-full">
          {currentIndex + 1} / {queue.length}
        </span>
      </div>

      {!isFlipped ? (
        /* FRONT OF CARD (Question) */
        <div 
          onClick={handleFlip}
          className="w-full max-w-md h-[300px] bg-gray-800 border-2 border-gray-700 rounded-3xl shadow-2xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 transition-colors relative"
        >
          {currentItem.isNew && (
            <span className="absolute top-4 right-4 bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full font-bold">NEW</span>
          )}
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-md tracking-wide">{wordObj.word}</h2>
          <p className="text-gray-500 text-sm animate-pulse">Tap to reveal root family</p>
        </div>
      ) : (
        /* BACK OF CARD (Answer + Family Tree) */
        <div className="w-full max-w-4xl flex flex-col items-center animate-in fade-in zoom-in duration-300">
          
          {/* Answer Highlight */}
          <div className="bg-blue-900/50 border border-blue-500/50 rounded-2xl p-6 mb-8 w-full max-w-md text-center shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <h2 className="text-4xl font-bold text-white mb-2">{wordObj.word}</h2>
            <h3 className="text-2xl font-bold text-blue-300 mb-3">{wordObj.translation || "無翻譯"}</h3>
            <p className="text-blue-100/80 mb-4">{wordObj.meaning}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {wordObj.breakdown.map((part, i) => (
                <span key={i} className={`px-3 py-1 rounded-md text-sm font-mono border ${part === wordObj.root ? 'bg-blue-600 text-white border-blue-400 shadow-lg' : 'bg-gray-800 text-gray-300 border-gray-600'}`}>
                  {part}
                </span>
              ))}
            </div>
          </div>

          {/* Root Family Tree */}
          {familyData && (
            <div className="w-full transform scale-90 origin-top">
              <WordFamilyGraph familyData={familyData} />
            </div>
          )}

        </div>
      )}

      {/* SRS Buttons (Fixed at bottom, above BottomNav) */}
      <div className={`fixed bottom-16 md:bottom-20 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent flex justify-center z-40 transition-all duration-300 ${isFlipped ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="w-full max-w-2xl grid grid-cols-4 gap-2 md:gap-4 backdrop-blur-md bg-gray-800/80 p-3 rounded-2xl border border-gray-700 shadow-2xl">
          <button 
            onClick={() => handleRate(SRS_GRADES.AGAIN)}
            className="flex flex-col items-center bg-gray-900/50 hover:bg-red-900/40 border border-gray-600 hover:border-red-500 rounded-xl py-3 transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-red-400 font-bold mb-1">Again</span>
            <span className="text-gray-500 text-xs">1m</span>
          </button>
          <button 
            onClick={() => handleRate(SRS_GRADES.HARD)}
            className="flex flex-col items-center bg-gray-900/50 hover:bg-amber-900/40 border border-gray-600 hover:border-amber-500 rounded-xl py-3 transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-amber-400 font-bold mb-1">Hard</span>
            <span className="text-gray-500 text-xs">2d</span>
          </button>
          <button 
            onClick={() => handleRate(SRS_GRADES.GOOD)}
            className="flex flex-col items-center bg-gray-900/50 hover:bg-emerald-900/40 border border-gray-600 hover:border-emerald-500 rounded-xl py-3 transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-emerald-400 font-bold mb-1">Good</span>
            <span className="text-gray-500 text-xs">4d</span>
          </button>
          <button 
            onClick={() => handleRate(SRS_GRADES.EASY)}
            className="flex flex-col items-center bg-gray-900/50 hover:bg-blue-900/40 border border-gray-600 hover:border-blue-500 rounded-xl py-3 transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-blue-400 font-bold mb-1">Easy</span>
            <span className="text-gray-500 text-xs">7d</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default SRSStudySession;
