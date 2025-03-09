import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Product/ProductSlice';

const AddProduct = () => {
    const [productData, setProductData] = useState({ name: '', price: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(productData));
        setProductData({ name: '', price: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                value={productData.name}
                onChange={(e) => setProductData({ ...productData, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={productData.price}
                onChange={(e) => setProductData({ ...productData, price: e.target.value })}
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
