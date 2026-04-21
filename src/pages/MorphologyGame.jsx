import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wordDictionary, prefixes, suffixes, roots } from '../data/morphology-data';
import { speakText } from '../utils/tts';

// Helper to shuffle an array
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const MorphologyGame = () => {
  const [level, setLevel] = useState(1);
  const [targetWordObj, setTargetWordObj] = useState(null);
  const [pool, setPool] = useState([]);
  const [assembly, setAssembly] = useState([]); // Array of placed pieces
  const [message, setMessage] = useState('Drag the blocks to the correct slots!');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const slotRefs = useRef([]);

  // Generate a new level
  const generateLevel = () => {
    setIsSuccess(false);
    setMessage('Build the word based on the meaning!');
    
    // Pick a random word from the dictionary that has at least 2 parts
    const words = Object.values(wordDictionary).filter(w => w.breakdown.length >= 2);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    setTargetWordObj(randomWord);
    
    // Create initial assembly array filled with nulls
    setAssembly(new Array(randomWord.breakdown.length).fill(null));
    
    // Get the correct parts
    const correctParts = randomWord.breakdown.map((partStr, index) => {
      // Determine type for coloring
      let type = 'other';
      if (prefixes[partStr]) type = 'prefix';
      else if (suffixes[partStr]) type = 'suffix';
      else type = 'root';
      
      return { id: `correct-${index}`, text: partStr, type, isCorrect: true, targetIndex: index };
    });
    
    // Get some random distractors
    const allDistractors = [
      { text: 'pre', type: 'prefix' }, { text: 'un', type: 'prefix' }, { text: 're', type: 'prefix' },
      { text: 'dict', type: 'root' }, { text: 'vis', type: 'root' }, { text: 'cred', type: 'root' },
      { text: 'able', type: 'suffix' }, { text: 'tion', type: 'suffix' }, { text: 'ly', type: 'suffix' }
    ].filter(d => !randomWord.breakdown.includes(d.text));
    
    const distractors = shuffleArray(allDistractors).slice(0, 3).map((d, index) => ({
      id: `distractor-${index}`,
      text: d.text,
      type: d.type,
      isCorrect: false
    }));
    
    setPool(shuffleArray([...correctParts, ...distractors]));
  };

  useEffect(() => {
    generateLevel();
  }, [level]);

  // Handle Drag End
  const handleDragEnd = (event, info, piece) => {
    // Check intersection with all slots
    const pointer = { x: info.point.x, y: info.point.y };
    
    let matchedSlotIndex = -1;
    
    slotRefs.current.forEach((slot, index) => {
      if (!slot) return;
      const rect = slot.getBoundingClientRect();
      if (
        pointer.x >= rect.left && pointer.x <= rect.right &&
        pointer.y >= rect.top && pointer.y <= rect.bottom
      ) {
        matchedSlotIndex = index;
      }
    });

    if (matchedSlotIndex !== -1) {
      // Check if it's the correct piece for this slot
      if (piece.isCorrect && piece.targetIndex === matchedSlotIndex) {
        // Success! Move from pool to assembly
        setPool(prev => prev.filter(p => p.id !== piece.id));
        setAssembly(prev => {
          const newAssembly = [...prev];
          newAssembly[matchedSlotIndex] = piece;
          
          // Check if game won
          if (newAssembly.every(p => p !== null)) {
            setIsSuccess(true);
            setMessage(`Correct! ${targetWordObj.word.toUpperCase()} means: ${targetWordObj.meaning}`);
          } else {
            setMessage('Perfect fit! Keep going.');
          }
          
          return newAssembly;
        });
      } else {
        // Wrong slot or wrong piece -> Bounces back automatically due to dragSnapToOrigin={true}
        setMessage('Oops! That piece doesn\'t fit there. It bounced back!');
      }
    }
  };

  const getColorClass = (type) => {
    switch (type) {
      case 'prefix': return 'bg-red-500 text-red-100 border-red-700 shadow-red-500/50';
      case 'root': return 'bg-blue-500 text-blue-100 border-blue-700 shadow-blue-500/50';
      case 'suffix': return 'bg-emerald-500 text-emerald-100 border-emerald-700 shadow-emerald-500/50';
      default: return 'bg-gray-500 text-gray-100 border-gray-700 shadow-gray-500/50';
    }
  };

  if (!targetWordObj) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-4 pb-24 overflow-hidden">
      <div className="max-w-4xl w-full mx-auto space-y-8 mt-6">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            Morphology Builder Game
          </h1>
          <p className="text-gray-400">Level {level} - Construct the word</p>
        </div>

        {/* Target Meaning */}
        <div className="bg-gray-800/80 border border-gray-700 p-6 rounded-2xl shadow-xl text-center">
          <h2 className="text-xl text-gray-400 mb-2">Meaning:</h2>
          <p className="text-2xl font-bold text-white tracking-wide">"{targetWordObj.meaning}"</p>
          <p className={`mt-4 text-sm font-semibold transition-colors duration-300 ${isSuccess ? 'text-green-400' : 'text-amber-400'}`}>
            {message}
          </p>
        </div>

        {/* Assembly Area (Drop Zones) */}
        <div className="flex flex-wrap justify-center gap-4 py-8 bg-gray-800/40 rounded-3xl border-2 border-dashed border-gray-600 min-h-[150px] items-center">
          {assembly.map((placedPiece, index) => (
            <div 
              key={index}
              ref={el => slotRefs.current[index] = el}
              className={`relative flex items-center justify-center w-32 h-20 rounded-xl border-4 transition-all duration-300
                ${placedPiece ? 'border-transparent' : 'border-gray-700 bg-gray-900/50'}`}
            >
              {!placedPiece && (
                <span className="text-gray-600 font-bold opacity-50">Slot {index + 1}</span>
              )}
              
              <AnimatePresence>
                {placedPiece && (
                  <motion.div
                    layoutId={placedPiece.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`absolute inset-0 flex items-center justify-center rounded-lg border-b-4 text-xl font-bold uppercase tracking-wider shadow-lg ${getColorClass(placedPiece.type)}`}
                  >
                    {placedPiece.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Next Level Button */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <button 
                onClick={() => setLevel(l => l + 1)}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 transition-all transform hover:scale-105 active:scale-95"
              >
                Next Level
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pieces Pool (Draggable Items) */}
        <div className="mt-8">
          <h3 className="text-center text-gray-400 font-semibold mb-6 uppercase tracking-widest">Blocks Pool</h3>
          <div className="flex flex-wrap justify-center gap-6 min-h-[200px]">
            <AnimatePresence>
              {pool.map(piece => (
                <motion.div
                  key={piece.id}
                  layoutId={piece.id}
                  drag={!isSuccess} // Disable drag if game won
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => handleDragEnd(e, info, piece)}
                  onTap={() => speakText(piece.text)}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  whileDrag={{ scale: 1.2, zIndex: 50, rotate: [-2, 2, -2], transition: { repeat: Infinity, duration: 0.2 } }}
                  className={`flex items-center justify-center w-32 h-20 rounded-lg border-b-4 text-xl font-bold uppercase tracking-wider shadow-lg cursor-grab active:cursor-grabbing ${getColorClass(piece.type)}`}
                  title="Drag to place, click to hear"
                >
                  {piece.text}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MorphologyGame;
