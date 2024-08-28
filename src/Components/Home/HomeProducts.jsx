import React from "react";
import SubTitle from "../Utility/SubTitle";
import ProductsContainer from "../Product/ProductsContainer";
export default function HomeProducts({ title, link }) {
  return (
    <div>
      <SubTitle title={title} button={"المزيد"} link={link} />
      <ProductsContainer />
    </div>
  );
}
