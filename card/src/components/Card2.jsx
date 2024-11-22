

import React from "react";

function Card2({values, handleClick, index}){
    const {name, image, profession,friends} = values;
    return(
        <>
            <div className="w-52 bg-white rounded-r-md overflow-hidden ">
                <div className="w-full h-35  bg-sky-200"> 
                    <img className="w-full h-full object-cover " src={image} alt="" />
                </div>
                <div
                onClick={()=>handleClick(index)}
                className="w-full p-3">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <h5 className="text-xs">{profession}</h5>
                    <button className="px-3 py-1 text-xs text-white bg-blue-500 font-semibold mt-3  rounded">{friends?'Friends':'Add  Friend'}</button>
                </div>
            </div>  
        </>
    )
}

export default Card2;