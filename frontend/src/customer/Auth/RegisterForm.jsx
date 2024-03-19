import React, { useEffect } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import {useNavigate} from "react-router-dom"
import { useDispatch,useSelector} from "react-redux";
import {getUser, register} from "./../../state/Auth/Action"

const RegisterForm = () => {
 
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt")
    const {auth}=useSelector(store=>store)
    
   useEffect(()=>{
        if(jwt){
          dispatch(getUser(jwt))
        }
   },[jwt,auth.jwt])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data=new FormData(e.currentTarget)
         const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")


         }
 
      
       dispatch(register(userData))

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              className="  w-full "
              type="submit"
              sx={{
                color: "white",
                bgcolor: "black",
                ":hover": { bgcolor: "rgb(33, 28, 28)" },
                fontSize: "md",
                padding: "0.8rem",
                fontFamily: "verdana",
              }}
            >
              Register
            </Button>
          </Grid>

        </Grid>
      </form>
      
        <div className="flex space-x-0.5 items-center justify-center pt-1">
            <p>if you have already account ?</p>
            <Button onClick={()=>navigate("/login")} >Login</Button>
        </div>
      
    </div>
  );
};

export default RegisterForm;
