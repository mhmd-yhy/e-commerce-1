import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const GetAllCategory = createAsyncThunk("category/getAll", async (limit, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/categories?limit=${limit}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const GetAllCategoryPage = createAsyncThunk("category/getAllPage", async (page, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/categories?limit=8&page=${page}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getOneCategory = createAsyncThunk("category/getOneCategory", async (id, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/categories/${id}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const CreateCategory = createAsyncThunk("category/create", async (formData, { rejectWithValue }) => {
  try {
    const config = {
      headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await baseURL.post("/api/v1/categories", formData, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});