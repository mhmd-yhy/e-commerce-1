import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const createNewUser = createAsyncThunk("auth/signup", async (formData, { rejectWithValue }) => {
  try {
    const res = await baseURL.post("/api/v1/auth/signup", formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data || error.message);
  }
});

export const loginUser = createAsyncThunk("auth/login", async (formData, { rejectWithValue }) => {
  try {
    const res = await baseURL.post("/api/v1/auth/login", formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data || error.message);
  }
});
