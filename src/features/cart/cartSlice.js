import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProductList: [],
  cartPrice: 12,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartProductList.unshift({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price,
      });
    },
    removeFromCart(state, action) {
      state.cartProductList = state.cartProductList.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQuantity(state, action) {
      const item = state.cartProductList.find(
        (product) => product.id === action.payload
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.cartProductList.find(
        (product) => product.id === action.payload
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
