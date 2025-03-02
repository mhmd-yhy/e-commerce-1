import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";
export const createSubCategory = createAsyncThunk("subCategory/create", async (data, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, };
    const res = await baseURL.post("/api/v1/subcategories", data, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getSubCategory_By_CategoryID = createAsyncThunk("subCategory/get", async (categoryID, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/categories/${categoryID}/subcategories`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getAllSubCategory_OfAllCategories = createAsyncThunk("subCategory/getAllSubCategory_OfAllCategories", async ({ rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/subcategories`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});
