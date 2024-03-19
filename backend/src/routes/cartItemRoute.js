import express from "express"
const router=express.Router()

import { removeCartItems, updateCartItems } from "../controller/cartItem.Controller.js"
import  {authenticate}  from "../middleware/authenticate.js"

router.put("/:id",authenticate,updateCartItems)
router.delete("/:id",authenticate,removeCartItems)

export default router;
