import React from 'react';
import styles from './App.module.css'
import { Navbar } from './components/navbar/navbar.jsx'
import { Hero } from './components/hero/Hero.jsx'
import { About } from './components/about/About.jsx'
import { Skills } from './components/skills/Skills.jsx' 

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
