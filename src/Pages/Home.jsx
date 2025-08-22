import React from 'react'
import {ThemeToggle} from '../Components/ThemeToggle'
import {StarBackground} from '../Components/StarBackground'
import {Navbar} from '../Components/Navbar'
import {HeroSection} from '../Components/HeroSection'
import {Aboutme} from '../Components/Aboutme'
import {SkillsSection} from '../Components/SkillsSection'
import {ProjectsSection} from '../Components/ProjectsSection'
import {ContactSection} from '../Components/ContactSection'


 export const Home = () => {
  return (
    <div>

        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
        <main>
            <HeroSection/>
            <Aboutme/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
    </div>
  )
}

