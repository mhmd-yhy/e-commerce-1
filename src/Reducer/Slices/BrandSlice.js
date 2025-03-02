import { createSlice } from "@reduxjs/toolkit";
import { createBrand, getAllBrand, getOneBrand } from "../Api Requests/BrandApiRequests";


const initialState = {
  brands: [],
  resCreateBrand: [],
  oneBrand: [],
  isLoading: false,
};
const BrandSlice = createSlice({
  name: "brandSlice",
  initialState: initialState,
  reducers: { clearInitialState: (state) => { state.resCreateBrand = []; } },
  extraReducers(builder) {
    builder
      //getAllBrand
      .addCase(getAllBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })

      //getOneBrand
      .addCase(getOneBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOneBrand.fulfilled, (state, action) => {
        state.oneBrand = action.payload;
        state.isLoading = false;
      })
      .addCase(getOneBrand.rejected, (state, action) => {
        state.oneBrand = action.payload;
        state.isLoading = false;
      })

      //createBrand
      .addCase(createBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.resCreateBrand = action.payload;
        state.isLoading = false;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.resCreateBrand = action.payload;
        state.isLoading = false;
      });
  }
});

export const { clearInitialState } = BrandSlice.actions;
export default BrandSlice.reducer;