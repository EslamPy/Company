import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="relative">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Stats />
        <Features />
        <Services />
        <About />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  )
}

export default App
