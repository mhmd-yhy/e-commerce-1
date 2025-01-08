import React from "react";
import SubTitle from "../Utility/SubTitle";
import ProductsContainer from "../Product/ProductsContainer";
import ViewHomeProductsHook from "../../Custom Hooks/product/ViewHomeProductsHook";
export default function HomeProducts({ title, link }) {
  const [items] = ViewHomeProductsHook();

  return (
    <div>
      <SubTitle title={title} button={"المزيد"} link={link} />
      <ProductsContainer items={items} />
    </div>
  );
}
