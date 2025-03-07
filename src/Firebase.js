// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb7xcQsi09evUpUB3qV-5dLaqV_rqoCGc",
  authDomain: "real-stete-demo.firebaseapp.com",
  projectId: "real-stete-demo",
  storageBucket: "real-stete-demo.firebasestorage.app",
  messagingSenderId: "392826853966",
  appId: "1:392826853966:web:1da8dcfd11acc47311011f",
  measurementId: "G-MYFK3DH8G9"
};

// Initialize Firebase

export  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);