import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { speakText } from '../utils/tts';

// A single Word Card Component with 3D Flip effect and TTS
const WordCard = ({ wordObj, root }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isFlipped) {
      speakText(wordObj.word);
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center relative min-w-[160px] max-w-[240px] perspective-[1000px] h-[140px] mt-2 mb-2">
      {/* Vertical line connecting to the bus (purely visual) */}
      <div className="absolute -top-[28px] w-[2px] h-[28px] bg-gray-600"></div>

      <motion.div
        onClick={handleClick}
        className="w-full h-full relative cursor-pointer group"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT SIDE (English) */}
        <div 
          className="absolute inset-0 w-full h-full bg-gray-900/80 border border-gray-600 group-hover:border-blue-400/50 rounded-xl p-4 shadow-lg flex flex-col items-center justify-center backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-xl font-bold text-gray-100 text-center mb-3 drop-shadow-sm">{wordObj.word}</span>
          
          {/* Breakdown mini visualization */}
          <div className="flex justify-center flex-wrap gap-1">
            {wordObj.breakdown.map((part, i) => {
              const isRoot = part === root;
              return (
                <span key={i} className={`text-xs px-2 py-1 rounded font-medium tracking-wide ${isRoot ? 'bg-blue-600 text-blue-100 shadow-inner' : 'bg-gray-700 text-gray-300'}`}>
                  {part}
                </span>
              )
            })}
          </div>
        </div>

        {/* BACK SIDE (Traditional Chinese) */}
        <div 
          className="absolute inset-0 w-full h-full bg-blue-900/90 border border-blue-400/50 rounded-xl p-4 shadow-lg flex flex-col items-center justify-center backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-xl font-bold text-white text-center mb-2">{wordObj.translation || "無翻譯"}</span>
          <span className="text-xs text-blue-200 text-center leading-relaxed">
            {wordObj.meaning}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const WordFamilyGraph = ({ familyData }) => {
  if (!familyData) return null;

  const { root, mean, family } = familyData;

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 shadow-lg backdrop-blur-sm mt-6 overflow-hidden">
      <h3 className="text-xl font-semibold text-gray-200 mb-6 tracking-wide">Word Family Tree</h3>
      
      {/* Root Node */}
      <div 
        onClick={() => speakText(root)}
        className="relative z-10 flex flex-col items-center justify-center px-8 py-4 bg-blue-600/30 border-2 border-blue-500 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.3)] mb-10 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
        title="Click to hear pronunciation"
      >
        <span className="text-sm text-blue-300 uppercase tracking-wider font-bold mb-1">Root</span>
        <span className="text-3xl font-extrabold text-blue-100 drop-shadow-md">{root}</span>
        <span className="text-sm text-blue-200 mt-2 text-center max-w-[200px]">{mean}</span>
      </div>

      {/* Connection Lines Container */}
      <div className="relative w-full flex justify-center mt-[-40px]">
        {/* Horizontal Line connecting branches */}
        {family.length > 1 && (
          <div className="absolute top-0 h-[2px] bg-gray-600 w-[85%] z-0"></div>
        )}
        
        {/* Branches */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mt-[20px] relative z-10 w-full px-4">
          {family.map((wordObj, index) => (
            <WordCard key={index} wordObj={wordObj} root={root} />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm max-w-md">
        Click on a card to flip it for the <span className="text-blue-400 font-semibold">Traditional Chinese</span> translation and pronunciation.
      </div>
    </div>
  );
};

export default WordFamilyGraph;
