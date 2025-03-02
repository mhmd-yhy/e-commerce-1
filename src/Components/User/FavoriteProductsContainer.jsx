import React from "react";
import ProductsContainer from "../../Components/Product/ProductsContainer";
import SubTitle from "../../Components/Utility/SubTitle";
import GetWishListHook from "../../Custom Hooks/wishList/GetWishListHook";
const FavoriteProductsContainer = () => {
  const [wishList_IDArr, wishList] = GetWishListHook();
  return (
    <div className="min-h-96">
      <SubTitle title={"المنتجات المفضلة"} />
      <ProductsContainer items={wishList} wishList_IDArr={wishList_IDArr} />
    </div>
  );
};

export default FavoriteProductsContainer;
