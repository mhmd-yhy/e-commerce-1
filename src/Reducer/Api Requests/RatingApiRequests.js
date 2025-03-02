import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const createRating = createAsyncThunk("rating/createRating", async (data, { rejectWithValue }) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await baseURL.post("/api/v1/reviews", data, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getAllRatings_OfProduct = createAsyncThunk("rating/getAllRatings_OfProduct", async ({ id, page = 1 }, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/reviews?limit=3&page=${page}&product=${id}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const deleteRating = createAsyncThunk("rating/deleteRating", async (id, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, };
    const res = await baseURL.delete(`/api/v1/reviews/${id}`, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const editRating = createAsyncThunk("rating/editRating", async ({ editID, review, rating }, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, };
    const res = await baseURL.put(`/api/v1/reviews/${editID}`, { "review": review, "rating": rating }, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});