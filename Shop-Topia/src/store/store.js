import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";

export const productsActions = productsSlice.actions;
export const cartActions = cartSlice.actions;

const productsReducer = productsSlice.reducer;
const cartReducer = cartSlice.actions;

export const store = configureStore({
  reducer: { productsReducer, cartReducer },
});
