import {razorpay} from "../config/razorPayClient.js"
import {findOrderById} from "../services/orderServices.js"


export const createPaymentLink=async(orderId)=>{
     
   try {
        const order=await findOrderById(orderId)
         
    
        const paymentLinkRequest={
            amount:order.totalPrice*100,
            currency:"INR",
            customer:{
                name:order.user.firstName+" "+order.user.lastName,
                contact:'7909989899',
                email:order.user.email
            },
            notify:{
                sms:true,
                email:true,

            },
            reminder_enable:true,
            callback_url:`http://localhost:5173/payment/${orderId}`,
            callback_method:'get'

                };
            
                const paymentLink= await razorpay.paymentLink.create(paymentLinkRequest)
                    
            const paymentLinkId=paymentLink.id;
          
            const payment_link_url=paymentLink.short_url;
              const resData={
                paymentLinkId,
                payment_link_url
              }
           console.log("resData",resData)
              return resData
   } catch (error) {
       throw new Error(error.message)
   }
}

export const updatePaymentInformation=async(reqData)=>{
    const paymentId=reqData.payment_id;
    const orderId=reqData.order_id;

    try {
          const order=await findOrderById(orderId);
          const payment=await razorpay.payments.fetch(paymentId)
          if(payment.status=="captured"){
            order.paymentDetails.paymentId=paymentId,
            order.paymentDetails.status="COMPLETED",
            order.orderStatus="PLACED",

            await order.save()


          }
   const resData={message:"your order is placed",success:true}
   return resData;

    } catch (error) {
         throw new Error(error.message)
    }
}