import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    LOADING: 'loading',
    IDEAL: 'ideal',
    ERROR: 'error'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data:[],
        status: STATUSES.IDEAL
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload;

        },

        setStatus(state,action)
        {
            state.status = action.payload;
        }
    },
    // extraReducers: (builder)=>{
    //     builder
    //     .addCase(fetchProducts.pending,(state,action)=>{
    //         state.status = STATUSES.LOADING;
    //     }).addCase(fetchProducts.fulfilled,(state,action)=>{
    //         state.data = action.payload;
    //         state.status = STATUSES.IDEAL;
    //     }).addCase(fetchProducts.rejected,(state,action)=>{
    //         state.status = STATUSES.ERROR;
    //     });
    // }

        
})






export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const res = await fetch('https://fakestoreapi.com/products?limit=20')
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDEAL));
        }
        catch(err)
        {
            console.error(err);
            dispatch(setStatus(STATUSES.ERROR));

        }
    }
}

export const {setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;




// export const fetchProducts = createAsyncThunk('products/fetch',async ()=>{
//     const res = await fetch('https://fakestoreapi.com/products?limit=20')
//                 const data = await res.json();
//                 return data;
// })