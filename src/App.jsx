import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Landing from './sections/Landing';
import Home from './sections/Home';
import First30Minutes from './sections/First30Minutes';
import Documentation from './sections/Documentation';
import PressurePoints from './sections/PressurePoints';
import EmailTemplates from './sections/EmailTemplates';
import WhyDocumentation from './sections/WhyDocumentation';
import WhySilent from './sections/WhySilent';
import Engagement from './sections/Engagement';
import WCATToolkit from './sections/WCATToolkit';
import HowToUse from './sections/HowToUse';
import TellYourStory from './sections/TellYourStory.jsx';

const App = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'landing':
        return <Landing onStart={() => handleNavigate('home')} onNavigate={handleNavigate} />;
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'first30':
        return <First30Minutes />;
      case 'documentation':
        return <Documentation />;
      case 'pressure':
        return <PressurePoints />;
      case 'templates':
        return <EmailTemplates />;
      case 'documentationPower':
        return <WhyDocumentation />;
      case 'silence':
        return <WhySilent />;
      case 'engagement':
        return <Engagement />;
      case 'wcat':
        return <WCATToolkit />;
      case 'howtouse':
        return <HowToUse />;
      case 'tellYourStory':
        return <TellYourStory onNavigate={handleNavigate} />;
      default:
        return <Landing onStart={() => handleNavigate('home')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen((open) => !open)}
      />
      <main className="py-8 px-4 sm:px-6 lg:px-8">{renderContent()}</main>
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            This toolkit is not your doctor, lawyer, or crisis line. Use it alongside those resources. It's the framework
            underneath everything else.
          </p>
          <p className="text-gray-400 mt-2">Use what's useful. Ignore what isn't. Come back when the next letter drops.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
