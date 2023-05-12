import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const initialState = {};

const store = configureStore({
    reducer: reducers,
    initialState,
    devTools: process.env.NODE_ENV === "production" ? false : true,
});

export default store;
