import React, { Profiler } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Navbar from './Component/Navbar'
import AddProduct from './Admin/Product/AddProduct'
import DeleteProduct from './Admin/Product/DeleteProduct'
import Update from './Admin/Product/Update'
import ProductList from './Admin/Product/ProductList'


export default function App() {
    return <>
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path='/addproduct' element={<AddProduct />} />
                <Route path='/deleteproduct' element={<DeleteProduct />} />

                <Route path='/updateproduct' element={<Update />} />
                <Route path='/product' element={<ProductList />} />

            </Routes>
        </BrowserRouter>
    </>

}
