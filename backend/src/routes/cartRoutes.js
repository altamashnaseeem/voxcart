import express from "express"
const router=express.Router()
import {addItemToCart, findUsersCart} from "../controller/cartController.js"
import {authenticate} from "../middleware/authenticate.js"

router.get("/",authenticate,findUsersCart);
router.put("/add",authenticate,addItemToCart)

export default router;
