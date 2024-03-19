import React, { useEffect } from 'react'
import AddressCard from './AddressCard'
import CartItem from './CartItem'
import {Button} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../state/Order/Action'
import { createPayment } from '../state/Payment/Action'
const OrderSummary = () => {
  const {order}=useSelector(store=>store)
      console.log("order:::",order)
    
   const dispatch=useDispatch()
   const location=useLocation()
   const searchParams=new URLSearchParams(location.search)
   const orderId=searchParams.get("order_id")
     

   useEffect(()=>{
        dispatch(getOrderById(orderId))   
   },[orderId])

   const handleSubmit=()=>{
      dispatch(createPayment(orderId))
   }

  return (
    <div>
    <div className='p-5 mt-10 shadow-lg rounded-md border'>
      <AddressCard address={order?.order?.createdOrder?.shippAddress} />
    </div>
    <div className='lg:grid grid-cols-3 relative lg:px-16 mt-12'>
       <div className='col-span-2'>
        {order.order?.createdOrder?.orderItems?.map((item)=> <CartItem item={item}/>)}
       </div>
       <div className='ml-4 border shadow-lg lg:px-7 pt-5 h-[50vh] rounded-lg'>
            <p className='font-bold text-md opacity-80'>PRICE DETAILS</p>
            <div className='font-semibold text-gray-700 flex justify-between pt-2'>
              <p>Price ({order?.order?.createdOrder?.totalItem} item)</p>
              <p>₹{order?.order?.createdOrder?.totalPrice}</p>

            </div>
            <div className='flex justify-between font-semibold pt-1'>
              <p className='text-gray-700'>Discount</p>
              <p className='text-green-500'>-₹{order?.order?.createdOrder?.discount}</p>

            </div>
            <div className='flex justify-between font-semibold pt-1'>
              <p className='text-gray-700'>Delivery Charges</p>
              <p className='text-green-500 text-sm'>FREE</p>

            </div>
            <div className='flex justify-between font-semibold pt-1'>
              <p className='text-gray-900'>Total Amount</p>
              <p className='text-green-500'>₹{order?.order?.createdOrder?.totalDiscountedPrice}</p>

            </div>
            <div className='pt-20 flex justify-center items-center'>

            <Button onClick={handleSubmit} className='w-full' sx={{bgcolor:"black",color:"white",px:4,":hover":{
              bgcolor:"rgb(35, 34, 34)"
            }}}>
             PAYMENT
            </Button>
            </div>
           

       </div>

    </div>
    </div>
  )
}

export default OrderSummary
