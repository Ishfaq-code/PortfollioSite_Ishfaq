import React from 'react'
import Tech from './Tech'

const Project = ({
    title,
    links,
    description,
    techStack

}) => {
  return (
   <div className="project-container w-full max-w-[450px] sm:w-[90%] md:w-[450px] border p-4 sm:p-5 rounded-lg bg-[#1b1b1b94] mx-auto">
    <div className='flex justify-between items-baseline'>
      <h1 className="project-title flex justify-start text-xl sm:text-2xl font-bold text-green-500 mb-3">{title}</h1>
      <div className='flex space-x-3'>
        {links.map((link) => (
          <a tabIndex='0' className='text-green-200 transition-all duration-{0.2s} hover:underline' href={link.href}>{link.label}</a>
        ))}
      </div>
    </div>
    <p className="project-description text-left text-sm sm:text-base">{description}</p>
    <div className="project-tech flex flex-wrap gap-2 mt-3">
    {techStack.map((tech, index) => (
      <Tech key={index} tech={tech} />
    ))}
    </div>
  </div>

  )
}

export default Project