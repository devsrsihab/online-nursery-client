import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { TProduct } from "../../../types";

interface CartItem extends TProduct {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  totalPrice: number;
  totalQuantity: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (action.payload.stock > 0) {
        if (itemInCart) {
          const userQty = 1;

          if (itemInCart.quantity + userQty <= action.payload.stock) {
            itemInCart.quantity += userQty;
            toast.success("The item has been added to the cart.");
          } else {
            toast.error("Cannot add more, item is out of stock.");
            console.log("Cannot add more, item is out of stock.");
          }
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
          toast.success("The item has been added to the cart.");
        }
      } else {
        toast.error("Cannot add to cart, item is out of stock.");
        console.log("Cannot add to cart, item is out of stock.");
      }

      // Recalculate the cart totals
      cartSlice.caseReducers.getCartTotal(state);
    },

    getCartTotal: (state) => {
      const totals = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseFloat(totals.totalPrice.toFixed(2));
      state.totalQuantity = totals.totalQuantity;
    },

    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      cartSlice.caseReducers.getCartTotal(state);
    },
  },
});

export const { addToCart, removeFromCart, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
