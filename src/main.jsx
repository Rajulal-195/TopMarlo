import react from "react"
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./Redux/Store.js"
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
)
