import About from "./components/About"
import Experience from "./components/Experience"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { navlinks } from "./constants"


function App() {

  return (
    <>
      <Navbar navlinks={navlinks} />
      <About />
      <Experience />
      <Projects />
    </>
  )
}

export default App
