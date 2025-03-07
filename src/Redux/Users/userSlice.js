import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: "user",
    initialState, // ✅ Fixed Spelling
    reducers: { 
        signinStart: (state) => {
            state.loading = true;
        },
        signinSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signinFailer: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { signinStart, signinSuccess, signinFailer } = userSlice.actions;
export default userSlice.reducer;
