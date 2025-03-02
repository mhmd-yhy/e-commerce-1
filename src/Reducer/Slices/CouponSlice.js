import { createSlice } from "@reduxjs/toolkit";
import { createCoupon, deleteCoupon, editCoupon, getAllCoupon, getOneCoupon } from "../Api Requests/CouponApiRequests";

const initialState = { resCreateCoupon: [], allCoupon: [], oneCoupon: [], resDeleteCoupon: [], resEditCoupon: [], isLoading: false };
const CouponSlice = createSlice({
  name: "couponSlice", initialState,
  reducers: { clearInitialState: (state) => { state.resCreateCoupon = []; state.resDeleteCoupon = []; state.resEditCoupon = []; state.oneCoupon = []; } },
  extraReducers(builder) {
    builder
      ///createCoupon
      .addCase(createCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resCreateCoupon = action.payload;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.resCreateCoupon = action.payload;
      })
      ///getAllCoupon
      .addCase(getAllCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCoupon = action.payload;
      })
      .addCase(getAllCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.allCoupon = action.payload;
      })
      ///getOneCoupon
      .addCase(getOneCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.oneCoupon = action.payload;
      })
      .addCase(getOneCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.oneCoupon = action.payload;
      })
      ///deleteCoupon
      .addCase(deleteCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resDeleteCoupon = action.payload;
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.resDeleteCoupon = action.payload;
      })
      ///editCoupon
      .addCase(editCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resEditCoupon = action.payload;
      })
      .addCase(editCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.resEditCoupon = action.payload;
      });
  }
});
export const { clearInitialState } = CouponSlice.actions;
export default CouponSlice.reducer;