import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import OrderCard from "./OrderCard";
import GetAll_Orders from "../../Custom Hooks/order/GetAll_Orders";
import Pagination from "../Utility/Pagination";
function OrderManagmentContainer() {
  const [ordersArray, numberOfPages, getPage] = GetAll_Orders();
  return (
    <div>
      <SubTitle title={"إدارة جميع الطلبات"} />
      <div className="my-5 lg:grid grid-cols-2 gap-3">

        {ordersArray.length > 0
          ? ordersArray.map((order, i) => <OrderCard key={i} order_ID={order._id} user={order.user} isPaid={order.isPaid} isDelivered={order.isDelivered} id={order.id} paymentMethodType={order.paymentMethodType} totalOrderPrice={order.totalOrderPrice} />)
          : <div className="text-neutral-600 text-xl flex justify-center">ليس لديك أي طلبات شراء</div>}
      </div>
      <Pagination pageCount={numberOfPages} getPage={getPage} />

    </div>
  );
}

export default OrderManagmentContainer;
