import React, { useEffect } from 'react'
import {Button, IconButton} from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../state/Cart/Action';
const CartItem = ({item}) => {
 
  const dispatch=useDispatch()
   
   const handleUpdateCartItem=(num)=>{
        const data={data:{quantity:item.quantity+num},cartItemId:item?._id}
         dispatch(updateCartItem(data))
   }
   const handleRemoveItem=()=>{
          dispatch(removeCartItem(item._id))
   }
   
  return (
    <div className='relative p-5 shadow-lg border rounded-md '>
          <div className='flex items-center '>
              <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>

                <img src={item?.product?.imageUrl} alt="" 
                 className='h-full w-full object-cover object-top'
                 />
             
              </div>
               <div className='pl-2'>
                 <p className='text-lg font-semibold'>{item?.product?.title}</p>

                 <p className='opacity-70 text-md'>size {item?.size},{item?.product?.color}</p>
                 <p className='opacity-60 text-sm mt-1'>seller:{item?.product?.brand} </p>
                  <div className='flex space-x-2 pt-3'>
                    <p className='opacity-50 line-through'>₹{item?.price}</p>
                    <p className='font-semibold text-md'>₹{item?.discountedPrice}</p>
                    <p className='text-green-500 font-semibold text-md'>{item?.product?.discountedPercent}% Off</p>

                  </div>
               </div>
               

            </div>    


            <div>
              <div className='flex items-center space-x-4 pt-3'>
                 <IconButton onClick={()=>handleUpdateCartItem(-1) } disabled={item?.quantity<=1} sx={{color:"rgb(45, 43, 43)"}}>
                   <RemoveCircleOutlineIcon/>
                 </IconButton>
                 <span>{item?.quantity}</span>
                 <IconButton onClick={()=>handleUpdateCartItem(1) } sx={{color:"rgb(45, 43, 43)"}}>
                  <AddCircleOutlineIcon/>
                 </IconButton>
                 <Button sx={{color:"red"}} onClick={handleRemoveItem}>
                  Remove
                 </Button>
              </div>
            </div>


    </div>

  )
}

export default CartItem
