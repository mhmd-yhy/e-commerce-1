import React from "react";
import NavCategory from "../../Components/Category/NavCategory";
import SearchCountResult from "../../Components/Product/SearchCountResult";
import SideFilter from "../../Components/Utility/SideFilter";
import prod1 from "../../assets/images/prod1.png";
import ProductCard from "../../Components/Product/ProductCard";
import Pagination from "../../Components/Utility/Pagination";
export default function ShopProductsPage() {
  const images = [prod1, prod1, prod1, prod1, prod1, prod1];
  const productsCards = () => {
    let img = images.map((product, i) => {
      return (
        <ProductCard
          key={i}
          img={product}
          title={"سود كربون ساعة ذكية "}
          price={"880"}
          currency={"جنيه"}
          rate={"4.5"}
        />
      );
    });
    return img;
  };

  return (
    <div
      className="products"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <NavCategory />
      <div className="container m-auto p-4 xl:px-36">
        <SearchCountResult />
        <div className="grid grid-flow-col gap-2 mt-4">
          <SideFilter />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-4">
            {productsCards()}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
