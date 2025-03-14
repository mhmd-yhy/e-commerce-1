import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./Slices/CategorySlice";
import BrandSlice from "./Slices/BrandSlice";
import SubCategorySlice from "./Slices/SubCategorySlice";
import ProductSlice from "./Slices/ProductSlice";
import AuthSlice from "./Slices/AuthSlice";
import RatingSlice from "./Slices/RatingSlice";
import WishListSlice from "./Slices/WishListSlice";
import CouponSlice from "./Slices/CouponSlice";
import AdressSlice from "./Slices/AdressSlice";
import UserProfileSlice from "./Slices/UserProfileSlice";
import CartSlice from "./Slices/CartSlice";

const Store = configureStore({
  reducer: {
    categoryReducer: CategorySlice,
    brandReducer: BrandSlice,
    subCategoryReducer: SubCategorySlice,
    productReducer: ProductSlice,
    authReducer: AuthSlice,
    ratingReducer: RatingSlice,
    wishListReducer: WishListSlice,
    couponReducer: CouponSlice,
    adressReducer: AdressSlice,
    UserProfileReducer: UserProfileSlice,
    CartReducer: CartSlice,
  }
});
export default Store;