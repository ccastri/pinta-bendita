import { createSlice, createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";
import { CartItem2 } from '../../cartItems'
import {CartItem} from '../../cartItems'
import CartItems from "../../components/CartItem";

export interface CartState {
  isLoading: boolean,
  cartItems:CartItem2[] ;
  total: number;
  amount: number,
}

const url = `https://fakestoreapi.com/products/category/men's clothing`



export const getCartItems = createAsyncThunk('cart/getCartItems',
async (_, thunkAPI) => {
  try{
      const resp =  await axios.get(url);
      console.log(resp.data);
      const dataa = await resp.data.map((item :CartItem2)=>({
        ...item,
        amount: item.rating.count,
        

      }))
      console.log(dataa);
      return dataa;
    // return fetch(url)
    // console.log(thunkAPI(getState()));
    // .then(res=>res.json())
    // .catch(err=>console.log(err))
  } 
  
  catch (err){
    console.log(err)
    
  }
})
const initialState: CartState = {
  cartItems: [],
  total: 0,
  amount:0,
  isLoading:false,
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        increase: (state, {payload}) => {
          const carItem = state.cartItems.find((item :{id:number}) => 
          item.id === payload.id)
          carItem!.amount += 1 
          // state.totalQuantity += 1;
        },
        decrease: (state, {payload}) => {
          const carItem = state.cartItems.find((item :{id:number}) => 
          item.id === payload.id)
          carItem!.amount -= 1 
          // state.totalQuantity += 1;
        },
        remove: (state, action) => {
          const itemId: number = action.payload
          // console.log(itemId);
          state.cartItems = state.cartItems.filter((item: { id: number; })=>
          item.id !== itemId 
          )
        },
        incrementBy: (state, { payload }) => {
          const carItem = state.cartItems.find((item :{id:number}) => 
          item.id === payload.id)
          carItem!.amount += 10 
        },
        clearCart: (state) => {
          return {
            cartItems: [],
            total: 0,
            showCart: true,
            amount:0,
            isLoading: false
          }
        },
        calculateTotals: (state) => {
        let amount = 0;
        let total : number =0;
        
        state.cartItems.forEach(item =>{
          amount += item.amount;
          total += item.amount * item.price;
        });
        state.amount = amount
        state.total = total
        }
  },
  //  extraReducers: (builder) => {
    // builder.addCase(todoAdded, (state, action) => {
      // TS will know that `action` is a `PayloadAction<Todo>` because of type inference
    // })
  extraReducers: (builder)=>{
    builder.addCase(
      getCartItems.pending, (state) =>{
        state.isLoading = true
      }
      ),
      builder.addCase(getCartItems.fulfilled, (state, action) =>{
      
        console.log(action)
      state.isLoading = false
      state.cartItems = action.payload
    }),
    builder.addCase(getCartItems.rejected, (state) =>{
      state.isLoading = false
    })
  }
});

export const { increase, remove, incrementBy, decrease, clearCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;