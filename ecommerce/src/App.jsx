import React from "react"
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  
  return (
    <div className="h-screen w-screen flex">
    
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail/>} />
       </Routes>
    </div>
  )
}

export default App;
