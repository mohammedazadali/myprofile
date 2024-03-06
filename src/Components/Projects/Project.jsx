import data from './Project.json'

function Project() {

  return (
  <>
  {data.projects.map((project,index)=>{
    return(
      <section className="project" key={index}>
      <h1 className='projecttop'>{project.projecttitle}</h1>
      <p>{project.des}</p>
      <h1 className='projecttitle'>Domain</h1>
      <p>{project.domain}</p>
      <h1 className='projecttitle'>Tech Stack</h1>
      <p>{project.tech}</p>
      <h1 className='projecttitle'>Features</h1>
       {(project.feature).map((fea,index)=>{
        return(
          <ul key={index}>
        <li>
        <p>{fea}</p>
        </li>
       </ul>
        )
       })}
      <a href={project.link} target='_blank'><button  className='projectbtn' >Explore</button></a>
     </section>
    )
  })}</>
  )
}

export default Project