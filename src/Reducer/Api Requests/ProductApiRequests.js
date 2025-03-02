import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const getAllProducts = createAsyncThunk("product/getAll", async (page, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/products?limit=8&page=${page}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getAllProductsSearch = createAsyncThunk("product/getAllProductsSearch", async (queryString, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/products?${queryString}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getProductDetails = createAsyncThunk("product/getDetails", async (id, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/products/${id}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getProductsLike = createAsyncThunk("product/getProductsLike", async (category, { rejectWithValue }) => {
  try {
    const res = await baseURL.get(`/api/v1/products/?category=${category}`);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const createProduct = createAsyncThunk("product/create", async (formData, { rejectWithValue }) => {
  const config = { headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}` }, };
  try {
    const res = await baseURL.post("/api/v1/products", formData, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, };
    const res = await baseURL.delete(`/api/v1/products/${id}`, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const editProduct = createAsyncThunk("product/editProduct", async (id, formData, { rejectWithValue }) => {
  // try {
  // const config = {
  //   headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}` },
  // };
  //   // const res = await baseURL.put(`/api/v1/products/${id}`, formData, config);
  //   // return res;
  // } catch (error) {
  //   return rejectWithValue(error.response.data);
  // }
  console.log(formData);
});