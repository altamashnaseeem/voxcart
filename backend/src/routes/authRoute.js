import express from "express"
const router=express.Router();
import {login,register} from "../controller/authController.js"

router.post("/signup",register);
router.post("/signin",login);

export default router;
