import React from "react";
import {Link} from 'react-router-dom';
function Home(){
    return(
        <>
            <div className="w-1/2 m-auto mt-10">
                <h1 className="text-red-200 text-5xl mb-2">Home</h1>

                <p className="mb-2 text-zinc-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a ipsam illo ducimus similique. Quas sequi harum delectus dolores suscipit.
                </p>
                <button className="text-white p-3 bg-zinc-300 rounded">Explore More</button>
            </div>
        </>
    )
}

export default Home;