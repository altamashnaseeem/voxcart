import React from "react";
import AddressCard from "./../component/AddressCard";
import OrderTracker from "../component/OrderTracker";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Grid } from "@mui/material";

const OrderDetails = () => {
  return (
    <div className="relative lg:px-20 px-5 mt-12">
     <div className="shadow-lg border rounded-lg px-10 py-4">
        <h1 className="font-bold text-xl pb-7">Delivery Address</h1>
        <AddressCard />
     </div>
     <div className="py-10 shadow-lg border rounded-lg mt-5">
      <OrderTracker activeStep={3} />
     </div>
     <Grid container className="space-y-4 mt-2">
     {[1,1,1,1,1].map((item)=> <Grid item container className="shadow-xl rounded-md p-5 border"
        sx={{alignItems:"center",justifyContent:"space-between"}}
       >
         <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img src="https://images.bewakoof.com/t1080/men-s-blue-ramen-jersey-graphic-printed-oversized-t-shirt-603166-1697543059-1.jpg" alt="" 
                className="w-[7rem] h-[8rem] object-cover object-top"
                />
                <div className="space-y-2 pt-2">
                  <p className="font-semibold text-lg">Men's Red Breathing Rockstar Typography Oversized T-shirt</p>
                  <p><span className="space-x-5 opacity-50 text-xs font-semibold">Color:pink</span><span className="space-x-5 opacity-50 text-xs font-semibold pl-4" >Size: M</span></p>
                  <p>Seller linaria</p>
                  <p className="text-md font-semibold text-md">₹1099</p>
                </div>
              </div>
         </Grid>
          
         <Grid item>
           <Box sx={{color:"black"}}>
                 <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 "></StarBorderIcon>
                 <span>Rate & Review Product</span>
           </Box>
         </Grid>

       </Grid>
)}
     </Grid>
      
    
      
    </div>
  );
};

export default OrderDetails;
