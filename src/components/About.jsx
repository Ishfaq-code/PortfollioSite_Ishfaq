import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { techStack } from "../constants";
import TechCard from "./TechCard";


const About = () => {
  return (
       <section
      id="about"
      className="flex flex-col items-center text-center text-white px-4 py-24"
      aria-labelledby="about-heading"
    >

        <div className="mb-6 flex space-x-6 px-6  rounded-xl " >
        {/* Resume */}
        <a
          href="/IshfaqMohsinResume - Copy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
          aria-label="Resume"
        >
          <HiOutlineDocumentText size={28} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Ishfaq-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ishfaq-mohsin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
      <p className="text-lg text-gray-300 mb-4">
        Hi! I'm
      </p>
      <h1
        id="about-heading"
        className="text-5xl sm:text-6xl font-extrabold tracking-tight"
      >
        Ishfaq Mohsin
      </h1>

     

    
    </section>
  )
}

export default About