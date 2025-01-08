import React from "react";
import ProductCard from "../Product/ProductCard";
const ProductsContainer = ({ items }) => {
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
          />)
      }
    </div>
  );
};

export default ProductsContainer;
