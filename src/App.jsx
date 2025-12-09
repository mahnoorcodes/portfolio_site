import React, { useRef } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/navbar/Navbar.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { About } from './components/about/About.jsx';
import { Skills } from './components/skills/Skills.jsx';
import { Projects } from './components/projects/Projects.jsx';
import {Cv} from './components/cv/Cv.jsx';
import { Contact } from './components/contact/Contact.jsx';
import {Experience} from './components/experience/Experience.jsx';
import {Services} from './components/services/Services.jsx';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const cvRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  };

  return (
    <div className={styles.App}>
      <Navbar onScrollTo={scrollToSection} refs={{servicesRef, aboutRef, skillsRef , projectsRef, cvRef, contactRef, experienceRef}} />

      <Hero onScrollTo={scrollToSection} refs={{servicesRef, aboutRef, skillsRef , projectsRef, cvRef, contactRef, experienceRef}} />
      
      <section ref={servicesRef} id="services">
        <Services />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={experienceRef} id="experience">
        <Experience />
      </section>
      
      <section ref={skillsRef} id="skills">
        <Skills />
      </section>
      
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>

      <section ref={cvRef} id="cv">
        <Cv />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;

