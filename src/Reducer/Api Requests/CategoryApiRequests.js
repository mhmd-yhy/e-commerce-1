import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const GetAllCategory = createAsyncThunk("category/getAll", async (limit) => {
  const res = await baseURL.get(`/api/v1/categories?limit=${limit}`);
  return res.data;
});

export const GetAllCategoryPage = createAsyncThunk("category/getAllPage", async (page) => {
  const res = await baseURL.get(`/api/v1/categories?limit=8&page=${page}`);
  return res.data;
});

export const getOneCategory = createAsyncThunk("category/getOneCategory", async (id) => {
  const res = await baseURL.get(`/api/v1/categories/${id}`); // Added await
  return res.data;
});

export const CreateCategory = createAsyncThunk("category/create", async (formData) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" }
  };
  const res = await baseURL.post(`/api/v1/categories`, formData, config);
  return res.status;
});