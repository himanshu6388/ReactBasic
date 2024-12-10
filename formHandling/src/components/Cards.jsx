import React from "react";
import Card from "./Card";

function Cards() {
    return(
        <>
            <div className="w-full max-h-96 overflow-auto  flex justify-center gap-4 flex-wrap p-4">
                <Card />
            </div>
        </>
    )
}

export default Cards;