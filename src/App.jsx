import React, { Profiler } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Navbar from './Component/Navbar'


export default function App() {
    return <>
        <BrowserRouter>
            <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </>

}
