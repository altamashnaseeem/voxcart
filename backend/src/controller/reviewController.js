import {createReview, getAllReview,} from "../services/reviewService.js"

export const createReviews=async(req,res)=>{
    const user=req.user;
    try{
     const review=await createReview(req.body,user);
     return res.status(201).json(review)

    }catch(err){
        return res.status(500).json({
             error:err.message
        })
    }
}

export const getAllreviews=async(req,res)=>{
    const productId=req.params.productId;
    const user=req.user;
    try{
     const reviews=await getAllReview(productId);
     return res.status(201).json(reviews)

    }catch(err){
        return res.status(500).json({
             error:err.message
        })
    }
}



