import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import OrderDetailesCard from "./OrderDetailesCard";
import ClientDetails from "./ClientDetails";
function OrderDetailsContainer() {
  return (
    <div>
      <SubTitle title={"تفاصيل الطلب رقم #2656"} />
      <div className="my-5 lg:grid grid-cols-2 gap-3 min-h-96">
        <OrderDetailesCard />
        <OrderDetailesCard />
        <OrderDetailesCard />
      </div>
      <div className="my-5 lg:grid grid-cols-2">
        <ClientDetails />
      </div>
    </div>
  );
}

export default OrderDetailsContainer;
