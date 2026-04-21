import React from 'react';
import { speakText } from '../utils/tts';

const WordDeconstructionVisualizer = ({ parts }) => {
  if (!parts || parts.length === 0) return null;

  const getColorClass = (type) => {
    switch (type) {
      case 'prefix': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'root': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'suffix': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getLabel = (type) => {
    switch (type) {
      case 'prefix': return 'Prefix';
      case 'root': return 'Root';
      case 'suffix': return 'Suffix';
      default: return 'Unknown';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 shadow-lg backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-gray-200 mb-6 tracking-wide">Deconstruction</h3>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <div 
              onClick={() => speakText(part.text)}
              className={`group relative flex flex-col items-center justify-center min-w-[100px] p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${getColorClass(part.type)}`}
              title="Click to hear pronunciation"
            >
              <span className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{getLabel(part.type)}</span>
              <span className="text-2xl font-bold">{part.text}</span>
              
              {/* Tooltip for Meaning */}
              {part.mean && (
                <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap bg-gray-900 text-gray-200 text-sm px-3 py-1.5 rounded-lg shadow-xl border border-gray-700">
                  {part.mean}
                </div>
              )}
            </div>
            
            {/* Plus Sign between blocks */}
            {index < parts.length - 1 && (
              <div className="text-2xl font-bold text-gray-500">+</div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Full Word Pronunciation or Info could go here */}
      <div className="mt-8 text-center text-gray-400 text-sm max-w-md">
        Hover over each block to see its meaning, or <span className="text-blue-400 font-semibold">click to hear</span> its pronunciation.
      </div>
    </div>
  );
};

export default WordDeconstructionVisualizer;
