import React from 'react'
import {Grid} from "@mui/material"
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
   const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-4 shadow-lg hover:shadow-2xl'>  
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
           <Grid item xs={6}>
            <div className='flex cursor-pointer'>
            <div className='w-[7rem] h-[7rem] '>
               <img src="https://images.bewakoof.com/t1080/men-s-blue-ramen-jersey-graphic-printed-oversized-t-shirt-603166-1697543059-1.jpg" alt=""
                className='w-full h-full object-cover object-top'
               />
             </div>
             <div className='ml-5 space-y-2'>
                <p className=''>Men's Red Breathing Rockstar Typography Oversized T-shirt</p>
                 <p className='opacity-50 text-xs font-semibold '>Size M</p>
                 <p className='opacity-50 text-xs font-semibold '>Color:Black</p>
             </div>


                </div>   
           

           </Grid>
           <Grid item xs={2}>
              <p className='flex justify-center'>₹1099</p>
           </Grid>
           <Grid item xs={4}  >
           
            {true &&  <div>
               <p className=" flex justify-center">
                <AdjustIcon sx={{color:"rgb(37, 130, 19)",width:"1rem",height:"1rem", marginRight:"3px",mt:"4px"}}/><span>Delivery On March 03</span>
           </p>
             <p className='text-sm flex justify-center'>your item has been delivered</p>
            </div>
        
           
           }
            {false && <p>
                <AdjustIcon/><span>Expected Delivery On Mar 03</span>
                </p>}
                
           </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard
