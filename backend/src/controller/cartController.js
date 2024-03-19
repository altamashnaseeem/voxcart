import {addToCart,findUserCart} from "../services/cartServices.js"

 export const findUsersCart=async(req,res)=>{
    const user=req.user;
   

    try{
       const cart=await findUserCart(user._id);
       
       return res.status(200).json(
        cart
       )
    }catch(err){
       return res.status(500).json({
        error:err.message
       })
    }

}

export const addItemToCart=async(req,res)=>{
   
    const user= await req.user;
      
   // console.log(user)
     try{
   
      const cartItem=await addToCart(user._id,req.body);
     
      return res.status(200).json({
        cartItem
      })

     }catch(err){
      
        return res.status(500).json({
            error:err.message
        })
     }
}