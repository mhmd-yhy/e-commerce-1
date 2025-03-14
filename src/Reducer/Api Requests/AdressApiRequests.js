import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const addAdress = createAsyncThunk("adress/add", async (data, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.post("/api/v1/addresses", data, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getAllAdress = createAsyncThunk("adress/getAll", async (rejectWithValue) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.get("/api/v1/addresses", config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getOneAdress = createAsyncThunk("adress/getOne", async (id, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.get(`/api/v1/addresses/${id}`, config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const deleteAdress = createAsyncThunk("adress/delete", async (id, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.delete(`/api/v1/addresses/${id}`, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const editAdress = createAsyncThunk("adress/edit", async ({ id, alias, details, phone }, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.put(`/api/v1/addresses/${id}`, { alias, details, phone }, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});
