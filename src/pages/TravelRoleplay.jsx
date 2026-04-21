import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Map, User, ChevronRight } from 'lucide-react';
import { travelScenarios } from '../data/travel-scenarios';
import { speakText } from '../utils/tts';

export default function TravelRoleplay() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(null);

  if (!selectedScenarioId) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-8">
        <header className="page-header">
          <h1 className="page-title text-green-400">Travel Scenarios</h1>
          <p className="page-subtitle">Navigate Japan with confidence</p>
        </header>

        <div className="grid gap-4 mt-6">
          {travelScenarios.map(scenario => (
             <button 
               key={scenario.id} 
               onClick={() => setSelectedScenarioId(scenario.id)}
               className="glass-panel p-4 text-left hover:bg-white/5 transition-colors flex items-center justify-between"
             >
               <div>
                 <span className="text-xs text-green-400 font-mono mb-1 block">{scenario.id}</span>
                 <h3 className="text-white font-medium">{scenario.name}</h3>
                 <p className="text-gray-400 text-xs mt-1">{scenario.location}</p>
               </div>
               <ChevronRight className="text-gray-500" />
             </button>
          ))}
        </div>
      </motion.div>
    );
  }

  const scenario = travelScenarios.find(s => s.id === selectedScenarioId);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="pb-8">
      <button 
        onClick={() => setSelectedScenarioId(null)}
        className="text-gray-400 text-sm mb-6 flex items-center gap-1 hover:text-white"
      >
        <ChevronRight size={16} className="rotate-180" /> Back to Scenarios
      </button>

      <div className="mb-6">
        <span className="text-xs text-green-400 font-mono">{scenario.id}</span>
        <h2 className="text-2xl font-bold text-white mb-2">{scenario.name}</h2>
        <p className="text-sm text-gray-400 flex items-center gap-2"><Map size={14}/> {scenario.location}</p>
      </div>

      <div className="space-y-4">
        {/* Officer/Staff Section */}
        {scenario.key_questions_officer_asks && (
          <div className="glass-panel p-5 bg-white/5 border-l-4 border-l-gray-400">
            <h3 className="text-sm text-gray-400 font-medium mb-3 flex items-center gap-2">
              <User size={16} /> 
              {scenario.officer_role || scenario.staff_role || 'Staff'} might say:
            </h3>
            <ul className="space-y-3">
              {scenario.key_questions_officer_asks.map((q, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex gap-3 items-start">
                  <button onClick={() => speakText(q)} className="text-gray-400 hover:text-white shrink-0 mt-0.5">
                    <PlayCircle size={16} />
                  </button>
                  <span>"{q}"</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* You Section */}
        <div className="glass-panel p-5 bg-green-500/5 border-l-4 border-l-green-500">
          <h3 className="text-sm text-green-400 font-medium mb-3 flex items-center gap-2">
            <User size={16} /> 
            You can answer:
          </h3>
          <ul className="space-y-3">
            {(scenario.your_answers || scenario.key_phrases || []).map((ans, idx) => (
              <li key={idx} className="text-white text-sm flex gap-3 items-start">
                <button onClick={() => speakText(ans)} className="text-green-500 hover:text-green-300 shrink-0 mt-0.5">
                  <PlayCircle size={16} />
                </button>
                <span>"{ans}"</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
