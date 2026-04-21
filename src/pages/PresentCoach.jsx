import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, PlayCircle, StopCircle, Mic, AlertTriangle } from 'lucide-react';
import { speakText } from '../utils/tts';

export default function PresentCoach() {
  const [isRecording, setIsRecording] = useState(false);

  const sections = [
    { title: '1. Opening', duration: '2 min', hint: 'Introduce yourself and the paper' },
    { title: '2. Introduction', duration: '4 min', hint: 'Research background, paradox of GenAI and SRL' },
    { title: '3. Method', duration: '4 min', hint: 'Participants, design, coding framework' },
    { title: '4. Results', duration: '4 min', hint: 'ANCOVA, ENA findings' },
    { title: '5. Discussion & Conclusion', duration: '4 min', hint: 'Key findings, implications, limitations' }
  ];

  const openingScript = "Good morning. My name is Zong-En Bai, and I'm a researcher from National Taichung University of Education in Taiwan. Today I'll present our study on how integrating an AI learning companion — called TALPer — into a structured self-regulated learning framework affects elementary students' mathematics learning.";

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pb-8">
      <header className="page-header mb-6">
        <h1 className="page-title text-purple-400">Presentation Coach</h1>
        <p className="page-subtitle">Rehearse your conference talk</p>
      </header>

      <div className="glass-panel p-5 mb-6 border-l-4 border-l-purple-500 bg-purple-500/5">
        <h3 className="text-sm font-semibold text-purple-300 mb-2">Model Opening Script</h3>
        <p className="text-sm text-gray-300 leading-relaxed italic">
          "{openingScript}"
        </p>
        <button 
          onClick={() => speakText(openingScript, 0.9)}
          className="mt-3 flex items-center gap-2 text-xs font-semibold text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full"
        >
          <PlayCircle size={14} /> Listen to Flow
        </button>
      </div>

      <div className="glass-panel p-5 mb-6 text-center">
        <h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-4">Self-Recording Practice</h3>
        <button 
          onClick={() => setIsRecording(!isRecording)}
          className={`mx-auto flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 transition-all duration-300 ${isRecording ? 'border-red-500 bg-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.4)]' : 'border-gray-500 bg-white/5 hover:bg-white/10'}`}
        >
          {isRecording ? <StopCircle size={32} className="text-red-500 mb-1" /> : <Mic size={32} className="text-gray-400 mb-1" />}
          <span className={`text-xs font-bold ${isRecording ? 'text-red-400' : 'text-gray-400'}`}>
            {isRecording ? '01:24' : 'START'}
          </span>
        </button>
        <p className="text-xs text-gray-500 mt-4"><AlertTriangle size={12} className="inline mr-1"/> Mock timer only in this prototype</p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Clock className="text-gray-400" /> Structure (15-20 min)
        </h3>
        <div className="space-y-3">
          {sections.map((sec, i) => (
            <div key={i} className="glass-panel p-4 flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium text-sm">{sec.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{sec.hint}</p>
              </div>
              <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/20 px-2 py-1 rounded">
                ~{sec.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
