import { useState } from "react"

function App() {
 
 const [val , setVal]  = useState({
  name:"himanshu",
  isBanned:false
 });
  return (
   <>
    <div>
      name:{val.name}<br/>
      IsBanned: {val.isBanned.toString()} <br/>
      <button onClick={()=> setVal({...val, isBanned:true})} className="bg-blue-500 text-white p-2 mx-5 rounded">Change</button>
    </div>
    
   </>
  )
}

export default App
