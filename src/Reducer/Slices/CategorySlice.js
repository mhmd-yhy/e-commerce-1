// CategorySlice.jsx //
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseURL from '../../Api/baseURL';

const initialState = {
  category: [],
  isLoading: false,
  paginationResult: []
};
const CategorySlice = createSlice({
  name: "categorySlice",
  initialState: initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      //GetAllCategory
      .addCase(GetAllCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(GetAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload.data.data;
        state.paginationResult = action.payload.data.paginationResult;
      })
      .addCase(GetAllCategory.rejected, (state, action) => {
        state.isLoading = false;
      })

      //getOneCategory
      .addCase(getOneCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload.data;
      })
      .addCase(getOneCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.category = action.payload.data;
      })

      //CreateCategory
      .addCase(CreateCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(CreateCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.isLoading = false;
      })
      .addCase(CreateCategory.rejected, (state, action) => {
        state.category = action.payload;
        state.isLoading = false;
      });
  },
});

export const GetAllCategory = createAsyncThunk("category/getAll", async (limit) => {
  const res = await baseURL.get(`/api/v1/categories?limit=${limit}`);
  return res;
});

export const GetAllCategoryPage = createAsyncThunk("category/getAll", async (page) => {
  const res = await baseURL.get(`/api/v1/categories?limit=12&page=${page}`);
  return res;
});

export const getOneCategory = createAsyncThunk("category/getOneCategory", (id) => {
  const res = baseURL.get(`/api/v1/categories/${id}`);
  return res;
});

export const CreateCategory = createAsyncThunk("category/create", async (formData) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" }
  };
  const res = await baseURL.post(`/api/v1/categories`, formData, config);
  return res;
});
// export const { Reducer1 } = CategorySlice.actions;
export default CategorySlice.reducer;
