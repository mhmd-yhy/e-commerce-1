import { createSlice } from "@reduxjs/toolkit";
import { createRating, deleteRating, editRating, getAllRatings_OfProduct } from "../Api Requests/RatingApiRequests";

const initialState = {
  resCreateRating: [],
  resDeleteRating: [],
  resEditRating: [],
  allRatings: [],
  isLoading: false
};

const RatingSlice = createSlice({
  name: "RatingSlice",
  initialState,
  reducers: { clearInitialState: (state) => { state.resCreateRating = []; state.resDeleteRating = []; state.resEditRating = []; } },
  extraReducers(builder) {
    builder
      ///createRating
      .addCase(createRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resCreateRating = action.payload;
      })
      .addCase(createRating.rejected, (state, action) => {
        state.isLoading = false;
        state.resCreateRating = action.payload;
      })
      ///getAllRatings_OfProduct
      .addCase(getAllRatings_OfProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRatings_OfProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allRatings = action.payload;
      })
      .addCase(getAllRatings_OfProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.allRatings = action.payload;
      })
      ///deleteRating
      .addCase(deleteRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resDeleteRating = action.payload;
      })
      .addCase(deleteRating.rejected, (state, action) => {
        state.isLoading = false;
        state.resDeleteRating = action.payload;
      })
      ///editRating
      .addCase(editRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resEditRating = action.payload;
      })
      .addCase(editRating.rejected, (state, action) => {
        state.isLoading = false;
        state.resEditRating = action.payload;
      });
  }
});
export const { clearInitialState } = RatingSlice.actions;
export default RatingSlice.reducer;