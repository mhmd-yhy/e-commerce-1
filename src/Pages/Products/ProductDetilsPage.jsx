import React from "react";
import NavCategory from "../../Components/Category/NavCategory";
import ProductGallery from "../../Components/Product/ProductGallery";
import ProductDetils from "../../Components/Product/ProductDetils";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductsContainer from "../../Components/Product/ProductsContainer";
import SubTitle from "../../Components/Utility/SubTitle";
import img from "../../assets/images/mobile.png";
export default function ProductDetilsPage() {
  return (
    <div
      className="product-detailes"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <NavCategory />
      <div className="container m-auto p-4 xl:px-36">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
          <ProductGallery img={img} />
          <ProductDetils />
        </div>
        <RateContainer />
        <SubTitle title={"منتجات قد تعجبك"} />
        <ProductsContainer />
      </div>
    </div>
  );
}
