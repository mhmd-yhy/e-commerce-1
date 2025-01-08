import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Api/baseURL";

let initialState = {
  product: [],
  productDetails: [],
  productsLike: [],
  resDelete: [],
  isLoading: false
};
const ProductSlice = createSlice({
  name: "product slice",
  initialState: initialState,
  extraReducers(builder) {
    builder
      //createProduct
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })

      //getAllProducts
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.product = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })

      //getProductDetails
      .addCase(getProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload.data;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
      })

      //getProductsLike
      .addCase(getProductsLike.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsLike = action.payload.data;
      })
      .addCase(getProductsLike.rejected, (state, action) => {
        state.isLoading = false;
        state.productsLike = action.payload;
      })

      //deleteProduct
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.resDelete = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.resDelete = action.payload;
        state.isLoading = false;
      });
  }
});

export const createProduct = createAsyncThunk("product/create", async (formData) => {
  const res = await baseURL.post("/api/v1/products", formData);
  return res;
});
export const getAllProducts = createAsyncThunk("product/getAll", (page) => {
  const res = baseURL.get(`/api/v1/products?limit=8&page=${page}`);
  return res;
});
export const getProductDetails = createAsyncThunk("product/getDetails", (id) => {
  const res = baseURL.get(`/api/v1/products/${id}`);
  return res;
});
export const getProductsLike = createAsyncThunk("product/getProductsLike", (category) => {
  const res = baseURL.get(`/api/v1/products/?category=${category}`);
  return res;
});
export const deleteProduct = createAsyncThunk("product/deleteProduct", (id) => {
  const res = baseURL.delete(`/api/v1/products/${id}`);
  return res;
});
export default ProductSlice.reducer;