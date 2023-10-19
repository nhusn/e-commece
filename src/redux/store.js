import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./Slice/wishlistSlice";


const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice
    }
})

export default store