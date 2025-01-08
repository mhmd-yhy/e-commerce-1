import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

const initialState = {
  subCategory: [],
  isLoading: false
};

const SubCategorySlice = createSlice({
  name: "subCategory",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createSubCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSubCategory.fulfilled, (state, action) => {
        state.subCategory = action.payload;
        state.isLoading = false;
      })
      .addCase(createSubCategory.rejected, (state, action) => {
        state.subCategory = action.payload;
        state.isLoading = false;
      })
      .addCase(getSubCategory_By_CategoryID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubCategory_By_CategoryID.fulfilled, (state, action) => {
        state.subCategory = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getSubCategory_By_CategoryID.rejected, (state, action) => {
        state.subCategory = action.payload.data;
        state.isLoading = true;
      });
  }
});

export const createSubCategory = createAsyncThunk("subCategory/create", (data) => {
  const res = baseURL.post("/api/v1/subcategories", data);
  return res;
});
export const getSubCategory_By_CategoryID = createAsyncThunk("subCategory/get", (categoryID) => {
  const res = baseURL.get(`/api/v1/categories/${categoryID}/subcategories`);
  return res;
});
export default SubCategorySlice.reducer;