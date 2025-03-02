import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const createNewUser = createAsyncThunk("auth/signup", async (formData, { rejectWithValue }) => {
  try {
    const res = await baseURL.post("/api/v1/auth/signup", formData);
    return res.data;
  } catch (error) {return rejectWithValue(error.response.data || error.message);}
});

export const loginUser = createAsyncThunk("auth/login", async (formData, { rejectWithValue }) => {
  try {
    const res = await baseURL.post("/api/v1/auth/login", formData);
    return res.data;
  } catch (error) {return rejectWithValue(error.response.data || error.message);}
});

export const forgotPassword = createAsyncThunk("auth/forgotPassword", async (email, { rejectWithValue }) => {
  try {
    const res = await baseURL.post("/api/v1/auth/forgotPasswords", email);
    return res.data;
  } catch (error) {return rejectWithValue(error.response.data || error.message);}
});

export const verifyResetCode = createAsyncThunk("auth/verifyResetCode", async (verifyCode, { rejectWithValue }) => {
  try {
    const res = await baseURL.post("/api/v1/auth/verifyResetCode", verifyCode);
    return res.data;
  } catch (error) {return rejectWithValue(error.response.data || error.message);}
});

export const resetPassword = createAsyncThunk("auth/resetPassword", async (data, { rejectWithValue }) => {
  try {
    const res = await baseURL.put("/api/v1/auth/resetPassword", data);
    return res.status;
  } catch (error) {return rejectWithValue(error.response.data || error.message);}
});