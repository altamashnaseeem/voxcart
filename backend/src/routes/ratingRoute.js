import express from "express"
const router=express.Router()

import { createRatings, getProductRatings } from "../controller/ratingController.js"
import  {authenticate}  from "../middleware/authenticate.js"

router.post("/create",authenticate,createRatings)
router.put("/product/:productId",authenticate,getProductRatings)


export default router;
