import React from 'react'
import ProjectComponent from './ProjectComponent'
import { projects } from '../constants'

const Projects = () => {
  return (
<section className="max-w-6xl mx-auto px-4 py-12" id='project'>
      {/* Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-10">Projects</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project, i) => (
          <ProjectComponent key={i} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects