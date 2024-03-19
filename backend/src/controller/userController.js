import {getAllUsers,getUserByEmail,getUserProfileByToken} from "../services/userServices.js"
export const getUserProfile=async(req,res)=>{
  try{
    
    const jwt=req.headers.authorization?.split(" ")[1];
    
  if(!jwt){
    return res.status(404).json({
          message:"token not found"
    })
  }
    
  const user=await (await getUserProfileByToken(jwt)).populate("addresses")
  
  return res.status(200).json({
    user
  })
  }catch(err)   {
     return res.status(500).json({
        error:err.message,
       
     })
  }
}

export const getAllUser=async(req,res)=>{
    try{
       const users=await getAllUsers();
       return res.status(200).json({
        users
       })
    }catch(errr){
        return res.status(500).json({
            error:errr.message
        })
    }
}

