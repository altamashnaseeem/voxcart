import {findUserCart} from "../services/cartServices.js"
import Address from "../models/addressModel.js"
import Order from "../models/orderModel.js"
import OrderItem from "../models/orderItems.js"
export const createOrder=async(user,shippAddress)=>{
   
  
    
   try {
    let address;
    if(shippAddress._id){
      
        let existAddress=await Address.findById(shippAddress._id);
        address=existAddress;

    }else{
        
      
        address=new Address(shippAddress);
       
        
         
        address.user=user;
        
        await address.save();
     
       
        user.addresses.push(address);
         
       
        await user.save();
    

    }
    
    const cart=await findUserCart(user._id);
    
    
    const orderItems=[];
    
    for(const item of cart.cartItems){
       
        const orderItem=new OrderItem({
            price:item.price,
            product:item.product,
            quantity:item.quantity,
            size:item.size,
            userId:item.userId,
            discountedPrice:item.discountedPrice,


        });
     
        const createdOrderItem=await orderItem.save()
      
      
        orderItems.push(createdOrderItem)
     
   

    }
   
    
    
    const createdOrder=new Order({
           user,
           orderItems,
           totalPrice:cart.totalPrice,
           totalDiscountedPrice:cart.totalDiscountPrice,
           discount:cart.discount,
           totalItem:cart.totalItem,
           shippAddress:address,

    })
    
   
    const savedOrder=await createdOrder.save()
   
    return savedOrder;
   } catch (error) {
     return res.status(500).json({
        message:error.message
     })
   }
   

}

export const placeOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="PLACED";
    order.paymentDetails.status="COMPLETED";
    return await order.save()
}

export const confirmOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="CONFIRMED";
    order.paymentDetails.status="COMPLETED";
    return await order.save()

}

export const shipOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="SHIPPED";
    
    return await order.save()

}
export const deliverOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="DELIVERED";
    return await order.save()

}


export const cancelOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="CANCELLED";
    return await order.save()

}
export const findOrderById=async(orderId)=>{
    
    const order=await Order.findById(orderId)
    .populate("user")
    .populate({path:"orderItems",populate:{path:"product"}})
    .populate("shippAddress")
   
    return order;


}

export const usersOrderHistory=async(userId)=>{
    try{
        const orders=await Order.find({user:userId,orderStatus:"PLACED"})
        .populate({path:"orderItems",populate:{path:"product"}}).lean();
        return orders;
    }catch(error){
        throw new Error(error.message)
    }
}

export const getAllOrders=async()=>{
    return await Order.find()
    .populate({path:"orderItems",populate:{path:"product"}}).lean();

}


export const deleteOrder=async(orderId)=>{
    const order=await findOrderById(orderId);

    await Order.findByIdAndDelete(order._id);

}

 
