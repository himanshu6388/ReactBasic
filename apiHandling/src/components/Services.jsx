import Reactq, { useEffect } from "react";

function Services(){

    useEffect(()=>{
        console.log("Service component is created")

        return () =>{
            console.log("Service component is deleted")
        }
    },[])
    return(
        <>
           
        </>
    )
}

export default Services;