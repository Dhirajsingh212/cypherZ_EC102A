import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: sessionStorage.getItem("cartProducts")
      ? JSON.parse(sessionStorage.getItem("cartProducts"))
      : [],
    size: sessionStorage.getItem("cartSize")
      ? JSON.parse(sessionStorage.getItem("cartSize"))
      : 0,
    total: sessionStorage.getItem("cartTotal")
      ? JSON.parse(sessionStorage.getItem("cartTotal"))
      : 0,
    isFetching: false,
    isError: false,
  },
  reducers: {
    fetchCartStart(state, action) {
      state.isFetching = true;
    },
    fetchCartSuccess(state, action) {
      state.isFetching = false;
      state.cartProducts = action.payload.products;
      state.isError = false;
      sessionStorage.setItem(
        "cartProducts",
        JSON.stringify(action.payload.products)
      );
      sessionStorage.setItem("cartSize", JSON.stringify(action.payload.size));
      sessionStorage.setItem("cartTotal", JSON.stringify(action.payload.total));
    },
    fetchCartFail(state, action) {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export default cartSlice;
