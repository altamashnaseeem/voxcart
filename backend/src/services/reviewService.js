import Review from "../models/reviewModel.js"
import {createMultipleProduct,getAllProducts,findProductById,updateProduct,deleteProduct,createProduct} from "../services/productService.js"


export const createReview=async(reqData,user)=>{
    const product=await findProductById(reqData.productId)

    const review=new Review({
        user:user._id,
        product:product._id,
        review:reqData.review,
        createdAt:new Date(),

    })

    await product.save();
    return await review.save();


}


export const getAllReview=async(productId)=>{
    const product=await findProductById(reqData.productId)
    return await Review.find({product:productId}).populate("user")
}

