import { motion } from 'framer-motion';
import { Target, TrendingUp, Calendar, MapPin, PlayCircle } from 'lucide-react';
import { itinerary } from '../data/itinerary';

export default function Dashboard({ onNavigate }) {
  // Mock progress data
  const progress = {
    travel: 45,
    terms: 80,
    present: 20,
    qa: 10,
    network: 0
  };
  const nextTripItems = itinerary.slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="dashboard-container"
    >
      <header className="page-header">
        <h1 className="page-title">Welcome, Zong-En</h1>
        <p className="page-subtitle">2026 Kumamoto Trip: flight, hotel, conference, and return practice</p>
      </header>

      <section className="glass-panel p-5 mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Target className="text-blue-400" />
          Today's Recommendation
        </h2>
        <div className="recommendation-box rounded-xl p-4 border mb-4">
          <h3 className="font-semibold text-white mb-2">Arrival Day: airport pickup and hotel check-in</h3>
          <p className="text-sm text-gray-300 mb-3">Practice the real 2026/6/24 flow: JX846 arrival, pickup driver, Candeo check-in, and delay handling.</p>
          <button 
            onClick={() => onNavigate('travel')}
            className="glass-button primary w-full justify-center"
          >
            <PlayCircle size={18} />
            Start Travel Practice
          </button>
        </div>
      </section>

      <section className="glass-panel p-5 mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="text-sky-300" />
          Trip Timeline
        </h2>
        <div className="space-y-3">
          {nextTripItems.map(item => (
            <div key={item.id} className="timeline-row">
              <div className="timeline-date">
                <span>{item.date.slice(5).replace('-', '/')}</span>
                <small>{item.time}</small>
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                  <MapPin size={12} />
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="text-purple-400" />
          Skill Readiness
        </h2>
        <div className="grid gap-4">
          <ProgressCard title="Travel English" progress={progress.travel} color="bg-green-500" onClick={() => onNavigate('travel')} />
          <ProgressCard title="Technical Terms" progress={progress.terms} color="bg-blue-500" onClick={() => onNavigate('terms')} />
          <ProgressCard title="Presentation" progress={progress.present} color="bg-purple-500" onClick={() => onNavigate('present')} />
          <ProgressCard title="Q&A Simulator" progress={progress.qa} color="bg-orange-500" onClick={() => onNavigate('qa')} />
        </div>
      </section>

      <section className="glass-panel p-5 mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="text-pink-400" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => onNavigate('stats')} className="glass-button justify-center text-sm p-3">
            <BarChart2 size={16} /> Stats Card
          </button>
          <button onClick={() => onNavigate('network')} className="glass-button justify-center text-sm p-3">
            <Users size={16} /> Networking
          </button>
        </div>
      </section>
    </motion.div>
  );
}

function ProgressCard({ title, progress, color, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="glass-panel p-4 cursor-pointer hover:bg-gray-800 transition-colors border-l-4"
      style={{ borderLeftColor: 'var(--accent-blue)' }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{title}</span>
        <span className="text-sm text-gray-400">{progress}%</span>
      </div>
      <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color}`} 
          style={{ width: `${progress}%`, transition: 'width 1s ease-out' }}
        />
      </div>
    </div>
  );
}

import { BarChart2, Users } from 'lucide-react';
