import express from "express"
const router=express.Router()

import { createReviews, getAllreviews } from "../controller/reviewController.js"
import  {authenticate}  from "../middleware/authenticate.js"

router.post("/create",authenticate,createReviews)
router.get("/product/:productId",authenticate,getAllreviews)


export default router;
