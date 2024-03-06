import React from 'react'
import './Experiecces.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'

function Experiecce() {
  let data = [
    {
      logo:<FontAwesomeIcon icon={faLaptop} />,
      title:'Brick',
      position:'Founder / CEO',
      date:'present',
      description:'BrickWeb Solutions is a dynamic and innovative web development company committed to building robust, functional, and visually stunning websites. With a focus on quality craftsmanship and cutting-edge technology, we aim to provide our clients with tailored web solutions that not only meet but exceed their expectations.'},{
    logo:<FontAwesomeIcon icon={faCode} />,
    title:'Mugil Cloud',
    position:'Intern',
    date:'July 2022 - Aug 2022',
    description:'Implemented advanced automation technique during internship. resulting in a significant reduction of manual task and saving 20+ hours per week.Develop and optimize backend processes using PHP and MySQL, resulting in a 40% increase in database efficiency and reducing query response time by 50 milliseconds'}
   ,
    {
      logo:<FontAwesomeIcon icon={faCode} />,
      title:'Rinex',
      position:'Intern',
      date:'Sep 2023 - Nov 2023',
      description:'As a Web Development Intern, I actively contributed to the enhancement of a dynamic e-commerce platform, gaining hands-on experience in front-end and back-end technologies. Collaborating with a cross-functional team of developers and designers, I played a key role in implementing new features, optimizing existing functionalities, and ensuring a seamless user experience.'}]

 
  return (
  <section className="main-experience" id='experienceid'>
     <div className="experiences">
    <h1 className='exp-title'>Experience</h1>
    <div className="experience-box">
  {  data.map((datas,index)=>{
    return(
      <div className="experience " key={index}>
      <div className="exp-logo">{datas.logo}</div>
      <div className="exp-content" >
          <h1 key={index} className='exp-sub-title'>{datas.title}</h1>
          <p>{datas.position}</p>
          <span>{datas.date}</span>
          <p className='pro-des'>{datas.description}</p>
      </div>
  </div>
    )
    })}
    </div>
   </div>
  </section>
  )
}

export default Experiecce