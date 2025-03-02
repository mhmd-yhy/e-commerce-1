import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const createCoupon = createAsyncThunk("coupon/create", async (data, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.post("/api/v1/coupons", data, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getAllCoupon = createAsyncThunk("coupon/getAll", async (rejectWithValue) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.get("/api/v1/coupons", config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getOneCoupon = createAsyncThunk("coupon/getOne", async (itemID, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.get(`/api/v1/coupons/${itemID}`, config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const deleteCoupon = createAsyncThunk("coupon/deleteCoupon", async (itemID, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.delete(`/api/v1/coupons/${itemID}`, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const editCoupon = createAsyncThunk("coupon/editCoupon", async ({ id, name, expire, discount }, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.put(`/api/v1/coupons/${id}`, { name, expire, discount }, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});
