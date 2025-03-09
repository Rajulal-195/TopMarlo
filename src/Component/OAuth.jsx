import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import {  signupwithgoogle } from '../Redux/Users/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function OAuth() {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { error, loading } = useSelector(state => state.auth);
  
  const handlegoogleAuth = async () => {
    try {
      dispatch(signinStart)
      const provider = new GoogleAuthProvider();  // Corrected this line
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider); // Ensure correct order
      console.log("google auth data", result);
      
      
      dispatch(signupwithgoogle({ username: result.user.displayName, email: result.user.email, photo: result.user.photoURL }))

      // const res = await fetch("http://localhost:1900/api/auth/google/auth", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   credentials: "include",
      //   body: JSON.stringify({
      //     username: result.user.displayName,
      //     email: result.user.email,
      //     photo: result.user.photoURL
      //   })
      // });
      const data = await res.json();
      toast.success("Sign in with google Success...");
      // dispatch(signinSuccess(data));
      navigate("/")
    } catch (error) {
      // dispatch(signinFailer(error))
      toast.error("could not signup with google", error);
    }
  }

  return (
    <>
      <button
        className='w-full bg-red-500 text-white p-1 rounded-lg hover:bg-red-700 transition disabled:opacity-50'
        onClick={handlegoogleAuth}
      >
        Sign up with Google
      </button>
    </>
  );
}
