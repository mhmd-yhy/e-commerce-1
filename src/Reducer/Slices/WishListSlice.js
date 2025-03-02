import { createSlice } from "@reduxjs/toolkit";
import { AddToWishList, GetWishList, RemoveFromWishList } from "../Api Requests/WishListApiRequests";

const initialState = { addToWishList: [], removeFromWishList: [], getAllWishList: [], isLoading: false };

const WishListSlice = createSlice({
  name: "WishList", initialState,
  reducers: { clearInitialState: (state) => { state.addToWishList = []; state.removeFromWishList = []; } },
  extraReducers(builder) {
    builder
      ///AddToWishList
      .addCase(AddToWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddToWishList.fulfilled, (state, action) => {
        state.addToWishList = action.payload;
        state.isLoading = false;
      })
      .addCase(AddToWishList.rejected, (state, action) => {
        state.addToWishList = action.payload;
        state.isLoading = false;
      })
      ///GetWishList
      .addCase(GetWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetWishList.fulfilled, (state, action) => {
        state.getAllWishList = action.payload;
        state.isLoading = false;
      })
      .addCase(GetWishList.rejected, (state, action) => {
        state.getAllWishList = action.payload;
        state.isLoading = false;
      })
      ///RemoveFromWishList
      .addCase(RemoveFromWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RemoveFromWishList.fulfilled, (state, action) => {
        state.removeFromWishList = action.payload;
        state.isLoading = false;
      })
      .addCase(RemoveFromWishList.rejected, (state, action) => {
        state.removeFromWishList = action.payload;
        state.isLoading = false;
      });
  }
});
export const { clearInitialState } = WishListSlice.actions;
export default WishListSlice.reducer;