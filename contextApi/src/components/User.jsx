import React, { useContext } from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../context/Context"
function User(){

    const {users, setUsers} =  useContext(UserContext)


    return(
        <>
            <div>
               <h1 className="text-3xl">User List</h1>
               <div className="mt-10 flex flex-col w-1/2">
                {users.map((u)=>(
                     <Link key={u.id} to={`/user/${u.id}`} className=" mb-3 border-t-red-500 p-3">
                        {u.username}
                        
                    </Link>
                ))}
              
               </div>
            </div>
        </>
    )
}

export default User;