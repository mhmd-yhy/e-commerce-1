import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import OrderDetailesCard from "./OrderDetailesCard";
import ClientDetails from "./ClientDetails";
import GetOne_Order from "../../Custom Hooks/order/GetOne_Order";
import Applay_Pay_And_DeliverHook from "../../Custom Hooks/order/Applay_Pay_And_DeliverHook";

function OrderDetailsContainer() {
  const [orderDetails] = GetOne_Order();
  const [onChange_status, onClick_Applay] = Applay_Pay_And_DeliverHook();

  return (
    <div>
      <SubTitle title={`الطلب رقم #${orderDetails?.id}`} />
      <div className="my-5 lg:grid grid-cols-2 gap-3">
        {orderDetails.cartItems && orderDetails.cartItems.map((item, i) => <OrderDetailesCard key={i} color={item.color} count={item.count} price={item.price} product={item.product} />)}
      </div>
      <div className="my-5 lg:grid grid-cols-2">
        {orderDetails.user && <ClientDetails userDetails={orderDetails.user} shippingAddress={orderDetails.shippingAddress} totalOrderPrice={orderDetails.totalOrderPrice} isPaid={orderDetails.isPaid} isDelivered={orderDetails.isDelivered} paymentMethodType={orderDetails.paymentMethodType} onChange_status={onChange_status} onClick_Applay={onClick_Applay} />}
      </div>
    </div>
  );
}

export default OrderDetailsContainer;
