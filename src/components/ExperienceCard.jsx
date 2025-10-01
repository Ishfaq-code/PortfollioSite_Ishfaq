import React from 'react'

const ExperienceCard = ({
  experience
}) => {
  return (
<article className={`w-full max-w-3xl mx-auto flex border-2 border-[${experience.colorCode}] bg-[#121212] text-white rounded-xl shadow-lg overflow-hidden`} id='expereince'>
  {/* Left colored strip */}
  <div className={`w-2 bg-[${experience.colorCode}] flex-shrink-0`}></div>

  {/* Content */}
  <div className="p-4 sm:p-6 flex flex-col text-left w-full">
    <h3 className="text-lg sm:text-xl font-semibold">{experience.company}</h3>
    <p className="text-base sm:text-lg">{experience.title}</p>
    <p className="text-xs sm:text-sm">{experience.date}</p>
    <ul className="mt-4 sm:mt-5 list-disc list-inside space-y-2">
      {experience.res.map((r, i) => (
        <li key={i} className="text-gray-300 text-sm sm:text-base">
          {r}
        </li>
      ))}
    </ul>
  </div>
</article>
  )
}

export default ExperienceCard