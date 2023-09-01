import React from 'react'
import '../Stylesheet/Projects.css'
import { projects } from '../helpers/Projects'
import ProjectCard from '../Components/ProjectCard'

const Project = () => {

  return (
    <div className='projects'>
      <div className='pcontainer'>
        <div className='pheader'>
         <h1 className='projhead' id='ph'>Projects</h1>
        </div>
        <div className='projectI'>
          {projects.map((project, key)=>{
            return <ProjectCard
            image={project.image}
            title={project.title}
            description= {project.description}
            link= {project.link}
            key = {key}
            />
          })}
        </div>
        </div>
    </div>
  )
}

export default Project
