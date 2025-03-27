import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const create_Cash_Order = createAsyncThunk("order/create_Cash_Order", async ({ cartID, details, phone }, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.post(`/api/v1/orders/${cartID}`, { "shippingAddress": { "details": details, "phone": phone } }, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const create_Card_Order = createAsyncThunk("order/create_Card_Order", async ({ cartID, details, phone }, { rejectWithValue }) => {
  try {
    console.log(cartID);
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.post(`/api/v1/orders/checkout-session/${cartID}`, { "shippingAddress": { "details": details, "phone": phone } }, config);
    return res.session;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getAllOrders = createAsyncThunk("order/getAll", async (page, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.get(`/api/v1/orders?limit=4&page=${page}`, config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const getOneOrder = createAsyncThunk("order/getOne", async (orderID, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.get(`/api/v1/orders/${orderID}`, config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const applayPay = createAsyncThunk("order/applayPay", async (orderID, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.put(`/api/v1/orders/${orderID}/pay`, "", config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});

export const applayDeliver = createAsyncThunk("order/applayDeliver", async (orderID, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.put(`/api/v1/orders/${orderID}/deliver`, "", config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});