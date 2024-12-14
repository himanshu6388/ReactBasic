import React from "react";


function Home(){
    return(
        <div className="flex w-full h-screen">
        <div className="w-1/2  items-center justify-center ">   
            <h1 className="p-2 mt-40 ml-10 text-4xl font-sans">Where you are, You are better togather.</h1>
            <p className="text-xl font-thin p-2 ml-10">Virtual office for rmote team</p> 
            <button className="ml-10 bg-black text-white font-semibold rounded p-3 mt-5">Know More</button>
        </div>
        <div className="flex items-center justify-center">
            <div className="w-full h-full overflow-hidden">
                <img className="h-[50%] ml-52 mt-32" src="https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
        </div>
    )
}

export default Home;