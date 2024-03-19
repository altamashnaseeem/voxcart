import {createRating,getProductRating} from "../services/ratingService.js"

export const createRatings=async(req,res)=>{
    const user=req.user;
    try{
     const rating=await createRating(req.body,user);
     return res.status(201).json(rating)

    }catch(error){
        return res.status(500).json({error:error.message})
    }
}

export const getProductRatings=async(req,res)=>{
    const productId=req.params.productId;
    const user=req.user;
    try{
        const ratings=await getProductRating(productId);
        return res.status(201).json(ratings);
        
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}