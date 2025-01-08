import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

const initialState = {
  brands: [],
  oneBrand: [],
  isLoading: false,
};
const BrandSlice = createSlice({
  name: "brandSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //getAllBrand
      .addCase(getAllBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.brands = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.isLoading = false;
      })

      //getOneBrand
      .addCase(getOneBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOneBrand.fulfilled, (state, action) => {
        state.oneBrand = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getOneBrand.rejected, (state, action) => {
        state.isLoading = false;
      })

      //createBrand
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
export const getOneBrand = createAsyncThunk("brands/getOneBrand", (id) => {
  const res = baseURL.get(`/api/v1/brands/${id}`);
  return res;
});
export const createBrand = createAsyncThunk("brand/createBrand", async (formData) => {
  const res = await baseURL.post("/api/v1/brands", formData);
  return res;
});
export default BrandSlice.reducer;