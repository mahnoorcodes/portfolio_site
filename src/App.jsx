import React, { useRef } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/navbar/navbar.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { About } from './components/about/About.jsx';
import { Skills } from './components/skills/Skills.jsx';
import { Projects } from './components/projects/Projects.jsx';
// import {CV} from './components/cv/CV.jsx';
// import { Contact } from './components/contact/Contact.jsx';
// import { Footer } from './components/footer/Footer.jsx';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const cvRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  };

  return (
    <div className={styles.App}>
      <Navbar onScrollTo={scrollToSection} refs={{ aboutRef, skillsRef , projectsRef, cvRef, contactRef}} />

      <Hero onScrollTo={scrollToSection} refs={{aboutRef, skillsRef , projectsRef, cvRef, contactRef}} />
      
      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={skillsRef} id="skills">
        <Skills />
      </section>

      <section ref={projectsRef} id="projects">
        <Projects />
      </section>

      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

