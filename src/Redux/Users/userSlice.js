import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/api/auth/signup', userData);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
export const signupwithgoogle = createAsyncThunk('auth/google/auth', async ({ username,email,photo}, { rejectWithValue }) => {
    try {
        const res = await axios.post('http://localhost:1900/api/auth/google/auth', { username,email,photo});
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/api/auth/login', userData);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        error: null,
        loading: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
        // signup with data 
            .addCase(signup.pending, (state) => { state.loading = true; })
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            // signup with google 
            .addCase(signupwithgoogle.pending, (state) => { state.loading = true; })
            .addCase(signupwithgoogle.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(signupwithgoogle.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            // Log out 
            .addCase(login.pending, (state) => { state.loading = true; })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
