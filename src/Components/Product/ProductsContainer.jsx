import React from "react";
import prod1 from "../../assets/images/prod1.png";
import ProductCard from "../Product/ProductCard";
const ProductsContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-3 my-5">
      <ProductCard
        img={prod1}
        title={"سود كربون ساعة ذكية "}
        price={"880"}
        currency={"جنيه"}
        rate={"4.5"}
      />
      <ProductCard
        img={prod1}
        title={"سود كربون ساعة ذكية "}
        price={"880"}
        currency={"جنيه"}
        rate={"4.5"}
      />
      <ProductCard
        img={prod1}
        title={"سود كربون ساعة ذكية "}
        price={"880"}
        currency={"جنيه"}
        rate={"4.5"}
      />
      <ProductCard
        img={prod1}
        title={"سود كربون ساعة ذكية "}
        price={"880"}
        currency={"جنيه"}
        rate={"4.5"}
      />
    </div>
  );
};

export default ProductsContainer;
