import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Image imports
import logo from './assets/logo.png';

// Page imports
import ServicesPage from './pages/services';
import AboutPage from './pages/about';
import Home from './pages/home';
import ClassesPage from './pages/classes';
import ContactPage from './pages/contact';
import BookingPage from './pages/BookingsPage';
import Login from './components/login';
import Avatar from './components/Avatar';
import Dashboard from './components/Dashboard';
import SignUp from './components/signup';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const login = () => {
    setIsLoggedIn(true); // Update state when user logs in
  };

  const logout = () => {
    setIsLoggedIn(false); // Update state when user logs out
    setDropdownOpen(false); // Close the dropdown on logout
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Router>
      <div>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl transition-all duration-300" aria-label="Global">
          <div className="lg:flex hidden mx-auto max-w-7xl items-center py-2 rounded-md justify-between px-6 mt-0 px-0">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-16 w-auto" src={logo} alt="Your Company" />
              </Link>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Home</Link>
              <Link to="/about" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">About Us</Link>
              <Link to="/services" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Our Services</Link>
              <Link to="/classes" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Our Classes</Link>
              <Link to="/bookings" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Bookings</Link>
              <Link to="/contact" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Contact Us</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <div className="relative">
                <div onClick={toggleDropdown} className="cursor-pointer">
                  <Avatar />
                </div>
                {dropdownOpen && (
                  <div className="absolute right-2 mt-2 w-48 bg-gray-700 border-solid shadow-lg rounded-lg p-2">
                    {isLoggedIn ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-white hover:"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 text-sm text-white hover:"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-white hover:"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Sign In
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bookings" element={<BookingPage />} />
          <Route path="/login" element={<Login login={login} />} /> {/* Pass login function as prop */}
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login login={login} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
