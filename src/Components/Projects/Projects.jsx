import React from 'react'
import Project from './Project'
import './Projects.css'

function Projects() {
  return (
    <section id='workid'className="main-projects">
      <h1 className='work'>My Works</h1>
       <div className="projects">
       <Project/>
       </div>
       
    </section>
  )
}

export default Projects