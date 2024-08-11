import { useEffect, useState } from 'react'

import './App.css'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Project from './components/Project'
import Aos from 'aos';
import "aos/dist/aos.css"
import Navs from './components/Navs'

function App() {
useEffect(() => {
  Aos.init();
}, [])

  return (
    <>
    <Navs/>
      <Intro/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
