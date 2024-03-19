import express from "express"
const router=express.Router()

import { createOrders, findOrdersById, ordersHistory } from "../controller/orderController.js"
import  {authenticate}  from "../middleware/authenticate.js"
router.post("/",authenticate,createOrders)
router.get("/user",authenticate,ordersHistory)
router.get("/:id",authenticate,findOrdersById)




export default router;
