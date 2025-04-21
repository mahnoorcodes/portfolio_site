import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/navbar/navbar.jsx'
import { Hero } from './components/hero/Hero.jsx'

function App() {
  return (
    <div className="styles.app">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
