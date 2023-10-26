import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        remove:() => {},
    }
});

export const {remove} = CartSlice.actions;
export default CartSlice.reducer;