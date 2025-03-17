import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for an individual cart item
interface CartItem {
  id: string; // Assuming an 'id' for each item in the cart
  title: string;
  price: string;
  image: string; // Assuming the cart item also contains an image URL or object
}

// Define the initial state as an array of CartItem
const initialState: CartItem[] = [];

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a cart item with a payload of type CartItem
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },

    // Remove a cart item using its index as payload
    removeCartItem: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addCartItem, removeCartItem } = CartSlice.actions;
export default CartSlice.reducer;
