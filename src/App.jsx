
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AddBlogs from './Sections/AddBlogs/AddBlogs'
import AddProject from './Sections/AddProject/AddProject'
import Contact from './Sections/Contact/Contact'
import Footer from './Sections/Footer/Footer'
import Hero from './Sections/Hero/Hero'
import Projects from './Sections/Projects/Projects'
import Skills from './Sections/Skills/Skills'


function App() {
 

  return (
    <>
     <Hero />
     <Projects />
     <Skills />
     <AddBlogs/>
     <AddProject/>
     <Contact />
     <Footer />
    </>
  )
}

export default App
