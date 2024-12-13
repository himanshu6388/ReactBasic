import React, { createContext, useState } from "react";

export const UserContext = createContext();
function Context(props){
  
    const [users, setUsers] = useState([
        {id:0, username:"john", city:"USA"},
        {id:1, username:"Krishna", city:"India"},
        {id:2, username:"Julie", city:"Colambia"}
    ])
    console.log(props)
    return (
        <>
         <UserContext.Provider value={{users, setUsers}}>
            {props.children}
         </UserContext.Provider>
        </>
    )
}
export default Context;