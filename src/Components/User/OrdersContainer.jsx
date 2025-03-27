import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import UserOrderCard from "./UserOrderCard";
import GetAll_Orders from "../../Custom Hooks/order/GetAll_Orders";
import Pagination from "../Utility/Pagination";
import { Link } from "react-router-dom";
function OrdersContainer() {
  const [ordersArray, numberOfPages, getPage] = GetAll_Orders();
  return (
    <div className="min-h-96 max-w-2xl">
      <SubTitle title={"إدارة الطلبات"} />
      <div className="my-5 min-h-96">
        {ordersArray.length > 0
          ? ordersArray.map((order, i) => <UserOrderCard key={i} cartItems={order.cartItems} isPaid={order.isPaid} isDelivered={order.isDelivered} id={order.id} paymentMethodType={order.paymentMethodType} totalOrderPrice={order.totalOrderPrice} />)
          : <div className="text-neutral-600 text-xl flex justify-center">لم تقم بشراء أي منتج.<Link to={"/products"} className="text-blue-600 mx-1"> انقر للتسوق...</Link></div>}
      </div>
      {ordersArray.length > 0 && <Pagination pageCount={numberOfPages} getPage={getPage} />}
    </div>
  );
}

export default OrdersContainer;
