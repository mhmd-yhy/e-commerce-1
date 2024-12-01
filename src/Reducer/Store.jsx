import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./Slices/CategorySlice";
import BrandSlice from "./Slices/BrandSlice";

const Store = configureStore({
  reducer: { categoryReducer: CategorySlice, brandReducer: BrandSlice }
});
export default Store;