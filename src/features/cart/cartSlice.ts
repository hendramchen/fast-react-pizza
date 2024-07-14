import { createSlice } from '@reduxjs/toolkit';
import { CartType } from '../../types';

const initialState: { cart: CartType[] } = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0)
          cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: { cart: { cart: CartType[] } }) =>
  state.cart.cart;

export const getTotalCartQuantity = (state: { cart: { cart: CartType[] } }) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: { cart: { cart: CartType[] } }) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById =
  (id: number | string) => (state: { cart: { cart: CartType[] } }) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
