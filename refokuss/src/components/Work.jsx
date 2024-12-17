import React from "react";

function Work(){
    var images =[
        {
            url:"https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600",
            top:"50%",
            left:"50%",
            isActive:false
        },
        {
            url:"https://images.pexels.com/photos/2183773/pexels-photo-2183773.jpeg?auto=compress&cs=tinysrgb&w=600",
            top:"56%",
            left:"44%",
            isActive:true
        },
        {
            url:"https://images.pexels.com/photos/4012970/pexels-photo-4012970.jpeg?auto=compress&cs=tinysrgb&w=600",
            top:"45%",
            left:"56%",
            isActive:false
        },
        {
            url:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
            top:"60%",
            left:"53%",
            isActive:false
        },
        {
            url:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
            top:"43%",
            left:"40%",
            isActive:false
        },
        {
            url:"https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600",
            top:"65%",
            left:"55%",
            isActive:false
        },

    ]
    return(
        <div className=" w-full mt-10">
            <div className="relative max-w-screen-xl m-auto text-center">
                <h1 className="text-[30vw] leading-none font-medium  select-none tracking-tight">work</h1>
                <div className="absolute top-0 w-full h-full ">
                    {images.map((elem,  index) =>(elem.isActive && ( <img className=" absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]" src={elem.url} style={{top:elem.top, left:elem.left}} alt="" />) ))}
                </div>
            </div>
           
        </div>
    )
}

export default Work;