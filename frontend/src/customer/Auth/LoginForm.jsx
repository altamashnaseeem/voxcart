import React, { useEffect } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useNavigate,useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getUser, login } from "../../state/Auth/Action";
const LoginForm = () => {
  const jwt=localStorage.getItem('jwt')
  const dispatch=useDispatch()
  const location=useLocation()

  const {auth}=useSelector(store=>store)
  const navigate=useNavigate()

//   useEffect(()=>{
//     if(jwt){
//        dispatch(getUser(jwt))
//     }
// },[jwt,auth.jwt])

  const handleSubmit = (e) => {
   
    e.preventDefault()
    const data=new FormData(e.currentTarget)
         const userData={
        
            email:data.get("email"),
            password:data.get("password")


         }
         dispatch(login(userData))

     


  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
       
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
             Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex space-x-0.5 items-center justify-center pt-1">
            <p>if you don't have an account ?</p>
            <Button onClick={()=>navigate("/register")} >Register</Button>
        </div>
    </div>
  );
};

export default LoginForm;
