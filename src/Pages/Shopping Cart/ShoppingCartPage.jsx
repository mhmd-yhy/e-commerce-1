import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import CartItem from "../../Components/Shopping Cart/CartItem";
import CartCheckout from "../../Components/Shopping Cart/CartCheckout";

const ShoppingCartPage = () => {
  return (
    <div
      className="container m-auto p-4 xl:px-36"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <SubTitle title={"عربة التسوق"} />
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        <div className="lg:col-span-2">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="col-span-1">
          <CartCheckout />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
