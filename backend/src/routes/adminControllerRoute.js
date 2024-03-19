
import express from "express"
import {cancelOrderss, confirmOrderss, deleteOrderss, deliverOrderss, getAllOrderss, shippOrderss} from "../controller/adminOrderController.js"
import {authenticate} from "../middleware/authenticate.js"
const router=express.Router()
router.get("/",authenticate,getAllOrderss)
router.put("/:orderId/confirmed",authenticate,confirmOrderss)
router.put("/:orderId/ship",authenticate,shippOrderss)
router.put("/:orderId/deliver",authenticate,deliverOrderss)
router.put("/:orderId/cancel",authenticate,cancelOrderss)
router.put("/:orderId/delete",authenticate,deleteOrderss)

export default router;
