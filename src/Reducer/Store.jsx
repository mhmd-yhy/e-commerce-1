import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./Slices/CategorySlice";

const Store = configureStore({
  reducer: { categoryReducer: CategorySlice, }
});
export default Store;