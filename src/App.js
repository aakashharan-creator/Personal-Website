import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects';
import Bottom from './components/Bottom';
import Home from './components/Home';

function App() {
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
