import React, { useEffect } from 'react'
import CartItem from '../component/CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../state/Cart/Action'

const Cart = () => {
  
  const {cart}=useSelector(state=>state)
 
    
   console.log("cart______",cart)
  // console.log(cart.cart?.discount)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleCheckOut=()=>{
   navigate("/checkout?step=2")
  }
  



useEffect(()=>{
dispatch(getCart())
},[cart.updateCartItem,cart.deleteCartItem])



  return (
    <div className='lg:grid grid-cols-3 relative lg:px-16 mt-12'>
       <div className='col-span-2'>
        {cart?.cartItems?.map((item)=> <CartItem item={item}/>)}
       </div>
       <div className='ml-4 border shadow-lg lg:px-7 pt-5 h-[50vh] rounded-lg'>
            <p className='font-bold text-md opacity-80'>PRICE DETAILS</p>
            <div className='font-semibold text-gray-700 flex justify-between pt-2'>
              <p>Price ({cart.cart?.totalItem}) item</p>
              <p>₹{cart.cart?.totalPrice}</p>
               

            </div>
            <div className='flex justify-between font-semibold pt-1'>
              <p className='text-gray-700'>Discount</p>
              <p className='text-green-500'>-₹{cart.cart?.discount}</p>

            </div>
            <div className='flex justify-between font-semibold pt-1'>
              <p className='text-gray-700'>Delivery Charges</p>
              <p className='text-green-500 text-sm'>FREE</p>

            </div>
            <div className='flex justify-between font-semibold pt-1'>
              <p className='text-gray-900'>Total Amount</p>
              <p className='text-gray-900'>₹{cart.cart?.totalDiscountPrice}</p>

            </div>
            <div className='pt-20 flex justify-center items-center'>

            <Button onClick={handleCheckOut} className='w-full' sx={{bgcolor:"black",color:"white",px:4,":hover":{
              bgcolor:"rgb(35, 34, 34)"
            }}}>
               CHECK OUT
            </Button>
            </div>
           

       </div>

    </div>
  )
}

export default Cart
