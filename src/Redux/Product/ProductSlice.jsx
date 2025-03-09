import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET all products
export const getProducts = createAsyncThunk('product/getProducts', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('/api/products');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// ADD a product
export const addProduct = createAsyncThunk('product/addProduct', async (productData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/api/products', productData);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// UPDATE a product
export const updateProduct = createAsyncThunk('product/updateProduct', async ({ id, productData }, { rejectWithValue }) => {
    try {
        const res = await axios.put(`/api/products/${id}`, productData);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// DELETE a product
export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`/api/products/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Product Slice
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // GET products
            .addCase(getProducts.pending, (state) => { state.loading = true; })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            // ADD product
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })

            // UPDATE product
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(p => p._id === action.payload._id);
                if (index !== -1) state.products[index] = action.payload;
            })

            // DELETE product
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(product => product._id !== action.payload);
            });
    }
});

export default productSlice.reducer;
