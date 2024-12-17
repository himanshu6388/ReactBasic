import React from 'react'
import Product from './Product'

function Products() {
    var products =[
        {
            title:"arqitel", 
            description:"Arqu Executive and its employes continue to receive orders for customers for coustomres that get orders for coustomers.",
            live:true,
            case:false    
        },
        {
            title:"TTR", 
            description:"Arqu Executive and its employes continue to receive orders for customers for coustomres that get orders for coustomers.",
            live:true,
            case:false    
        },
        {
            title:"YIR 2022", 
            description:"Arqu Executive and its employes continue to receive orders for customers for coustomres that get orders for coustomers.",
            live:true,
            case:true    
        },
        {
            title:"Yahoo", 
            description:"Arqu Executive and its employes continue to receive orders for customers for coustomres that get orders for coustomers.",
            live:true,
            case:true   
        }
    ]
  return (
    <div className='mt-32 '>
        {products.map((val,index)=><Product val={val}/>)}
       
    </div>
  )
}

export default Products