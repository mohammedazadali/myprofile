import React from 'react'
import './Skills.css'


function Skills() {
  return (
   <section className="main-skills" id='skillid'>

    <div className="skills">
        <h1 className='skill-title'>Skills</h1>
    <div className="skill">
        <table>
            <tbody>
                <tr>
                    <td ><p>React Js</p> <div className='div-main '><div className="child React"></div></div></td>
                    <td><p>AI Tools</p><div className='div-main'><div className="child Nodejs ai"></div></div></td>
                </tr>
                <tr>
                   
                    
                </tr>
                <tr>
                    <td> <p>Python </p> <div className='div-main '><div className="child Python"></div></div></td>
                    <td> <p>Java </p> <div className='div-main '><div className="child Java"></div></div></td>
                </tr>
                <tr>
                    <td><p>MangoDB</p><div className='div-main'><div className="child MangoDB"></div></div></td>
                    <td><p>NodeJs</p><div className='div-main'><div className="child Nodejs"></div></div> </td>
                </tr>
                <tr>
                    <td>  <p>JavaScript</p> <div className='div-main'><div className="child JavaScript"></div></div></td>
                    <td><p>Git & GitHub</p><div className='div-main'><div className="child Nodejs Git"></div></div></td>
                </tr>
                <tr>
                    <td><p>Visual Studio Code</p><div className='div-main'><div className="vsCode"></div></div></td>
                    <td><p>Machine Learning</p><div className='div-main'><div className="child Nodejs machine"></div></div></td>
                </tr>
                <tr>
                    <td><p>Other Tools</p><div className='div-main'><div className="child Nodejs others"></div></div> </td>
                </tr>
                
            </tbody>
        </table>
       
       </div>
    </div>
   </section>
  )
}

export default Skills