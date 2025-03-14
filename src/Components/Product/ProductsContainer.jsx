import React from "react";
import ProductCard from "../Product/ProductCard";
import AddToWishListHook from "../../Custom Hooks/wishList/AddToWishListHook.js";
import RemoveFromWishListHook from "../../Custom Hooks/wishList/RemoveFromWishListHook.js";
import GetWishListHook from "../../Custom Hooks/wishList/GetWishListHook.js";
const ProductsContainer = ({ items }) => {
  const [OnClick_AddToWishList] = AddToWishListHook();
  const [OnClick_RemoveFromWishList] = RemoveFromWishListHook();
  const [wishList_IDArr, wishList] = GetWishListHook();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-3 my-5">
      {
        items && items.map((product, i) =>
          <ProductCard
            key={i}
            img={product.imageCover}
            title={product.title}
            price={product.price}
            currency={"جنيه"}
            rate={product.ratingsQuantity}
            id={product._id}
            OnClick_AddToWishList={OnClick_AddToWishList}
            OnClick_RemoveFromWishList={OnClick_RemoveFromWishList}
            isWish={wishList_IDArr && wishList_IDArr.find(wish => wish === product._id ? true : false)}
          />)
      }
    </div>
  );
};

export default ProductsContainer;
