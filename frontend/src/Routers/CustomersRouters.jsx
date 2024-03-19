import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Products from "../pages/Products"
import ProductDetail from '../pages/ProductDetail'
import Checkout from '../pages/Checkout'
import OrderDetails from '../pages/OrderDetails'
import OrdersPage from '../pages/OrdersPage'
import PaymentSuccess from "../pages/Payment"
import LoginForm from '../customer/Auth/LoginForm'
const CustomersRouters = () => {
  return (
    <div>
      

      <Routes>
        
      <Route path='/login' element={<Home/>}></Route>
      <Route path='/register' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/:levelOne/:levelTwo/:levelThree' element={<Products/>}></Route>
      <Route path='/product/:productId' element={<ProductDetail/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/account/order' element={<OrdersPage/>}></Route>
      <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
      <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>
      </Routes>
    </div>
  )
}

export default CustomersRouters
