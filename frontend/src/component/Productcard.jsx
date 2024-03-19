import React from 'react'
import { useNavigate } from 'react-router-dom'

const Productcard = ({product}) => {
  const navigate=useNavigate();

  return (
   <>
     <div onClick={()=>navigate(`/product/${5}`)} className='flex flex-col max-w-[22rem] rounded-lg shadow-lg items-center bg-white my-3 mx-3 overflow-hidden'>
         <div className='h-[25rem] max-w-[20rem]'>
            <img src={product.image} className='object-cover  object-top w-full h-full' alt="" />
         </div>
         <div className='p-4 '>
           <h3 className='text-md font-medium text-gray-900 '>{product.name}</h3>
            <p className='mt-2 text-sm text-gray-500'>₹ {product.price}</p>
         </div>
    </div>  

    </>
  )
}

export default Productcard
