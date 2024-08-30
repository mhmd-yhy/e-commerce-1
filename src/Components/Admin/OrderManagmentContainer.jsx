import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import OrderCard from "./OrderCard";
function OrderManagmentContainer() {
  return (
    <div>
      <SubTitle title={"إدارة جميع الطلبات"} />
      <div className="my-5 lg:grid grid-cols-2 gap-3 min-h-96">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default OrderManagmentContainer;
