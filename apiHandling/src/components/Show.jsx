import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../utility/axios";

function Show(){


    
  const [product, setProduct] = useState([])

  const getProduct = () =>{
   
    
    axios.get("/product").then(product =>{
      console.log(product);
      setProduct(product.data);
    }).catch(err=>console.error(err));
  }

  useEffect(()=>{
        getProduct()
  },[])

    return(
        <>
            <button
                 onClick={getProduct}
                 className='px-5 py-2 mt-5 mb-4 bg-red-300 rounded'>
                  Cal Product api
             </button>
        

          <ul>  
              {product.length > 0 ? 
              product.map((p)=>(
              <li key={id} className=' mb-2 p-5 bg-red-200 rounded'>
                {p.title}
              </li>
              )) : <h1>Loading...</h1>
             }
           </ul>
        </>
    )
}

export default Show;