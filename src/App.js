import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Contact from './pages/contact';

// to do:
// fix hamburger menu
// add content to screens
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/blog' element={<Blog />} ></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
