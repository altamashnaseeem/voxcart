
import {updateCartItem,removeCartItem} from "../services/cartItemServices.js"
export const updateCartItems=async(req,res)=>{
    const user=await req.user;
    try{
     
        const updatedCartItem=await updateCartItem(user._id,req.params.id,req.body);
      
        return res.status(200).json(updatedCartItem)


    }catch(err){
        return res.status(500).json({
            error:err.message
        })
    }
}

export const removeCartItems=async(req,res)=>{
    const user=req.user;
    try{
        await removeCartItem(user._id,req.params.id);
        return res.status(200).json({
            message:"cart item removed successfully"
        })
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}



 

