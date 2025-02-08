import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";
export const getAllBrand = createAsyncThunk("brands/getAll", async (page) => {
  const res = await baseURL.get(`/api/v1/brands?limit=8&page=${page}`);
  return res.data;
});

export const getOneBrand = createAsyncThunk("brands/getOneBrand", async (id) => {
  const res = await baseURL.get(`/api/v1/brands/${id}`);
  return res.data;
});

export const createBrand = createAsyncThunk("brand/createBrand", async (formData) => {
  const res = await baseURL.post("/api/v1/brands", formData);
  return res.status;
});