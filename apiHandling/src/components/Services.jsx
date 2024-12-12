import Reactq, { useEffect, useState } from "react";
import axios from "../utility/axios";
function Services(){
    
    const [first, setFirst] = useState("this is normal data");
    const [second, setSecond] = useState(("this is large data"));

    const getUsers = () =>{
        
        
        axios.get("/users").then((users) =>{
          console.log(users);
        })
        .catch(err=>console.error(err));
      }

    useEffect(()=>{
        getUsers();
        console.log("Service component is created")

        return () =>{
            console.log("Service component is deleted")
        }
    },[second])

    
    
    return(
        <>
           <h1>{first}</h1>
           <button
           onClick={()=> setFirst("Normal data has been changed")}
           className="mb-10 bg-red-200 p-2">
            Change Noraml Data
            </button>


           <h1>{second}</h1>
           <button
           onClick={()=>setSecond("Large data had been changed")}
           className="mb-10 bg-red-200 p-2">
            Change Large Data
            </button>
        </>
    )
}

export default Services;