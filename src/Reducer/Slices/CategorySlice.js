import { createSlice } from '@reduxjs/toolkit';
import { CreateCategory, GetAllCategory, GetAllCategoryPage, getOneCategory } from '../Api Requests/CategoryApiRequests';

const initialState = {
  categories: [],
  oneCategory: [],
  resCreateCategory: [],
  isLoading: false,
  paginationResult: []
};

const CategorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    clearInitialState: (state) => {
      state.resCreateCategory = [];
    }
  },
  extraReducers: (builder) => {
    builder
      // GetAllCategory
      .addCase(GetAllCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.paginationResult = action.payload.paginationResult;
      })
      .addCase(GetAllCategory.rejected, (state, action) => {
        state.isLoading = false;
        console.error('GetAllCategory failed:', action.error);
      })

      // GetAllCategoryPage
      .addCase(GetAllCategoryPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllCategoryPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(GetAllCategoryPage.rejected, (state, action) => {
        state.isLoading = false;
        console.error('GetAllCategoryPage failed:', action.error);
      })

      // GetOneCategory
      .addCase(getOneCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.oneCategory = action.payload.data;
      })
      .addCase(getOneCategory.rejected, (state, action) => {
        state.isLoading = false;
        console.error('getOneCategory failed:', action.error);
      })

      // CreateCategory
      .addCase(CreateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resCreateCategory = action.payload;
      })
      .addCase(CreateCategory.rejected, (state, action) => {
        state.isLoading = false;
        console.error('CreateCategory failed:', action.error);
      });
  }
});

export default CategorySlice.reducer;
export const { clearInitialState } = CategorySlice.actions;