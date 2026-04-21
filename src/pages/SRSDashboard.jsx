import React, { useState, useEffect } from 'react';
import { curriculum } from '../data/curriculum';
import { wordDictionary } from '../data/morphology-data';
import { SRSService } from '../utils/srsService';

const SRSDashboard = ({ onNavigate }) => {
  const [progress, setProgress] = useState({});
  const [stats, setStats] = useState({ newCards: 0, reviewCards: 0, totalLearned: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await SRSService.syncFromCloud();
      setProgress(data || {});
      
      // Calculate today's tasks
      let newCardsCount = 0;
      let reviewCardsCount = 0;
      let learnedCount = 0;
      
      const today = new Date();
      today.setHours(0,0,0,0);

      // Iterate through curriculum to find words
      curriculum.forEach(week => {
        week.roots.forEach(rootId => {
          // Find words for this root in dictionary
          Object.values(wordDictionary).forEach(wordObj => {
            if (wordObj.root === rootId) {
              const wordProg = data[wordObj.word];
              if (!wordProg) {
                newCardsCount++;
              } else {
                learnedCount++;
                const reviewDate = new Date(wordProg.nextReviewDate);
                reviewDate.setHours(0,0,0,0);
                if (reviewDate <= today) {
                  reviewCardsCount++;
                }
              }
            }
          });
        });
      });

      setStats({ newCards: newCardsCount, reviewCards: reviewCardsCount, totalLearned: learnedCount });
      setIsLoading(false);
    };
    
    loadData();
  }, []);

  if (isLoading) return <div className="p-10 text-center text-gray-300">Syncing with Cloud Database...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-4 pb-24">
      <div className="max-w-4xl w-full mx-auto space-y-8 mt-6">
        
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            SRS Mastery
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            2-Month Curriculum: From Beginner to Ph.D. Level
          </p>
        </div>

        {/* Task Board */}
        <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-400">{stats.newCards}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">New Words</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-400">{stats.reviewCards}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">To Review</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">{stats.totalLearned}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Total Learned</p>
            </div>
          </div>
          
          <button 
            onClick={() => onNavigate('srs-session')}
            disabled={stats.newCards === 0 && stats.reviewCards === 0}
            className={`py-4 px-10 rounded-full font-bold text-lg shadow-lg transition-transform ${
              stats.newCards === 0 && stats.reviewCards === 0 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 active:scale-95 text-white shadow-pink-500/30'
            }`}
          >
            Start Session
          </button>
        </div>

        {/* Curriculum Tree */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Syllabus Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {curriculum.map((week, idx) => {
              // Calculate progress for this week
              let total = 0;
              let learned = 0;
              week.roots.forEach(r => {
                Object.values(wordDictionary).forEach(w => {
                  if (w.root === r) {
                    total++;
                    if (progress[w.word]) learned++;
                  }
                });
              });
              
              const pct = total === 0 ? 0 : Math.round((learned / total) * 100);

              return (
                <div key={idx} className="bg-gray-800/50 border border-gray-700 p-5 rounded-xl hover:bg-gray-800 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-blue-300">{week.title}</h3>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {learned} / {total} Words
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{week.desc}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2 rounded-full" 
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SRSDashboard;
