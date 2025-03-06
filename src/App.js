import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { Navbar } from "./components/Navbar.js";
import { About } from "./components/pages/About.js";
import { Team } from "./components/pages/Team.js";
import { Projects } from './components/pages/Projects.js';
import { Contact } from './components/pages/Contact.js';
import { Home } from './components/pages/Home.js';
import LoadingScreen from './LoadingScreen.js';
import { Footer } from "./components/Footer.js";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className='App'>
      <Navbar />
      <AnimatePresence mode="wait">  {/* Enables smooth page transitions */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
