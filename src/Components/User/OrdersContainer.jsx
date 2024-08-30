import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import UserOrderCard from "./UserOrderCard";
function OrdersContainer() {
  return (
    <div className="min-h-96 max-w-2xl">
      <SubTitle title={"إدارة الطلبات"} />
      <div className="my-5 min-h-96">
        <UserOrderCard />
        <UserOrderCard />
      </div>
    </div>
  );
}

export default OrdersContainer;
