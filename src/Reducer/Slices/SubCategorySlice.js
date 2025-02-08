import { createSlice } from "@reduxjs/toolkit";
import { createSubCategory, getSubCategory_By_CategoryID, getSubCategory_Of_Product } from "../Api Requests/SubCategoryApiRequests";

const initialState = {
  subCategory: [],
  resCreateSubCategory: [],
  subCategories_Of_Product: [],
  isLoading: false
};

const SubCategorySlice = createSlice({
  name: "subCategory",
  initialState: initialState,
  reducers: {
    clearInitialState: (state) => {
      state.resCreateSubCategory = [];
    }
  },
  extraReducers(builder) {
    builder
      // createSubCategory
      .addCase(createSubCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSubCategory.fulfilled, (state, action) => {
        state.resCreateSubCategory = action.payload;
        state.isLoading = false;
      })
      .addCase(createSubCategory.rejected, (state, action) => {
        state.resCreateSubCategory = action.payload;
        state.isLoading = false;
      })

      // getSubCategory_By_CategoryID
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
      })

      // getSubCategory_Of_Product
      .addCase(getSubCategory_Of_Product.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubCategory_Of_Product.fulfilled, (state, action) => {
        state.subCategories_Of_Product = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getSubCategory_Of_Product.rejected, (state, action) => {
        state.subCategories_Of_Product = action.payload.data;
        state.isLoading = true;
      });
  }
});


export const { clearInitialState } = SubCategorySlice.actions;
export default SubCategorySlice.reducer;