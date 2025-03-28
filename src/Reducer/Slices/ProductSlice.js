import { createSlice } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, editProduct, getAllProducts, getAllProductsSearch, getProductDetails, getProductsLike, getAllProductsCatOrBrand } from "../Api Requests/ProductApiRequests";


let initialState = {
  product: [],
  productsCatOrBrand: [],
  productDetails: [],
  productsLike: [],
  resEditProduct: [],
  resDeleteProduct: [],
  resCreateProduct: [],
  isLoading: false
};
const ProductSlice = createSlice({
  name: "product slice",
  initialState: initialState,
  reducers: { clearInitialState: (state) => { state.resEditProduct = []; state.resDeleteProduct = []; state.resCreateProduct = []; } },
  extraReducers(builder) {
    builder
      //createProduct
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resCreateProduct = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.resCreateProduct = action.payload;
      })

      //getAllProducts
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })

      //getAllProductsSearch
      .addCase(getAllProductsSearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProductsSearch.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllProductsSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      //getAllProductsCatOrBrand
      .addCase(getAllProductsCatOrBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProductsCatOrBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsCatOrBrand = action.payload;
      })
      .addCase(getAllProductsCatOrBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.productsCatOrBrand = action.payload;
      })

      //getProductDetails
      .addCase(getProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
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
        state.productsLike = action.payload;
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
        state.resDeleteProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.resDeleteProduct = action.payload;
        state.isLoading = false;
      })

      //editProduct
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.resEditProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.resEditProduct = action.payload;
        state.isLoading = false;
      });
  }
});

export const { clearInitialState } = ProductSlice.actions;
export default ProductSlice.reducer;