import express from "express";
import {getAllUser,getUserProfile} from "../controller/userController.js"
const router=express.Router();

router.get("/profile",getUserProfile);
router.get("/",getAllUser)

export default router;
