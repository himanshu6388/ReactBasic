import React from "react"
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  const {search, pathname} = useLocation()
  return (
    <div className="h-screen w-screen flex">

      {(pathname != "/" || search.length >0) &&  <Link to="/" className="text-red-300 absolute left-[17%] top-[3%]">Home</Link> }
     
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail/>} />
       </Routes>
    </div>
  )
}

export default App;
