import React from 'react'
import "./../styles/productPageCard.css"
import { useNavigate } from 'react-router-dom'

const ProductPageCard = ({product}) => {
  const navigate=useNavigate()
  
  return (
    <div onClick={()=>navigate(`/product/${product._id}`)}  className='productCard w-[15rem] m-3  transition-all cursor-pointer relative  '>
        <div className='h-[20rem] '>
            <img className='h-full w-full object-cover object-left-top ' src={product.imageUrl} alt="" />
        </div>
     <div className='textPart bg-white p-3  '>
        <div>
            <p className='opacity-60'>{product.brand}</p>
            <p>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2 '>
            <p className='font-semibold'>₹{product.discountedPrice}</p>
            <p className='line-through opacity-50'>₹{product.price}</p>
             <p className='font-semibold text-green-500 w-full flex justify-end pl- '>{product.discountedPercent}% OFF</p>
        </div>
     </div>

    </div>
  )
}

export default ProductPageCard
