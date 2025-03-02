import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";
export const getAllBrand = createAsyncThunk("brands/getAll", async (page, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/brands?limit=8&page=${page}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getOneBrand = createAsyncThunk("brands/getOneBrand", async (id, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/brands/${id}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const createBrand = createAsyncThunk("brand/createBrand", async (formData, { rejectWithValue }) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await baseURL.post("/api/v1/brands", formData, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});