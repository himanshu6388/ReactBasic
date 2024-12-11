import React from "react"
import Home from "./components/Home"
import { Link,Route, Routes } from "react-router-dom"
import User from "./components/User"
import About from "./components/About"

function App() {
  

  return (
    <>
      <nav className="p-5 flex gap-20 ml-40 text-lg font-semibold cursor-pointer">
          <Link to="/">Home</Link> 
          <Link to="/user">User</Link>  
          <Link to="/about">About</Link>  
      </nav>  
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/about" element={<About/>}/>

      </Routes>
    </>
  )
}

export default App
