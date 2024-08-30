import React from "react";
import ProductsContainer from "../../Components/Product/ProductsContainer";
import SubTitle from "../../Components/Utility/SubTitle";
import Pagination from "../Utility/Pagination";
const FavoriteProductsContainer = () => {
  return (
    <div className="min-h-96">
      <SubTitle title={"المنتجات المفضلة"} />
      <ProductsContainer />
      <ProductsContainer />
      <ProductsContainer />
      <Pagination />
    </div>
  );
};

export default FavoriteProductsContainer;
