import React from 'react'
import Navbar from './components/section/Navbar'
import HeroSection from './components/section/Hero'
import AboutMeSection from './components/section/About'
import TechStackSection from './components/section/TechStack'
import Project from './components/section/Project'
const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutMeSection/>
      <TechStackSection/>
      <Project/>
    </div>
  )
}

export default App