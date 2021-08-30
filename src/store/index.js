import cartSliceReducer from "./cart";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

/**
{
  cart: {
    products: {
      [id]: {
        count: <int>,
        deliveryType: 'dinein',
        product: {product}
      }
    }
  }
}
*/
