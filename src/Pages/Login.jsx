import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { signinStart, signinSuccess, signinFailer } from '../Redux/Users/userSlice';
import OAuth from '../Component/OAuth';

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" }); 
  const { error, loading } = useSelector((state) => state.user); 
  const dispatch = useDispatch();

  console.log("User data", user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signinStart());

    try {
      const response = fetch('http://localhost:1900/api/auth/login', user);

        console.log('User logged in:', response.data);
        dispatch(signinSuccess(response.data));
    } catch (err) {
        console.error("Login failed:", err.response?.data?.message || err.message);
        dispatch(signinFailer(err.response?.data?.message || "Login failed"));
    }
};

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96"> 
          <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700" htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-1 my-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Log In'}
            </button>

            <OAuth/>
          </form>

          <p className="text-center">
            Don't have an account?
            <Link className="text-blue-600" to="/signup"> Sign Up</Link>
          </p>

          {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}
