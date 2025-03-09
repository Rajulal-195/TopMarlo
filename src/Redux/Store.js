import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Users/userSlice'
import productReducer from "./Product/ProductSlice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer
    }
});

export default store;