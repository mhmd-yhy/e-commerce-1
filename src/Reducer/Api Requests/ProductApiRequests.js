import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const getAllProducts = createAsyncThunk("product/getAll", async (page) => {
  const res = await baseURL.get(`/api/v1/products?limit=8&page=${page}`);
  return res.data;
});

export const getProductDetails = createAsyncThunk("product/getDetails", async (id) => {
  const res = await baseURL.get(`/api/v1/products/${id}`);
  return res.data;
});

export const getProductsLike = createAsyncThunk("product/getProductsLike", async (category) => {
  const res = await baseURL.get(`/api/v1/products/?category=${category}`);
  return res.data;
});

export const createProduct = createAsyncThunk("product/create", async (formData) => {
  const res = await baseURL.post("/api/v1/products", formData);
  return res.status;
});

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id) => {
  const res = await baseURL.delete(`/api/v1/products/${id}`);
  return res.status;
});

export const editProduct = createAsyncThunk("product/editProduct", async (id, formData) => {
  // const res = await baseURL.put(`/api/v1/products/${id}`, formData);
  // return res;
  console.log(formData);
});