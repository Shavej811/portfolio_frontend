import { Route, Routes } from 'react-router-dom'
import Home from '../components/Pages/Home'
import About from '../components/Pages/About'
import Resume from '../components/Pages/Resume'
import Projects from '../components/Pages/Projects'
import Contact from '../components/Pages/Contact'


const NavigationManager = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default NavigationManager