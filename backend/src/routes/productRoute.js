import express from "express"
const router=express.Router()

import { findProductsById, getAllsProducts } from "../controller/productController.js"
import  {authenticate}  from "../middleware/authenticate.js"

router.get("/",authenticate,getAllsProducts)
router.get("/id/:id",authenticate,findProductsById)


export default router;
