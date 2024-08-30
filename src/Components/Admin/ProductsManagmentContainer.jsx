import React from "react";
import ProductCard from "../../Components/Admin/ProductCard";
import prod1 from "../../assets/images/prod1.png";
import SubTitle from "../../Components/Utility/SubTitle";
function ProductsManagmentContainer() {
  return (
    <div>
      <SubTitle title={"إدارة جميع المنتجات"} />
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-3 my-5 min-h-96">
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
    </div>
  );
}

export default ProductsManagmentContainer;
