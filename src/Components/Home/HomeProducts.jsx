import React from "react";
import SubTitle from "../Utility/SubTitle";
import ProductsContainer from "../Product/ProductsContainer";
import ViewHomeProductsHook from "../../Custom Hooks/product/ViewHomeProductsHook";
import GetWishListHook from "../../Custom Hooks/wishList/GetWishListHook";
export default function HomeProducts({ title, link }) {
  const [items] = ViewHomeProductsHook();
  const [wishList_IDArr] = GetWishListHook();

  return (
    <div>
      <SubTitle title={title} button={"المزيد"} link={link} />
      <ProductsContainer items={items} wishList_IDArr={wishList_IDArr} />
    </div>
  );
}
