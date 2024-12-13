import { useState } from "react"
import Home from "./components/Home"
import {Link, Route, Routes} from "react-router-dom";
import User from "./components/User";
import About from "./components/About";

function App() {
 
  const [user, setUser] = useState([
  ])
  return (
   <>
    
    <nav className="mt-10 flex justify-center gap-10">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/about">About</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
    </Routes>
    
   </>
  )
}

export default App
