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

      .addCase(CreateCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(CreateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload.data.data;
      })
      .addCase(CreateCategory.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const GetAllCategory = createAsyncThunk("category/getAll", async (limit) => {
  const res = await baseURL.get(`/api/v1/categories?limit=${limit}`);
  return res;
});

export const GetAllCategoryPage = createAsyncThunk("category/getAll", async (mypage) => {
  const res = await baseURL.get(`/api/v1/categories?limit=12&page=${mypage}`);
  return res;
});

export const CreateCategory = createAsyncThunk("category/create", async (formData) => {
  const res = await baseURL.post(`/api/v1/categories`, formData);
  return res;
});
// export const { Reducer1 } = CategorySlice.actions;
export default CategorySlice.reducer;
