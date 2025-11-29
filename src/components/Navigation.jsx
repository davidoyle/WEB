import {
  BookOpen,
  Clock,
  FileText,
  FileText as FileTextIcon,
  Home,
  Mail,
  Menu,
  Shield,
  Target,
  X,
  XCircle,
} from 'lucide-react';

const Navigation = ({ activeSection, onNavigate, isMobileMenuOpen, toggleMobileMenu }) => (
  <nav className="bg-gray-900 text-white sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Shield className="w-8 h-8 text-red-500 mr-3" />
          <span className="font-bold text-xl">Worker's Toolkit</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => onNavigate('landing')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'landing' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Home className="w-4 h-4 inline mr-1" /> Home
          </button>
          <button
            onClick={() => onNavigate('home')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'home' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Start Here
          </button>
          <button
            onClick={() => onNavigate('first30')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'first30' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-1" /> First 30 Minutes
          </button>
          <button
            onClick={() => onNavigate('documentation')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'documentation' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <FileTextIcon className="w-4 h-4 inline mr-1" /> Docs
          </button>
          <button
            onClick={() => onNavigate('pressure')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'pressure' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Target className="w-4 h-4 inline mr-1" /> Pressure
          </button>
          <button
            onClick={() => onNavigate('templates')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'templates' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Mail className="w-4 h-4 inline mr-1" /> Emails
          </button>
          <button
            onClick={() => onNavigate('wcat')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'wcat' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-1" /> WCAT
          </button>
          <button
            onClick={() => onNavigate('documentationPower')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'documentationPower' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-1" /> Why Documentation
          </button>
          <button
            onClick={() => onNavigate('silence')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'silence' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <XCircle className="w-4 h-4 inline mr-1" /> Silence
          </button>
          <button
            onClick={() => onNavigate('engagement')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'engagement' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            What Happens When You Engage
          </button>
          <button
            onClick={() => onNavigate('howtouse')}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activeSection === 'howtouse' ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            How To Use This Toolkit
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
    {isMobileMenuOpen && (
      <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-800">
        <div className="space-y-1">
          {[
            ['landing', 'Home', Home],
            ['home', 'Start Here', Home],
            ['first30', 'First 30 Minutes', Clock],
            ['documentation', 'Evidence & Documentation', FileTextIcon],
            ['pressure', 'Tactical Strategy', Target],
            ['templates', 'Email Templates', Mail],
            ['wcat', 'WCAT Armory', BookOpen],
            ['silence', 'Why People Stay Silent', XCircle],
            ['documentationPower', 'Why Documentation Is Power', FileText],
            ['engagement', 'What Happens When You Engage', Shield],
            ['howtouse', 'How To Use This Toolkit', BookOpen],
          ].map(([section, label, Icon]) => (
            <button
              key={section}
              onClick={() => onNavigate(section)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeSection === section ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 inline mr-1" /> {label}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

export default Navigation;
