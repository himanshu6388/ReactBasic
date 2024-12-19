import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
function Detail() {
  
  const [product, setProduct] = useState(null)
  const {id} = useParams()
  const getsingleproduct = async () => {
    try{
      const {data} = await  axios.get(`/products/${id}`);
      setProduct(data);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }
  
  useEffect(()=>{
    getsingleproduct()
  },[])
   
  return product ? (
    <div className='flex  w-[70%] h-full justify-between items-center  m-auto p-[10%]'>

        <img 
        className=' object-contain h-[80%] w-[40%]'
        src={product.image} alt="" />
        <div className='content w-[50%]'>
            <h1 className='text-4xl'>{product.title}</h1>
            <h3 className='text-zinc-400 my-5'>{product.category}</h3>
            <h2 className='text-red-300 mb-3'>${product.price}</h2>
            <p className='mb-[5%]'>{product.description}</p>
            <Link className="mr-5 py-2 px-5 border border-blue-200 text-blue-300 rounded">Edit</Link>
            <Link className="py-2 px-5 border border-red-200 text-red-300 rounded">Delete</Link>
        </div>
    </div>
  ): (
    <Loading/>
  )
}

export default Detail;