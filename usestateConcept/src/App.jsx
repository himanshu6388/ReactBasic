import { useState } from "react";

function App() {
  // const [val, setVal] = useState({
  //   name: "himanshu",
  //   isBanned: false,
  // });

  // const[data, setData] = useState([1,2,3,4,5,6])

  const [val, setVal] = useState([
    {
      name:"Himanshu",
      age:19
    },
    {
      name:"Deepak",
      age:20
    },
    {
      name:"Sakshi",
      age:21
    }
  ])
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
      
      {/* <div  className="p-5">
        {data.map(item => <h1>{item}</h1>)}
        <button 
        className="px-6 py-1 text-white bg-blue-700 rounded"
        onClick={()=> setData(()=> data.filter((item, index)=> item % 2 != 0))}
        >Click</button>
      </div> */}


      {/* <div className="p-10">
        {data.map(item => <h2>{item}</h2>)}

        <button className="px-6 py-1 text-white bg-blue-600 rounded"
        onClick={()=> setData([...data, 7])}
        >Add</button>
      </div> */}

      <div className="p-10">
        {val.map(item =>
          <div>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>

           
          </div>
        )}
         <button 
            className="px-5 py-1 bg-red-700 text-white text-xs rounded"
            onClick={()=> setVal(()=> val.map(item => item.name === "Himanshu" ? ({name:"Himanshu", age:20}) : item))}
            >Inc</button>
      </div>
    </>
  );
}

export default App;
