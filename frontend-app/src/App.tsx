import './styles/tailwind.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CreditCardValidator } from '@/components/PaymentCard';
import { Home } from '@/components/Home';
import { NavBar } from './components/NavBar';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBar activePage={activePage} setActivePage={setActivePage} />

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white rounded-lg shadow p-6">
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/payments" element={<CreditCardValidator />} />
                <Route
                  path="/services"
                  element={
                    <div className="text-center p-8">
                      <h1 className="text-3xl font-bold text-teal-800 mb-4">Our Services</h1>
                      <p className="text-lg text-gray-700">Explore our healthcare services</p>
                    </div>
                  }
                />
                <Route
                  path="/appointments"
                  element={
                    <div className="text-center p-8">
                      <h1 className="text-3xl font-bold text-teal-800 mb-4">Book an Appointment</h1>
                      <p className="text-lg text-gray-700">Schedule your next visit</p>
                    </div>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <div className="text-center p-8">
                      <h1 className="text-3xl font-bold text-teal-800 mb-4">My Account</h1>
                      <p className="text-lg text-gray-700">
                        Manage your profile and healthcare information
                      </p>
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
        </main>

        <footer className="bg-teal-700 text-white p-4">
          <div className="max-w-7xl mx-auto text-center">
            <p>© 2025 GitCare Plus. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
