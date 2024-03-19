import {createProduct,deleteProduct,updateProduct,findProductById,getAllProducts,createMultipleProduct} from "../services/productService.js"
export const createProducts=async(req,res)=>{
    try{
         const product=await createProduct(req.body);
         return res.status(201).json({product})

    }catch(err){
        return res.status(500).json({error:err.message})    
    }
}

export const deleteProducts=async(req,res)=>{
    const productId=req.params.id;

    try{
         const product=await deleteProduct(productId);
         return res.status(201).json({product})

    }catch(err){
        return res.status(500).json({error:err.message})    
    }
}


export const updateProducts=async(req,res)=>{
    const productId=req.params.id;
    try{
         const product=await updateProduct(productId,req.body);
         return res.status(201).json({product})

    }catch(err){
        return res.status(500).json({error:err.message})    
    }
}


export const findProductsById=async(req,res)=>{
    const productId=req.params.id;
   
    try{
         const product=await findProductById(productId);
         return res.status(201).json(product)

    }catch(err){
        return res.status(500).json({error:err.message})    
    }
}

export const getAllsProducts=async(req,res)=>{
    
    const productId=req.params.id;
     
   
    try{
      
        
         const products=await getAllProducts(req.query);
        //  console.log("products",products)
         
         return res.status(200).json({products})

    }catch(err){
        
       
        return res.status(500).json({error:err})    
    }
}


export const createMultipleProducts=async(req,res)=>{
    
    
    try{
         const product=await createMultipleProduct(req.body);
         return res.status(201).json({message:"products created Successfully"})

    }catch(err){
        return res.status(500).json({error:err.message})    
    }
}

