import { createSlice } from "@reduxjs/toolkit";
import Wishlist from "../../Pages/Wishlist";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
       addToWishlist:(state,action)=>{
        state.push(action.payload)
       },
       removeFromWishlist:(state,action)=>(
        state.filter(item=>item.id != action.payload)
       )
    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer