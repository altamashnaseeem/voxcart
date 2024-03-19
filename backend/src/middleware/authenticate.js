
import {getUserIdFromToken} from "../config/jwtProvider.js"
import { findUserById } from "../services/userServices.js"
export const authenticate=async(req,res,next)=>{
 // bearer token ...
 try{
    const token=req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(404).json({error:"token not found"})
    }
    const userId=await getUserIdFromToken(token)
   
    const user=await findUserById(userId)
    
    req.user=user;





 }  catch(error){
    
    return res.status(500).json({error:error.message})
 } 

 next();
 

}

















