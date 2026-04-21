import { Home, BookOpen, Mic, HelpCircle, Map, Users, BarChart2, Puzzle, Gamepad2, BrainCircuit } from 'lucide-react';
import './BottomNav.css';

const TABS = [
  { id: 'dashboard', icon: Home, label: 'Home' },
  { id: 'travel', icon: Map, label: 'Travel' },
  { id: 'terms', icon: BookOpen, label: 'Terms' },
  { id: 'present', icon: Mic, label: 'Speech' },
  { id: 'qa', icon: HelpCircle, label: 'Q&A' },
  { id: 'network', icon: Users, label: 'Network' },
  { id: 'morphology', icon: Puzzle, label: 'Words' },
  { id: 'morphology-game', icon: Gamepad2, label: 'Game' },
  { id: 'srs-dashboard', icon: BrainCircuit, label: 'SRS' }
];

export default function BottomNav({ currentTab, onChangeTab }) {
  return (
    <nav className="bottom-nav glass-panel">
      {TABS.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          className={`nav-btn ${currentTab === id ? 'active' : ''}`}
          onClick={() => onChangeTab(id)}
        >
          <Icon size={24} className="nav-icon" />
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
