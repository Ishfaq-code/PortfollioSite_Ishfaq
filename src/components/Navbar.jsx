import React from 'react'

const Navbar = ({
   navlinks
}) => {
  return (
     <nav className="fixed bg-[#010101]  left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg  z-50"
     aria-label="Main navigation"
     >
      
      <ul className="flex space-x-8 text-white font-medium">
        <li>
          <a
            href={navlinks.tag_ab.id}
            className="p-2 hover:text-red-500 transition-colors border-2 border-transparent  hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
          >
            {navlinks.tag_ab.text}
          </a>
        </li>

          <li>
          <a
            href={navlinks.tag_ex.id}
            className="p-2 hover:text-red-500 transition-colors border-2 border-transparent  hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
          >
            {navlinks.tag_ex.text}
          </a>
        </li>

           <li>
          <a
            href={navlinks.tag_pr.id}
            className="p-2 hover:text-red-500 transition-colors border-2 border-transparent  hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
          >
            {navlinks.tag_pr.text}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar