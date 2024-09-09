import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Blog from './pages/blog';

// to do:
// fix hamburger menu
// add content to screens
function App() {
  const [message, setMessage] = useState('');
  useEffect(() => { // eventually will have to change this to permanent server host endpoint
    fetch('http://localhost:3306/')
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setMessage(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // this is where we'll get the res.send output sent from server.js

  return ( 
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home message={message} />}></Route>
        <Route path='/education' element={<Blog />} ></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;

// pass data values to Home, Blog, etc.
// 
