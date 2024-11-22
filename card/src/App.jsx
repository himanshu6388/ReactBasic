import { useState } from "react"
import Card from "./components/Card"
import Card2 from "./components/Card2"

function App() {

  const data = [
    {
      name: "Himanshu",
      profession:"Programmer",
      image:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      friends:false
    },
    {
      name: "Amit",
      profession:"Hacker",
      image:"https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
      friends:false

    },
    {
      name: "Muskan",
      profession:"Graphic Designer",
      image:"https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600",
      friends:false
    }
  ]
  
  const [realdata, setRealData,] = useState(data)
  console.log(realdata)

  const handle = (cardIndex)=>{
    setRealData((prev)=>{
      return prev.map((item, index)=>{
        if(index === cardIndex){
          return {...item, friends: !item.friends}
        }
        return item 
      })
    })
  }
  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {realdata .map((item, index)=>(
        <Card2 key={index} index={index} values={item} handleClick={handle}/>
      ))}
    </div>
  )
}

export default App
