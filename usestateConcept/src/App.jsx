import { useState } from "react";

function App() {
  // const [val, setVal] = useState({
  //   name: "himanshu",
  //   isBanned: false,
  // });

  const[data, setData] = useState([1,2,3,4,5,6])
  return (
    <>
      {/* <div className="m-56">
        <h1>Name:{val.name}</h1>
        <h2>IsBanned:{val.isBanned.toString()}</h2>
        <button
          onClick={() => setVal({ ...val, isBanned: !val.isBanned})}
          className={`${
            val.isBanned ? "bg-blue-600" : "bg-red-600"
          } text-white text-xs px-6 py-1 rounded`}
        >
          {val.isBanned.toString()}
        </button>
      </div> */}
      
      <div  className="p-5">
        {data.map((item)=> <h1>{item}</h1>)}
        <button 
        className="px-6 py-1 text-white bg-blue-700 rounded"
        onClick={()=> setData(()=>{
          return data.filter((item, index)=> index != data.length-1)
        })}
        >Click</button>
      </div>
    </>
  );
}

export default App;
