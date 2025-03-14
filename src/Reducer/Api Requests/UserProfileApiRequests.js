import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

export const editUserProfile = createAsyncThunk("profile/edit", async (data, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.put("/api/v1/users/updateMe", data, config);
    return res.data;
  } catch (error) { return rejectWithValue(error.response.data.errors); }
});
export const resetUserPassword = createAsyncThunk("profile/resetPassword", async (data, { rejectWithValue }) => {
  try {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    const res = await baseURL.put("/api/v1/users/changeMyPassword", data, config);
    return res.status;
  } catch (error) { return rejectWithValue(error.response.data); }
});
