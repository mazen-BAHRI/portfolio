import './App.css'
import Navbar from'./components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Projects from './components/pages/Projects.jsx';
import Hero from './components/Hero.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
