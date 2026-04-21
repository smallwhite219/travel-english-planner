import { motion } from 'framer-motion';
import { BarChart, Percent, Activity } from 'lucide-react';
import { speakText } from '../utils/tts';

export default function StatsCard() {
  const stats = [
    { title: "Sample", value: "n=44 (exp=21, ctrl=23)", detail: "Grade 5, 5 lessons, 2 weeks" },
    { title: "Pre-test Eq.", value: "p = .376", detail: "no significant baseline difference" },
    { title: "ANCOVA", value: "F(1,41) = 4.71, p = .036", detail: "Exp: M=85.49 | Ctrl: M=76.56" },
    { title: "Effect Size", value: "η² = .114", detail: "Medium effect size (Cohen 1988)" },
    { title: "ENA (X-axis)", value: "High: M=0.07 | Low: M=-0.07", detail: "t(12.07) = 4.05, p < .001" },
    { title: "ENA Effect", value: "Cohen's d = 1.83", detail: "Large effect size" }
  ];

  const fullSentence = "Our sample consisted of 44 students. We found no significant pre-test differences, p equals point three seven six. After the intervention, our ANCOVA results showed a significant difference, F one forty-one equals 4.71, p equals point zero three six. The effect size eta-squared was point one one four. In the Epistemic Network Analysis, Cohen's d was 1.83, indicating a large effect.";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-8">
      <header className="page-header mb-8">
        <h1 className="page-title text-pink-400">Study Stats Card</h1>
        <p className="page-subtitle">Quick reference for your key numbers</p>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel p-4 flex flex-col justify-center">
            <h3 className="text-xs text-pink-300 font-mono uppercase mb-1">{stat.title}</h3>
            <p className="text-lg font-bold text-white mb-1">{stat.value}</p>
            <p className="text-xs text-gray-400 leading-tight">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="glass-panel p-6 bg-pink-500/5 border border-pink-500/20 text-center">
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          Need to hear how all these numbers sound in a continuous presentation flow?
        </p>
        <button 
          onClick={() => speakText(fullSentence, 0.9)}
          className="glass-button primary w-full justify-center"
        >
          <Activity size={18} /> Rehearse Flow
        </button>
      </div>
    </motion.div>
  );
}
