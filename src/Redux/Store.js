import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Users/userSlice.js";

const store = configureStore({
    reducer: { user: userReducer },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({

    //         serializabeCheck: false
    //     })
});

export default store; 
