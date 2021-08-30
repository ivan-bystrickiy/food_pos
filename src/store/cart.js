import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: {},
  },
  reducers: {
    addToCart: (state, { payload: [product, count, deliveryType] }) => {
      const productId = `${product.id}-${deliveryType}`;

      if (state.products[productId]) {
        if (!count) count = undefined;

        if (count) {
          state.products[productId].count = count;
        } else {
          state.products[productId].count++;
        }
      } else {
        state.products[productId] = {
          count: 1,
          product: product,
          deliveryType: deliveryType,
        };
      }
    },
    removeFromCart: (state, { payload: productId }) => {
      if (state.products[productId]) {
        if (state.products[productId].count > 1) {
          state.products[productId].count--;
        } else {
          delete state.products[productId];
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
