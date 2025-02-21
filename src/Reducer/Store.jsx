import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./Slices/CategorySlice";
import BrandSlice from "./Slices/BrandSlice";
import SubCategorySlice from "./Slices/SubCategorySlice";
import ProductSlice from "./Slices/ProductSlice";
import AuthSlice from "./Slices/AuthSlice";

const Store = configureStore({
  reducer: {
    categoryReducer: CategorySlice,
    brandReducer: BrandSlice,
    subCategoryReducer: SubCategorySlice,
    productReducer: ProductSlice,
    authReducer: AuthSlice
  }
});
export default Store;