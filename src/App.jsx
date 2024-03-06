import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Projects from './Components/Projects/Projects'
import Experiecces from './Components/Experience/Experiecces'
import Hero from './Components/Hero/Hero'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import Gototop from './Components/Gototop'
import Skills from './Components/Skills/Skills'
import Certificate from './Components/Certifications/Certificate'
import Contact from './Components/Contact/Contact'
import Ongoing from './Components/Ongoing/Ongoing'


function App() {

  return (
    <>
    
    <Gototop/>
    <Nav/>
    <Hero/>
    <Experiecces/>
    <Projects/>
    <Skills/>
    <Certificate/>
    <Education/>
    <Contact/>
    <Footer/>
    </>

  )
}

export default App
