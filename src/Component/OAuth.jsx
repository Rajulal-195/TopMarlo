import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase';
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../Redux/Users/userSlice';

export default function OAuth() {

  const dispatch = useDispatch();

  const handlegoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();  // Corrected this line
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider); // Ensure correct order
      console.log("google auth data", result);
      const res = await fetch("http://localhost:1900/api/auth/google", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ username: result.user.displayName, email: result.user.email, photo: result.user.photoURL })
      })
      const data = await res.json();
      // console.log(data)
      dispatch(signinSuccess(data))


    } catch (error) {
      console.log("could not signup with google", error);
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
