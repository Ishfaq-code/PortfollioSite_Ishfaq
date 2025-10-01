import React from 'react'

const TechCard = ({ tech }) => {
  return (
    <div
      className="flex items-center justify-center text-5xl"
      aria-label={tech.name} // keeps it accessible for screen readers
    >
      {<tech.icon />}
    </div>  )
}

export default TechCard