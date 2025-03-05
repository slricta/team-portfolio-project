import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/Navbar.js";
import { About } from "./components/pages/About.js";
import { Team } from "./components/pages/Team.js";
import { Projects } from './components/pages/Projects.js';
import { Contact } from './components/pages/Contact.js';
import { Home } from './components/pages/Home.js';
import LoadingScreen from './LoadingScreen.js';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
