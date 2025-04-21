import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/navbar/navbar.jsx'
import { Hero } from './components/hero/Hero.jsx'
import { About } from './components/about/About.jsx'

function App() {
  return (
    <div className="styles.App">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
