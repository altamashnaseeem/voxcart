import express from "express"
import authRouters from "./routes/authRoute.js"
import userRouters from "./routes/userRoute.js"

import cors from "cors"
const app=express()
app.use(express.json())
app.use(cors())


app.use("/auth",authRouters)
app.use("/api/users",userRouters);
import productRouter from "./routes/productRoute.js"
app.use("/api/products",productRouter)

import adminProductRouter from "./routes/adminProductRoute.js" 
app.use("/api/admin/products",adminProductRouter)

import cartRouter from "./routes/cartRoutes.js" 
app.use("/api/cart",cartRouter)

import cartItemRouter from "./routes/cartItemRoute.js" 
app.use("/api/cart_items",cartItemRouter)

import orderRouter from "./routes/orderRoute.js" 
app.use("/api/orders",orderRouter)

import reviewRouter from "./routes/reviewRoute.js" 
app.use("/api/reviews",reviewRouter)

import ratingRouter from "./routes/ratingRoute.js" 
app.use("/api/ratings",ratingRouter)


import adminOrderRouter from "./routes/adminControllerRoute.js" 
app.use("/api/admin/orders",adminOrderRouter)

import paymentRouter from "./routes/paymentRoute.js"
app.use("/api/payments",paymentRouter)


export default app;
