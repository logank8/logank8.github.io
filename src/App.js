import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Education from './pages/education';

// to do:
// fix hamburger menu
function App() {
  
  return ( 
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/education/' element={<Education />} ></Route> 
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
