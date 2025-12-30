// src/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit'; // [web:35]

const initialState = {
  items: [],        // {id, name, price, image, category, quantity}
  totalQuantity: 0,
  totalAmount: 0,
};

const findItemIndex = (items, id) => items.findIndex((item) => item.id === id);

const recalcTotals = (state) => {
  let quantity = 0;
  let amount = 0;
  state.items.forEach((item) => {
    quantity += item.quantity;
    amount += item.price * item.quantity;
  });
  state.totalQuantity = quantity;
  state.totalAmount = amount;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const index = findItemIndex(state.items, product.id);
      if (index === -1) {
        state.items.push({ ...product, quantity: 1 });
      }
      recalcTotals(state);
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const index = findItemIndex(state.items, id);
      if (index !== -1) {
        state.items[index].quantity += 1;
        recalcTotals(state);
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const index = findItemIndex(state.items, id);
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
        recalcTotals(state);
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      recalcTotals(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
