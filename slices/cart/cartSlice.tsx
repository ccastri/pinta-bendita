import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";
import cartItems from '../../cartItems'
import {CartItem} from '../../cartItems'
import CartItems from "../../components/CartItem";
export interface CartState {
  cartItems:CartItem[] ;
  totalQuantity: number;
  showCart: boolean;
  amount: number,
}
const initialState: CartState = {
  cartItems: cartItems,
  totalQuantity: 0,
  showCart: false,
  amount:9,
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        increase: (state, {payload}) => {
          const carItem = state.cartItems.find((item :{id:number}) => 
          item.id === payload.id)
          carItem!.amount = carItem!.amount +1 
          // state.totalQuantity += 1;
        },
        decrease: (state, {payload}) => {
          const carItem = state.cartItems.find((item :{id:number}) => 
          item.id === payload.id)
          carItem!.amount = carItem!.amount -1 
          // state.totalQuantity += 1;
        },
        remove: (state, action) => {
          const itemId: number = action.payload
          console.log(itemId);
          state.cartItems = state.cartItems.filter((item: { id: number; })=>
          item.id !== itemId 

          
          )
        },
        incrementBy: (state, { payload: any }) => {
          state.totalQuantity += 10;
        },
        clearCart: (state) => {
          return {
            cartItems: [],
            totalQuantity: 0,
            showCart: true,
            amount:0,
          }
        },
  },
});

export const { increase, remove, incrementBy, decrease, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
