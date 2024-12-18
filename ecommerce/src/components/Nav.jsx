import React from 'react'

function Nav() {
  return (
    <>
         <nav 
        className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
           <a className="py-2 px-5 border border-blue-200 text-blue-300 rounded" href="/create">Add New Product</a>
             <hr className="my-3 w-[80%]"/>
           <h1 className="text-2xl  w-[80%] mb-3">Category Filter</h1>
           <ul className=" w-[80%]">
             <li className="mb-3 flex items-center">
                <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-100"></span>
                cat 1
             </li>
             <li className="mb-3 flex items-cente">
                <span className="rounded-full mr-2  w-[15px] h-[15px] bg-red-100"></span>
                cat 2
             </li>
             <li className="mb-3 flex items-center">
                <span className="rounded-full mr-2  w-[15px] h-[15px] bg-green-100"></span>
                cat 3
             </li>
           </ul>
        </nav>

    </>
  )
}

export default Nav