import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const addToCard = createAsyncThunk("card/add", async (data, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.post("/api/v1/cart", data, config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});
export const getAllCartItems = createAsyncThunk("card/getAll", async (_, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.get("/api/v1/cart", config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});
export const removeCartItem = createAsyncThunk("card/remove", async (itemID, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.delete(`/api/v1/cart/${itemID}`, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});
export const clearAllCartItems = createAsyncThunk("card/clearAll", async (_, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.delete(`/api/v1/cart/`, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});
export const editItemQuantity = createAsyncThunk("card/editQuantity", async ({ itemID, quantity }, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.put(`/api/v1/cart/${itemID}`, { "count": quantity }, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});
export const apply_CouponToCart = createAsyncThunk("card/apply_CouponToCart", async (coupon, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.put(`/api/v1/cart/applyCoupon`, { "couponName": coupon }, config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
})


