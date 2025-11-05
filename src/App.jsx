import Project from "./components/Project"
import { projects } from "./constants"


function App() {

  return (
     <div className='min-h-screen w-full flex flex-col items-center justify-start py-8 md:py-12 font-primary text-white overflow-y-auto'>
          <h1 className="md:text-7xl text-5xl font-bold" tabIndex="0">Ishfaq Mohsin</h1>
          <div className="flex p-10">
            <a tabIndex="0" className="md:text-3xl text-xl text-green-500 transition-all duration-{0.2s} hover:underline" href="/IshfaqMohsinResume - Copy.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <p className="md:text-3xl text-xl md:px-5 px-3"> | </p>
            <a tabIndex="0" className="md:text-3xl text-xl text-green-500 transition-all duration-{0.2s} hover:underline" href="https://github.com/Ishfaq-code" target="_blank" rel="noopener noreferrer">Github</a>
            <p className="md:text-3xl text-xl md:px-5 px-3"> | </p>
            <a tabIndex="0" className="md:text-3xl text-xl text-green-500 transition-all duration-{0.2s} hover:underline" href="https://www.linkedin.com/in/ishfaq-mohsin/" target="_blank" rel="noopener noreferrer">Linkedin</a>            
          </div>

          <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center items-stretch">
            {projects.map((project) => (
              <Project title={project.title} description={project.description} links={project.links} techStack={project.tech} note={project.note} />
          ))}
      </div> 
       
      </div>
   
  )
}

export default App
