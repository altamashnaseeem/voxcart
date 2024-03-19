import {createPaymentLink,updatePaymentInformation} from "../services/paymentService.js"

export const createPaymentLinks=async(req,res)=>{
     
    try {
         const paymentLnk=await createPaymentLink(req.params.id);
         
          return res.status(200).json(paymentLnk)
    } catch (error) {
         return res.status(500).json(error.message) 
         
            
          
    }
}

export const updatePaymentInformations=async(req,res)=>{
    try {
        await updatePaymentInformation(req.query);
          return res.status(200).json({message:"payment information update",success:true})
          
    } catch (error) {
         return res.status(500).json(error.message) 
    }
}