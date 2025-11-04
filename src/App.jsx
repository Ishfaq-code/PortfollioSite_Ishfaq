import { navlinks } from "./constants"


function App() {

  return (
    <>
     <div className='flex flex-col items-center justify-center h-screen font-primary text-white'>
          <h1 className="md:text-7xl text-5xl font-bold " tabIndex="0">Ishfaq Mohsin</h1>
          <div className="flex p-10">
            <a tabIndex="0" className="md:text-3xl text-xl transition-all duration-{0.2s} hover:text-4xl" href="/IshfaqMohsinResume - Copy.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <p className="md:text-3xl text-xl md:px-5 px-3"> | </p>
            <a tabIndex="0" className="md:text-3xl text-xl transition-all duration-{0.2s} hover:text-4xl" href="https://github.com/Ishfaq-code" target="_blank" rel="noopener noreferrer">Github</a>
            <p className="md:text-3xl text-xl md:px-5 px-3"> | </p>
            <a tabIndex="0" className="md:text-3xl text-xl transition-all duration-{0.2s} hover:text-4xl" href="https://www.linkedin.com/in/ishfaq-mohsin/" target="_blank" rel="noopener noreferrer">Linkedin</a>            
          </div> 
      </div>
    </>
  )
}

export default App
