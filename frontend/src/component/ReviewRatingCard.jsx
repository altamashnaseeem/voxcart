import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ReviewRatingCard = () => {
  return (
   <Grid container
    spacing={4} gap={2}
   >
    <Grid item xs={1}>
        <Box>
          <Avatar  sx={{width:45,height:45,bgcolor:"black", color:"#ffe900"}}>A</Avatar>
        </Box>
     
    </Grid>
   <Grid item xs={9}>
    <div className='space-y-2'>
      <div>
        <p className='font-semibold text-lg'>Altamash</p>
        <p className='opacity-70 text-sm'>feb 3,2023</p>
      </div>

    </div>
    
    <Rating value={3} name="half-rating" readOnly>
        
    </Rating>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sint, </p>
    

   </Grid>


     
    </Grid>
  )
}

export default ReviewRatingCard
