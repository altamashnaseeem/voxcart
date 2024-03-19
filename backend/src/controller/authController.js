import {createUser,getAllUsers,getUserByEmail,getUserProfileByToken,findUserById} from "../services/userServices.js"
import {getUserIdFromToken,generateToken} from "../config/jwtProvider.js"
import { createCart } from "../services/cartServices.js"
import bcrypt from "bcryptjs"
export const register=async(req,res)=>{
    
  try{
    
    const user=await createUser(req.body);
  
   
   
    const jwt=generateToken(user._id);
   
    await createCart(user);
    return res.status(200).json({
     
        jwt,
        message:"register successful"
    })
    
  }catch(error){
    throw new Error(error.message)
  }
}

export const login=async(req,res)=>{
    const {password,email}=req.body
  try{
       const user=await getUserByEmail(email);
       if(!user){
        return res.status(404).json({
            message:"user not found"
        })
       }
       const isPasswordValid=await bcrypt.compare(password,user.password);
    
       if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid email or Password"
        })
       }
       const jwt=generateToken(user._id);
       return res.status(200).json({
        jwt,
        message:"login success"
       })
  }catch(err){
    return res.status(500).json({
         error:err.message
    })
    
  }

}