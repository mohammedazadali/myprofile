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
                    <td ><p>React Js</p> <div className='div-main '><div className="child React"></div>80%</div></td>
                    <td ><p>Angular Js</p> <div className='div-main '><div className="child Angular"></div>70%</div></td>
                </tr>
                <tr>
                   
                    
                </tr>
                <tr>
                    <td> <p>Python </p> <div className='div-main '><div className="child Python"></div>80%</div></td>
                    <td> <p>Java </p> <div className='div-main '><div className="child Java"></div>60%</div></td>
                </tr>
                <tr>
                    <td><p>MangoDB</p><div className='div-main'><div className="child MangoDB"></div>80%</div></td>
                    <td><p>NodeJs</p><div className='div-main'><div className="child Nodejs"></div>80%</div> </td>
                </tr>
                <tr>
                    <td>  <p>JavaScript</p> <div className='div-main'><div className="child JavaScript"></div>80%</div></td>
                    <td><p>Git & GitHub</p><div className='div-main'><div className="child Nodejs Git"></div>80%</div></td>
                </tr>
                <tr>
                    <td><p>Visual Studio Code</p><div className='div-main'><div className="vsCode"></div>80%</div></td>
                    <td><p>Machine Learning</p><div className='div-main'><div className="child Nodejs machine"></div>50%</div></td>
                </tr>
                <tr>
                    <td><p>AI Tools</p><div className='div-main'><div className="child Nodejs ai"></div>70%</div></td>
                    <td><p>Other Tools</p><div className='div-main'><div className="child Nodejs others"></div>70%</div> </td>
                </tr>
                
            </tbody>
        </table>
       
       </div>
    </div>
   </section>
  )
}

export default Skills