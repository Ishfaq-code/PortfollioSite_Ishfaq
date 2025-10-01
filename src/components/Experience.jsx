import React from 'react'
import ExperienceCard from './ExperienceCard'
import { experiences } from '../constants'

const Experience = () => {
  return (
    <section
      id='expereince'
      className="flex flex-col items-center text-center text-white px-4 py-24"
      aria-labelledby="experience-heading"
    >
        <h1
        id="experience-heading"
        className="text-5xl sm:text-6xl font-extrabold tracking-tight"
      >
        Experience
      </h1>

      <div className='p-5 mt-6'>
        <ExperienceCard experience={experiences.techranger} />

      </div>
      </section>
  )
}

export default Experience