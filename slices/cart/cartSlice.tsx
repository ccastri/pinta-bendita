import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'
export interface CartState {
  cartItems: any;
  totalQuantity: number;
  showCart: boolean;
  amount: number,
}

const initialState: CartState = {
  cartItems: cartItems,
  totalQuantity: 5,
  showCart: false,
  amount:2,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        addOnce: (state, action) => {
          state.totalQuantity += 1;
        },
        remove: (state, action) => {
          state.totalQuantity -= 2;
        },
        incrementBy: (state, { payload: number }) => {
          state.totalQuantity += 10;
        },
  },
});

export const { addOnce, remove, incrementBy } = cartSlice.actions;

export default cartSlice.reducer;
