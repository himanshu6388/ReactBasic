import {NavLink, Link} from 'react-router-dom';
import {Router,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Project from './components/Project';
import Conatct from './components/Contact';
function App() {
  

  return (
  <div>
    <nav className='flex items-center justify-center font-sans text-xl cursor-pointer gap-20 p-5'>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Conatact</Link>

    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Conatct/>} />
    </Routes>
  </div>
  )
}

export default App
