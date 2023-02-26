/* eslint-disable */

import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Bottom from './components/Bottom';
import Home from './components/Home';

function App() {
  useEffect(() => {
  }, []);


  return (
    <div>
      <Navbar />
      <div className="spacer">
        &nbsp;
      </div>
      <Home />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
