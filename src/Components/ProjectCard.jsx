import React from 'react'
import { projects } from '../helpers/Projects';

const ProjectCard = ({image, title,description, link}) => {


  return (
    <div className='pcontainer'>
      <div>
        <img src={image} width={600} height={500} className='pimg'></img>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link} target='blank' rel='noopener noreferrer'><button>Learn more</button></a>
    </div>
  )
}

export default ProjectCard
