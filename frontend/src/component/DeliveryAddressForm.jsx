import React from 'react'
import {Grid,Button, TextField,Box} from "@mui/material"
import AddressCard from './AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../state/Order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = () => {
  const {auth}=useSelector(store=>store)
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
        e.preventDefault()
        const data=new FormData(e.currentTarget)
        const address={
          firstName:data.get("firstName"),
          lastName:data.get("lastName"),
          streetAddress:data.get("address"),
          city:data.get("city"),
          state:data.get("state"),
          zipCode:data.get("code"),
          mobile:data.get("phone")
        }
      const reqData={address,navigate}
      dispatch(createOrder(reqData))
        
  }



  return (
    <div className='mt-10'>
   <Grid container spacing={4} >
    
    <Grid xs={12} lg={5} className='border  rounded-md shadow-md h-[30rem] overflow-y-scroll' >
      
      <div className='p-5 py-7 border-b cursor-pointer'>
        {auth.user?.user?.addresses?.map(item=><AddressCard address={item}/>)}
        <Button sx={{mt:2,bgcolor:"rgb(0, 0, 0)",color:"white",":hover":{bgcolor:"rgb(63, 63, 63)"}}} variant='contained'>Deliver here</Button>
      </div>
    </Grid>
    <Grid item xs={12} lg={7}> 
         <Box className="border rounded-s-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
               <TextField 
                 required
                 id="firstName"
                 name="firstName"
                 label="First Name"
                 fullWidth
                 autoComplete="given-name"
               
               />
              </Grid>
              <Grid item xs={12} sm={6}>
               <TextField 
                 required
                 id="lastName"
                 name="lastName"
                 label="Last Name"
                 fullWidth
                 autoComplete="given-name"
               
               />
              </Grid>
              <Grid item xs={12} >
               <TextField 
                 required
                 id="address"
                 name="address"
                 label="Address"
                 multiline
                 rows={4}
                 fullWidth
                 autoComplete="given-name"
               
               />
              </Grid>
              <Grid item xs={12} sm={6}>
               <TextField 
                 required
                 id="city"
                 name="city"
                 label="City"
                 fullWidth
                 autoComplete="given-name"
               
               />
              </Grid>
              <Grid item xs={12} sm={6}>
               <TextField 
                 required
                 id="state"
                 name="state"
                 label="State/Province/Region"
                 fullWidth
                 autoComplete="given-name"
               
               />
              </Grid>
              <Grid item xs={12} sm={6}>
               <TextField 
                 required
                 id="code"
                 name="code"
                 label="Zip / Postal Code"
                 fullWidth
                 autoComplete="given-name"
               
               />
              </Grid>
              <Grid item xs={12} sm={6}>
               <TextField 
                 required
                 id="phone"
                 name="phone"
                 label="Phone Number"
                 fullWidth
                 autoComplete="given-name"
               
               />
              </Grid>
              <Grid item xs={12} sm={6}>
              <Button sx={{mt:2,bgcolor:"rgb(0, 0, 0)",color:"white",":hover":{bgcolor:"rgb(63, 63, 63)"}}} variant='contained' type='submit'>Deliver here</Button>
              </Grid>
            </Grid>
          </form>
         </Box>

    </Grid>
   </Grid>
    </div>
  )
}

export default DeliveryAddressForm
