

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function Card(){
    const [val, setVal] = useState(false)
    return (
        <>
            <div className="w-60 h-32 bg-zinc-500 rounded overflow-hidden relative flex">
                <img className={`shrink-0 transition-transform
                    duration-400 ease-in-out h-full w-full ${val ===false?'-translate-x-[0%]':'-translate-x-[100%]'} object-cover`} src="https://images.pexels.com/photos/27772445/pexels-photo-27772445/free-photo-of-a-couple-in-a-boat-on-a-foggy-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>

                <img className={`shrink-0 transition-transform
                    duration-400 ease-in-out h-full w-full ${val ===false?'-translate-x-[0%]':'-translate-x-[100%]'} object-cover`} src="https://images.pexels.com/photos/27083318/pexels-photo-27083318/free-photo-of-close-up-of-a-greenbul-perching-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>

                <span onClick={()=> setVal(()=> !val)} className={`w-8 h-8 bg-[#dadada9b] ${val?'rotate-0':'rotate-180'}  absolute  flex justify-center items-center left-1/2 -translatey-y-[50%] -translate-x-[50%] bottom-[25%] rounded-full`}>
                  <FaArrowRight size={".7em"}/>
                </span>
            </div>
        </>
    )
}


export  default Card