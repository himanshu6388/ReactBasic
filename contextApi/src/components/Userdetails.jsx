
import React, {useContext} from "react";  
import { UserContext } from "../context/Context";
import { Navigate, useNavigate, useParams } from "react-router-dom";


function Userdetails(){
    const navigate = useNavigate();
   const {id} =  useParams();
   const {users} = useContext(UserContext);
   console.log(users[id])
    return(
        <>
          <div>
            <h1 className="text-red-200 text-4xl font-bold">{users[id].username}</h1>
            <h3 className="text-red-400">{users[id].city}</h3>
            <button
            onClick={()=> navigate(-1)}
            className="bg-red-100 p-2 mt-5 rounded">Go Back</button>
          </div>
        </>
    )
}

export default Userdetails;