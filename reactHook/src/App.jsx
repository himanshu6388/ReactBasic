import { useState } from "react"


function App() {
 const [val, setVal] = useState(false)
  return (
    <>
      <div className="p-5">
        <h1 className="p-1">Value: {val.toString()}</h1>
        <button
        onClick={()=>{setVal(()=> !val)}}
        className="bg-blue-500 px-6 py-1 text-white rounded">Click</button>
      </div>
    </>
  )
}

export default App
