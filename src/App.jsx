import {BrowserRouter, Routes, Route } from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Dashboard from "./Components/Admin/Dashboard"
import Product from './Components/Admin/Product'
import Order from './Components/Admin/Order'
import Payments from './Components/Admin/Payments'
import Settings from './Components/Admin/Settings'
import Customers from './Components/Admin/Customers'
import NotFound from './Components/NotFound'
import Home from "./Components/Home"
import Products from "./Components/Products"
import Category from "./Components/Category"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Contact from "./Components/Contact"



 const App = () => {
  return (
     <>
      <BrowserRouter>    
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/admin">
             <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="products" element={<Product/>}/>
              <Route path="orders" element={<Order/>} />
              <Route path="payments" element={<Payments/>}/>
              <Route path="settings" element={<Settings/>} />
              <Route path="customers" element={<Customers/>} />
            </Route>
            <Route path="*" element={<NotFound />}/>
       </Routes>
      </BrowserRouter>
     </>
  )

 }

 export default App;
