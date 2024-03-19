import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
    name:{
       type:String,
       maxlength:50,
        required:true,

    },
    
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
        
    },  
     level:{
        type:Number,
        required:true,
        
        
    },
       
   
})

const Category=mongoose.model("categories",categorySchema)

export default Category;

