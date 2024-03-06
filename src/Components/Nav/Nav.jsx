import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const [isOpen, setOpen] = useState(false)

  function handleclick(){
    setOpen(!isOpen)
  }
  return (
    <section className="main-nav">
      <div className="nav">
        <div className="logo">Mohammed.</div>
        <ul className={`nav-elements  ${isOpen && 'active'}`}>
            <li className='nav-link'><Link activeClass='active' to="experienceid" spy={true} smooth={true} offset={-70} duration={500} >Experience</Link></li>
            <li className='nav-link'><Link activeClass='active' to="workid" spy={true} smooth={true} offset={-70} duration={500} >My Works</Link></li>
            <li className='nav-link'><Link activeClass='active' to="skillid" spy={true} smooth={true} offset={-70} duration={500} >Skills</Link></li>
            <li className='nav-link'><Link activeClass='active' to="certificateid" spy={true} smooth={true} offset={-70} duration={500} >Certificates</Link></li>
            <li className='nav-link'><Link activeClass='active' to="educationalid" spy={true} smooth={true} offset={-70} duration={500} >Education</Link></li>
        </ul>
        <Link to='contact' spy={true} smooth={true} offset={-70} duration={500}><div className="nav-btn">Get Connect</div></Link>
        <span onClick={handleclick} className='nav-bar'>{isOpen?<FontAwesomeIcon icon={faTimes}/>:<FontAwesomeIcon icon={faBars}/>}</span>
    </div>
    </section>
  )
}

export default Nav