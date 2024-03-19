import express from "express"
const router=express.Router()

import { createMultipleProducts, createProducts, deleteProducts, updateProducts } from "../controller/productController.js"
import  {authenticate}  from "../middleware/authenticate.js"

router.post("/",authenticate,createProducts)
router.post("/creates",authenticate,createMultipleProducts)
router.delete("/:id",authenticate,deleteProducts)
router.put("/:id",authenticate,updateProducts)



export default router;
