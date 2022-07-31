import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Bottom from './components/Bottom';
import Home from './components/Home';
import React, {useEffect} from 'react';

function App() {
  useEffect(() => {
    console.log('test2');
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar />
      <div className='spacer'>
        &nbsp;
      </div>
      <Home />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact/>
      <Bottom />
    </div>
  );
}

export default App;
