import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {Link }from "@mui/material";
import LinkedIn from "@mui/icons-material/LinkedIn"
import Twitter from "@mui/icons-material/Twitter"
import Facebook from "@mui/icons-material/Facebook"
import Instagram from "@mui/icons-material/Instagram"

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10" 
        container
        sx={{ background: "black",color:"white",py:3}}
      >
        <Grid item xs={12} sm={6} md={3} >

          <Link href="#" sx={{textDecoration:"none",color:"white"}}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          </Link>
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
            About
          </Typography>
          </Link>
    
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
             Press
          </Typography>
          </Link>
    
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
         Jobs
          </Typography>
          </Link>
    
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography className="pb-5" >
            Partners
          </Typography>
          </Link>
    
    

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Link href="#" sx={{textDecoration:"none",color:"white"}}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          </Link>
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
            Marketing
          </Typography>
          </Link>
    
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography >
           Analytics
          </Typography>
          </Link>
    
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
             Commerce
          </Typography>
          </Link>
    
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
           Support
          </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Link href="#" sx={{textDecoration:"none",color:"white"}}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          </Link>
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography >
            Guides
          </Typography>
          </Link>
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
            API Status
          </Typography>
          </Link>
          
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <Link href="#" sx={{textDecoration:"none",color:"white"}}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          </Link>
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
            Claim
          </Typography>
          </Link>
    
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
           Privacy
          </Typography>
          </Link>
    
          <Link sx={{textDecoration:"none",color:"gray"}}>
          <Typography  >
            Text
          </Typography>
          </Link>
        </Grid>
         <Grid item xs={12}  sx={{pt:3}}>
                  <Typography variant="body2" align="center">
                    &copy; 2024 My Company.All rights reserved.
                  </Typography>
                  <Typography variant="body2" align="center">
                    Made with love by Me.
                  </Typography>
                  <Typography variant="body2" align="center" sx={{color:"gray"}}>
                    <LinkedIn sx={{mr:1}}/>
                    <Twitter sx={{mr:1}}/>
                    <Facebook sx={{mr:1}}/>
                    <Instagram sx={{mr:1}}/>
                  </Typography>
         </Grid>


      </Grid>
    </div>
  );
};

export default Footer;
