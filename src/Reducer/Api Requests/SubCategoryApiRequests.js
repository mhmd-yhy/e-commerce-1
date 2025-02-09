import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";
export const createSubCategory = createAsyncThunk("subCategory/create", async (data) => {
  const res = await baseURL.post("/api/v1/subcategories", data);
  return res.status;
});

export const getSubCategory_By_CategoryID = createAsyncThunk("subCategory/get", async (categoryID) => {
  const res = await baseURL.get(`/api/v1/categories/${categoryID}/subcategories`);
  return res.data;
});

// export const getOneSubCategory = createAsyncThunk("subCategory/getSubOfProduct", async (subCategoryID) => {
//   const res = await baseURL.get(`/api/v1/subcategories/${subCategoryID}`);
//   return res.data;
// });
export const getAllSubCategory_OfAllCategories = createAsyncThunk("subCategory/getAllSubCategory_OfAllCategories", async () => {
  const res = await baseURL.get(`/api/v1/subcategories`);
  return res.data;
});
