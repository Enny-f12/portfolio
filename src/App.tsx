import React from 'react'
import Navbar from './components/section/Navbar'
import HeroSection from './components/section/Hero'
import AboutMeSection from './components/section/About'
import TechStackSection from './components/section/TechStack'
import Project from './components/section/Project'
import Experience from './components/section/Experience'
import Contact from './components/section/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutMeSection/>
      <TechStackSection/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App