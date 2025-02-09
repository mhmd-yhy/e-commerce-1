import { createSlice } from "@reduxjs/toolkit";
import { createSubCategory, getSubCategory_By_CategoryID, getAllSubCategory_OfAllCategories } from "../Api Requests/SubCategoryApiRequests";

const initialState = {
  subCategory: [],
  resCreateSubCategory: [],
  allSubCategory_OfAllCategories: [{}],
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
        state.isLoading = false;
      })

      // // getOneSubCategory
      // .addCase(getOneSubCategory.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getOneSubCategory.fulfilled, (state, action) => {
      //   state.subCategory_Of_Product = action.payload.data;
      //   state.isLoading = false;
      // })
      // .addCase(getOneSubCategory.rejected, (state, action) => {
      //   state.subCategory_Of_Product = action.payload.data;
      //   state.isLoading = false;
      // })

      // getAllSubCategory_OfAllCategories
      .addCase(getAllSubCategory_OfAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSubCategory_OfAllCategories.fulfilled, (state, action) => {
        state.allSubCategory_OfAllCategories = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllSubCategory_OfAllCategories.rejected, (state, action) => {
        state.allSubCategory_OfAllCategories = action.payload;
        state.isLoading = false;
      });

  }
});


export const { clearInitialState } = SubCategorySlice.actions;
export default SubCategorySlice.reducer;