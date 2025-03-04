
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/Navbar.js";
import { About } from "./components/pages/About.js";
import { Team } from "./components/pages/Team.js";
import { Projects } from './components/pages/Projects.js';
import { Contact } from './components/pages/Contact.js';
import { Home } from './components/pages/Home.js';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
