import { createSlice } from "@reduxjs/toolkit";
import { addToCard, apply_CouponToCart, clearAllCartItems, editItemQuantity, getAllCartItems, removeCartItem } from "../Api Requests/CartApiRequests";

const initialState = { resAddToCard: [], resEditItemQuantity: [], resRemoveCartItem: [], resClearAllCartItems: [], resApply_Coupon: [], getAllItems: [], isLoading: [] };
const CartSlice = createSlice({
  name: "CartSlice", initialState,
  reducers: { clearInitialState: (state) => { state.resAddToCard = []; state.resRemoveCartItem = []; state.resClearAllCartItems = []; state.resEditItemQuantity = []; state.resApply_Coupon = []; } },
  extraReducers(builder) {
    builder
      ///addToCard
      .addCase(addToCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resAddToCard = action.payload;
      })
      .addCase(addToCard.rejected, (state, action) => {
        state.isLoading = false;
        state.resAddToCard = action.payload;
      })
      ///getAllCartItems
      .addCase(getAllCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getAllItems = action.payload;
      })
      .addCase(getAllCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.getAllItems = action.payload;
      })
      ///removeCartItem
      .addCase(removeCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resRemoveCartItem = action.payload;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.resRemoveCartItem = action.payload;
      })
      ///clearAllCartItems
      .addCase(clearAllCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearAllCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resClearAllCartItems = action.payload;
      })
      .addCase(clearAllCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.resClearAllCartItems = action.payload;
      })
      ///editItemQuantity
      .addCase(editItemQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editItemQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resEditItemQuantity = action.payload;
      })
      .addCase(editItemQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.resEditItemQuantity = action.payload;
      })
      ///apply_CouponToCart
      .addCase(apply_CouponToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apply_CouponToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resApply_Coupon = action.payload;
      })
      .addCase(apply_CouponToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.resApply_Coupon = action.payload;
      });
  }
});
export const { clearInitialState } = CartSlice.actions;
export default CartSlice.reducer;