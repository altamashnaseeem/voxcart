import {createOrder,findOrderById, usersOrderHistory} from "../services/orderServices.js"

export const createOrders=async(req,res)=>{
   
    const user=await req.user;
     
    try{
  let createdOrder=await createOrder(user,req.body)
  
  
   
  return res.status(200).json(
    createdOrder
  )
    }catch(err){
        return res.status(500).json({
            error:err.message
        })
    }
}

export const findOrdersById=async(req,res)=>{
    const user=await req.user;
    try{
        
        let createdOrder=await findOrderById(req.params.id);
       
       
       
        return res.status(201).json({
            createdOrder
        })
     
    }catch(err){
        return res.status(500).json({
            error:err.message
        })
    }
}

export const ordersHistory=async(req,res)=>{
    const user=req.user;
    try{
        let createdOrder=await usersOrderHistory(user._id);
        return res.status(201).json({
            createdOrder
        })
    }catch(err){
        return res.status(500).json({
            error:err.message
        })
    }

}
