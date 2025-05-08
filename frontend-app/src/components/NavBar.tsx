import { useState } from 'react';
import {
  Heart,
  Activity,
  Calendar,
  User,
  CreditCard,
  Menu,
  X,
  PhoneCall,
  Home,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function NavBar({ setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePageState] = useState('home');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavClick = (page, route) => {
    setActivePageState(page);
    setActivePage(page); // Update active page state in App.js
    setIsMenuOpen(false);
    navigate(route); // Navigate to the corresponding route
  };

  return (
    <nav className="bg-teal-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => handleNavClick('home', '/payments')}
            >
              <Heart className="h-8 w-8 text-white" fill="white" strokeWidth={1.5} />
              <span className="ml-2 text-white font-bold text-xl">GitCare Plus</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:ml-8 md:flex md:space-x-4">
              <button
                onClick={() => handleNavClick('home', '/home')}
                className={`flex items-center px-3 py-2 text-white hover:bg-teal-700 rounded-md transition duration-150 ${activePage === 'home' ? 'bg-teal-700' : ''}`}
              >
                <Home className="h-5 w-5 mr-1" />
                <span>Home</span>
              </button>
              <button
                onClick={() => handleNavClick('services', '/services')}
                className={`flex items-center px-3 py-2 text-white hover:bg-teal-700 rounded-md transition duration-150 ${activePage === 'services' ? 'bg-teal-700' : ''}`}
              >
                <Activity className="h-5 w-5 mr-1" />
                <span>Services</span>
              </button>
              <button
                onClick={() => handleNavClick('appointments', '/appointments')}
                className={`flex items-center px-3 py-2 text-white hover:bg-teal-700 rounded-md transition duration-150 ${activePage === 'appointments' ? 'bg-teal-700' : ''}`}
              >
                <Calendar className="h-5 w-5 mr-1" />
                <span>Appointments</span>
              </button>
              <button
                onClick={() => handleNavClick('payments', '/payments')}
                className={`flex items-center px-3 py-2 text-white rounded-md transition duration-150 ${activePage === 'payments' ? 'bg-teal-700' : 'hover:bg-teal-700'}`}
              >
                <CreditCard className="h-5 w-5 mr-1" />
                <span>Payments</span>
              </button>
            </div>
          </div>

          {/* Right side items (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center px-3 py-2 text-white">
              <PhoneCall className="h-5 w-5 mr-1" />
              <span className="font-medium">24/7 Helpline: 1-800-CARE</span>
            </div>
            <button
              onClick={() => handleNavClick('account', '/account')}
              className={`flex items-center px-3 py-2 text-white hover:bg-teal-700 rounded-md transition duration-150 ${activePage === 'account' ? 'bg-teal-700' : ''}`}
            >
              <User className="h-5 w-5 mr-1" />
              <span>My Account</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-700"
              aria-expanded="false"
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-teal-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => handleNavClick('home', '/home')}
            className={`flex w-full items-center px-3 py-2 text-white hover:bg-teal-800 rounded-md transition duration-150 ${activePage === 'home' ? 'bg-teal-800' : ''}`}
          >
            <Home className="h-5 w-5 mr-2" />
            <span>Home</span>
          </button>
          <button
            onClick={() => handleNavClick('services', '/services')}
            className={`flex w-full items-center px-3 py-2 text-white hover:bg-teal-800 rounded-md transition duration-150 ${activePage === 'services' ? 'bg-teal-800' : ''}`}
          >
            <Activity className="h-5 w-5 mr-2" />
            <span>Services</span>
          </button>
          <button
            onClick={() => handleNavClick('appointments', '/appointments')}
            className={`flex w-full items-center px-3 py-2 text-white hover:bg-teal-800 rounded-md transition duration-150 ${activePage === 'appointments' ? 'bg-teal-800' : ''}`}
          >
            <Calendar className="h-5 w-5 mr-2" />
            <span>Appointments</span>
          </button>
          <button
            onClick={() => handleNavClick('payments', '/payments')}
            className={`flex w-full items-center px-3 py-2 text-white rounded-md transition duration-150 ${activePage === 'payments' ? 'bg-teal-800' : 'hover:bg-teal-800'}`}
          >
            <CreditCard className="h-5 w-5 mr-2" />
            <span>Payments</span>
          </button>
          <button
            onClick={() => handleNavClick('account', '/account')}
            className={`flex w-full items-center px-3 py-2 text-white hover:bg-teal-800 rounded-md transition duration-150 ${activePage === 'account' ? 'bg-teal-800' : ''}`}
          >
            <User className="h-5 w-5 mr-2" />
            <span>My Account</span>
          </button>
          <div className="flex items-center px-3 py-2 text-white">
            <PhoneCall className="h-5 w-5 mr-2" />
            <span className="font-medium">24/7 Helpline: 1-800-CARE</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
