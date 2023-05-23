import { configureStore } from "@reduxjs/toolkit";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";

const initialState = {};

const reducers = { productList: productListReducer, productDetails: productDetailsReducer };

const store = configureStore({
    reducer: reducers,
    initialState,
    devTools: process.env.NODE_ENV === "production" ? false : true,
});

export default store;
