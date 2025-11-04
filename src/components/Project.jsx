import React from 'react'
import Tech from './Tech'

const Project = ({
    title,
    link,
    description,
    techStack

}) => {
  return (
    <div className='project-container flex flex-col justify-center w-[450px] border p-5'>
        <h1><a href={link} className='project-title'>{title}</a></h1>
        <p className='project-description'>{description}</p>
        <div className='project-tech flex'>{techStack.map((tech) => (
            <Tech tech={tech} />
        ))}</div>
        
    </div>
  )
}

export default Project