import axios from 'axios'
import { useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Show from './components/Show'
import Services from './components/Services'

function App() {
 

  return (


     <div className='pt-10 p-5'>
        <nav className='flex items-center justify-center gap-32  text-xl'>
            <Link to="/">Home</Link>
            <Link to="/show">Show</Link>    
            <Link to="/services">Services</Link>
        </nav>
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
          <Route path='/services' element={<Services />} />
        </Routes>
    
     </div>
  

  )
}

export default App
