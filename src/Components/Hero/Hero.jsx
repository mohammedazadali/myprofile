import React from 'react'
import logo from '../Assets/web_dev.png'
import './Hero.css'
import { Link } from 'react-scroll'
function Hero() {
  return (
   <section className="hero" id='home'>
    <div className="left-hero">
        <h1>Welcome to my digital <span>realm!</span> </h1>
         <p>I'm Mohammed Azad Ali, a passionate web developer dedicated to crafting seamless and innovative digital experiences. With a penchant for problem-solving and a keen eye for detail, I thrive in the dynamic world of web development.I embarked on my journey in the tech landscape with a focus on mastering the MERN  stack. This full-stack expertise allows me to architect robust and scalable web applications, ensuring a delightful user experience from end to end. I also delve into the intricacies of the Python stack, adding versatility to my coding arsenal.</p>
         {/* <div className="social-icons">
         <span className='social-icon'><SocialIcon url="https://www.linkedin.com/in/mohammed-azad-ali-junior-webdeveloper-uiuxdesigner/" /></span>
         <span className='social-icon'><SocialIcon url="https://www.instagram.com/brickwebdesigns/?next=%2F" /></span>
         <span className='social-icon'><SocialIcon url="https://x.com" /></span>
         <span className='social-icon'><SocialIcon url="https://pinterest.com" /></span>
         </div> */}
         <div className="hero-btns">
         <Link to='contact' spy={true} smooth={true} offset={-70} duration={500} ><div className="hero-bt"><button className='hero-btn'>Get Connect</button></div></Link>
         <a href="https://drive.google.com/file/d/1wcAksR2sSl-bJkMvfU9Q1-dxGji-xPQJ/view?usp=sharing" target='_blank'><button className='resume'>My Resume</button></a>
         </div>
    </div>
    <div className="right-hero">
        <img src={logo} alt="" />
    </div>
   </section>
  )
}

export default Hero