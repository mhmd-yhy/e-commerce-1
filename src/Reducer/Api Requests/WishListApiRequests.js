import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const AddToWishList = createAsyncThunk("wishList/addTo", async (id, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.post("/api/v1/wishlist", { "productId": id }, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const GetWishList = createAsyncThunk("wishList/getWishList", async (id, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.get("/api/v1/wishlist", config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const RemoveFromWishList = createAsyncThunk("wishList/RemoveFromWishList", async (id, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.delete(`/api/v1/wishlist/${id}`, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});
