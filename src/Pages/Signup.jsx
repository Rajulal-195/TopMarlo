import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom';
import axios from "axios"

export default function Signup() {
  const [user, setUser] = useState("")




  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  console.log("user data is ", user)


  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('/api/users/register', user)

      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error.response?.data || error.message));


  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-3 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='block text-gray-700' htmlFor="username">UserName :</label>
              <input type="text" name='username' onChange={handleChange} placeholder='Enter UserName' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>


            <div>
              <label className='block text-gray-700' htmlFor="email">Email :</label>
              <input type="email" name='email' onChange={handleChange} placeholder='Enter Email ' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />

            </div>

            <div>
              <label className='block text-gray-700' htmlFor="password">Password :</label>
              <input type="password" name='password' onChange={handleChange} placeholder='Enter Password' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500  text-white py-2 my-6 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p>Have a Accout ?&emsp;
            <Link className='text-blue-600' to="/login">Login </Link>
          </p>



        </div>
      </div>

      <Footer />
    </>
  )
}
