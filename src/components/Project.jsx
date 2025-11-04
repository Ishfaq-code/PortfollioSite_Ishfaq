import React from 'react'
import Tech from './Tech'

const Project = ({
    title,
    link,
    description,
    techStack

}) => {
  return (
    <div className='project-container w-[450px] border p-5 rounded-lg bg-[#1b1b1b94]' tabIndex='0'>
        <h1><a href={link} className='project-title flex justify-start text-2xl font-bold text-green-500 hover:underline mb-3'>{title}</a></h1>
        <p className='project-description text-left'>{description}</p>
        <div className='project-tech flex p-3 space-x-2'>{techStack.map((tech) => (
        <Tech tech={tech} />
        ))}</div>
        
    </div>
  )
}

export default Project