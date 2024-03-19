
import {createOrder, getAllOrders, deleteOrder,usersOrderHistory,findOrderById,cancelOrder,placeOrder,confirmOrder,shipOrder,deliverOrder} from "../services/orderServices.js"

export const getAllOrderss=async(req,res)=>{
    try{
          const orders=await getAllOrders();
        return  res.status(200).json({
            orders
          })

    }catch(error){
      return res.status(500).json({error:error.message})
    }
}


export const confirmOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
          const orders=await confirmOrder(orderId);


         return  res.status(200).json({
            orders
          })

    }catch(error){
      return res.status(500).json({error:error.message})
    }
}

export const shippOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
          const orders=await shipOrder(orderId);


         return  res.status(200).json({
            orders
          })

    }catch(error){
      return res.status(500).json({error:error.message})
    }
}

export const deliverOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
          const orders=await deliverOrder(orderId);


         return  res.status(200).json({
            orders
          })

    }catch(error){
      return res.status(500).json({error:error.message})
    }
}

export const cancelOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
          const orders=await cancelOrder(orderId);


         return  res.status(200).json({
            orders
          })

    }catch(error){
      return res.status(500).json({error:error.message})
    }
}

export const deleteOrderss=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
          const orders=await deleteOrder(orderId);


         return  res.status(200).json({
            orders
          })

    }catch(error){
      return res.status(500).json({error:error.message})
    }
}