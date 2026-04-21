import { motion } from 'framer-motion';
import { PlayCircle, MessageCircle, Users, Coffee } from 'lucide-react';
import { speakText } from '../utils/tts';

export default function Networking() {
  const sections = [
    {
      title: "After-presentation small talk",
      icon: MessageCircle,
      items: [
        "Great presentation! I work on similar stuff with [X]. Have you looked at [Y]?",
        "Your ENA visualization was really interesting. We've been using a different approach...",
        "I'm also from Taiwan! Where exactly are you based?"
      ]
    },
    {
      title: "Initiating conversation",
      icon: Users,
      items: [
        "Excuse me, I really enjoyed your presentation on [X]...",
        "I work on AI in education too — from a different angle though...",
        "Would you be open to staying in touch? Here's my card."
      ]
    },
    {
      title: "Handling difficult moments",
      icon: Coffee,
      items: [
        "I'm sorry, could you say that again? The room is a bit noisy.",
        "That's outside my main area, but I'd be interested to read more about it.",
        "It was great talking to you. I don't want to miss the next session — enjoy the conference!"
      ]
    }
  ];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="pb-8">
      <header className="page-header mb-8">
        <h1 className="page-title text-indigo-400">Networking</h1>
        <p className="page-subtitle">Master academic social English</p>
      </header>
      
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={idx} className="glass-panel p-5">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <section.icon className="text-indigo-400" size={20} />
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.items.map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-300">
                  <button 
                    onClick={() => speakText(text.replace(/\[X\]|\[Y\]/g, 'that topic'))}
                    className="text-indigo-400 hover:text-indigo-300 shrink-0 mt-0.5"
                  >
                    <PlayCircle size={18} />
                  </button>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
