import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { useState } from "react"
function App() {

  const data = [
    {
      image:"https://images.pexels.com/photos/6270265/pexels-photo-6270265.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"loveful",
      artist:"Himanshu",
      added:false,
    },
    {
      image:"https://images.pexels.com/photos/7086304/pexels-photo-7086304.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Ranjhna",
      artist:"Neha Kakkar",
      added:false,
    },
    {
      image:"https://images.pexels.com/photos/6670756/pexels-photo-6670756.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Kasturi",
      artist:"Arjit Singh",
      added:false,
    }
  ]

  const [songData, setSongData] =  useState(data)
  const handleClick = (index) =>{
    setSongData((prev)=>{
      return prev.map((item, itemindex)=>{
        if(itemindex === index) return {...item, added:!item.added}
        return item;
      })
    })
  }
  return (
  <>
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData}/>
      <div className="px-20 flex gap-10 mt-10  flex-wrap">
        {songData.map((obj, index)=>(
          <Card data={obj} handleClick={handleClick} index={index} key={index}/>
          ))}
      </div>
    </div>
  </>
  ) 
}

export default App
