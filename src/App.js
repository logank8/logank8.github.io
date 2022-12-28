import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/resume' element={<Resume />} ></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
