import { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import Dashboard from './pages/Dashboard';
import TermsDrill from './pages/TermsDrill';
import PresentCoach from './pages/PresentCoach';
import QASimulator from './pages/QASimulator';
import TravelRoleplay from './pages/TravelRoleplay';
import Networking from './pages/Networking';
import StatsCard from './pages/StatsCard';
import MorphologyPage from './pages/MorphologyPage';
import MorphologyGame from './pages/MorphologyGame';
import SRSDashboard from './pages/SRSDashboard';
import SRSStudySession from './pages/SRSStudySession';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard': return <Dashboard onNavigate={setCurrentTab} />;
      case 'terms': return <TermsDrill />;
      case 'present': return <PresentCoach />;
      case 'qa': return <QASimulator />;
      case 'travel': return <TravelRoleplay />;
      case 'network': return <Networking />;
      case 'stats': return <StatsCard />;
      case 'morphology': return <MorphologyPage />;
      case 'morphology-game': return <MorphologyGame />;
      case 'srs-dashboard': return <SRSDashboard onNavigate={setCurrentTab} />;
      case 'srs-session': return <SRSStudySession onNavigate={setCurrentTab} />;
      default: return <Dashboard onNavigate={setCurrentTab} />;
    }
  };

  return (
    <div className={`app-wrapper ${isMobile ? 'mobile-mode' : 'desktop-mode'}`}>
      <div className="map-background"></div>
      <div className="map-overlay"></div>
      
      <main className="content-container pb-24">
        {renderContent()}
      </main>

      <BottomNav currentTab={currentTab} onChangeTab={setCurrentTab} />
    </div>
  );
}

export default App;
