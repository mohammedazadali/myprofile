import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import './Education.css'

function Education() {
  return (
   <section className="main-education" id='educationalid'>
     <div className="educations">
        <h1 className='edu-top'>Education</h1>
        <div className="education">
            <div className='content-box'>
                <span className='edulogo'><FontAwesomeIcon icon={faGraduationCap} /></span>
                <div className="content">
                <h1 className="school">Jayalakshmi Institute Of Technology</h1>
                <span className="per">2020-2024 | CGPA:8.3</span>
                <p className="class">B.tech Artificial Intelligence And Data Science</p>
                </div>
               
            </div>
            <div className='content-box'>
                <span className='edulogo'><FontAwesomeIcon icon={faGraduationCap} /></span>
                <div className="content">
                <h1 className="school">Sengunthar Matriculation Higher Secondary School</h1>
                <span className="class">2019-2020 | percentage:66%</span>
                <p className="per">Standard-12th(HSC)</p>
                </div>
            </div>
            <div className='content-box'>
                <span className='edulogo'><FontAwesomeIcon icon={faGraduationCap} /></span>
                <div className="content">
                <h1 className="school">St.Thomas Matriculation School</h1>
                <span className="class">2017-2018 | percentage:83%</span>
                <p className="per">Standard-10th(SSlC)</p>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Education