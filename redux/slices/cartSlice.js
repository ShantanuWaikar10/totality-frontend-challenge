import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = [];

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ id, title, image, price, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem.qty > 0 && existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem && existingItem.qty>=2) {
        existingItem.qty -= 1;
      }
    },
  },
});

//export the reducers(actions)
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
