import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

const initialState = {
  brands: [],
  isLoading: false,
};
const BrandSlice = createSlice({
  name: "brandSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllBrand.pending, (state, action) => {
      state.isLoading = true;
    })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.brands = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(createBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      });
  }
});

export const getAllBrand = createAsyncThunk("brands/getAll", async (page) => {
  const res = await baseURL.get(`/api/v1/brands?limit=12&page=${page}`);
  return res;
});
export const createBrand = createAsyncThunk("brand/createBrand", async (formData) => {
  const res = await baseURL.post("/api/v1/brands", formData);
  return res;
});
export default BrandSlice.reducer;