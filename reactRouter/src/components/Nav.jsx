import React from "react";
import {Link, NavLink } from "react-router-dom";

function Nav(){
    return(
        <>
        <nav className="mt-10 flex justify-center gap-10 ">
          <NavLink to="/">
             {(e)=>{
                return(
                    <span
                     className={[
                        e.isActive?"text-red-600":"",
                        e.isActive?"font-bold":""
                     ].join(" ")}
                    >Home</span>
                )
              }}
          </NavLink> 
          <NavLink
          style={(e)=>{
            return {
                color:e.isActive ? "tomato" : "",
                fontWeight:e.isActive ? "bold" :""
            }
          }} 
          to="/user">User</NavLink>  
          <NavLink
          style={(e)=>{
            return {
                color:e.isActive ? "tomato" : "",
                fontWeight:e.isActive ? "bold" :""
            }
          }} 
          to="/about">About</NavLink>  
        </nav>  
        </>
    )
}

export default Nav;