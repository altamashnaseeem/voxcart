import express from "express"
import {authenticate} from "../middleware/authenticate.js"

import {createPaymentLinks,updatePaymentInformations} from "../controller/paymentController.js"

const router=express.Router()

router.post("/:id",authenticate,createPaymentLinks)
router.get("/",authenticate,updatePaymentInformations)

export default router;

