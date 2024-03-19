
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Footer from './component/Footer'
import Products from './pages/Products'
import Navbar from './component/Navbar'
import ProductDetail from './pages/ProductDetail'
import Productcard from './component/Productcard'
import Data from "./Data"
import Cart from './pages/Cart'
import CartItem from './component/CartItem'
import Checkout from './pages/Checkout'
import OrdersPage from './pages/OrdersPage'
import OrderDetails from './pages/OrderDetails'
import CustomersRouters from './Routers/CustomersRouters'
import {Routes,Route} from "react-router-dom"

function App() {
  

  return (
    <>
     <Navbar/>
    <Routes>
      <Route path="/*" element={<CustomersRouters/>}></Route>
    </Routes>

    
   
     {/* <Products/> */}
     
     {/* <ProductDetail></ProductDetail> */}
  
     {/* <CartItem/> */}
     {/* <Checkout/> */}
     {/* <OrdersPage/> */}
     {/* <OrderDetails/> */}
      <Footer/>
    </>
  )
}

export default App
