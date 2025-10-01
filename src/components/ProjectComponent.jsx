import React from 'react'

const ProjectComponent = ({
    project
}) => {
  return (
<article className="bg-[#121212] text-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm flex flex-col items-center p-4">  {/* Project GIF */}
  <img
    src={project.image}
    alt={`Demo of ${project.name}`}
    className="w-full h-1/2 object-cover"
  />

  {/* Content */}
  <div className="flex-1 p-4 flex flex-col justify-between">
    {/* Project name as GitHub link */}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold  hover:underline"
    >
      {project.name}
    </a>

    {/* Short description */}
    <p className="text-sm text-gray-300 mt-2 flex-grow">{project.description}</p>

    {/* Tech icons */}
    <div className="flex gap-3 mt-4">
      {project.tech.map((t, i) => {
        const Icon = t.icon;
        return (
          <Icon
            key={i}
            className="w-6 h-6 text-gray-300 hover:text-white transition-colors"
            aria-label={t.name}
            title={t.name}
          />
        );
      })}
    </div>
  </div>
</article>
  )
}

export default ProjectComponent