import CartItem from "../models/cartItemModel.js";
import Cart from "../models/cartModel.js";
import { findUserById } from "./userServices.js";
// import {findCartItemById} from "../services/cartServices.js"

export const findCartItemById=async(cartItemId)=>{
    const cartItem=await CartItem.findById(cartItemId)
    if(cartItem){
        return cartItem
    }else{
        throw new Error("cartItem not found with id:",cartItemId)

    }

}



export const updateCartItem=async(userId,cartItemId,cartItemData)=>{
   
  try{
    const item= await (await findCartItemById(cartItemId)).populate("product")

    if(!item){
        throw new Error("cart item not found",cartItemId)
    }

    const user=await findUserById(item.userId );
   

    if(!user){
        throw new Error("user not found :",userId)
    }
   
    if(user._id.toString()===userId.toString()){
    item.quantity=cartItemData.quantity;
    item.price=item.quantity*item.product.price;
    item.discountedPrice=item.quantity*item.product.discountedPrice;
    const updatedCartItem=await item.save();
    return updatedCartItem;

    }else{
        throw new Error("you can not update this cart item");

    }
  }catch(error){
    throw new Error(error.message)
  }
}
export const removeCartItem=async(userId,cartItemId)=>{
  //  const cart=await Cart.find({user:userId})
  //   const cartItem=await CartItem.findById(cartItemId);  
  //    const user=await findUserById(userId);

  //    if(user._id.toString()===cartItem.userId.toString()){
  //       await CartItem.findByIdAndDelete(cartItemId);
       
  //       if(cartItem){
  //         cart.cartItems.filter(item=>item!=cartItem)
  //         await cart.save()
  //         return cartItem
  //     }else{
  //         throw new Error("cart item not found with id: ",cartItemId)
  //     }

  //    }
  try {
    const cart = await Cart.findOne({ user: userId });
    const cartItem = await CartItem.findById(cartItemId);
    const user = await findUserById(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
        await CartItem.findByIdAndDelete(cartItemId);

        if (cartItem) {
            // Filter out the cartItem from cart.cartItems
            
            cart.cartItems = cart.cartItems.filter(item => item != cartItemId);
            await  cart.populate("cartItems")
            let totalPrice=0;
            let totalDiscountedPrice=0;
            let totalItem=0;
            for (let cartItem of cart.cartItems){
              totalPrice+=cartItem.price;
              totalDiscountedPrice+=cartItem.discountedPrice;
              totalItem+=cartItem.quantity;
     
            }
            cart.totalDiscountPrice=totalDiscountedPrice
            cart.totalPrice=totalPrice;
            cart.totalItem=totalItem;
            cart.discount=totalPrice-totalDiscountedPrice;
            
            
            await cart.save();

            return cartItem;
        } else {
            throw new Error("Cart item not found with id: " + cartItemId);
        }
    }
} catch (error) {
    throw new Error("Error removing cart item: " + error.message);
}
      
    
}


