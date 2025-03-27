import React from "react";
import UserOrderItem from "./UserOrderItem";

const UserOrderCard = ({ cartItems, totalOrderPrice, id, isPaid, isDelivered, paymentMethodType }) => {
  return (
    <div className="bg-white rounded-lg p-2 my-3">
      <div className=" text-neutral-400 my-1">
        طلب رقم #<span className="font-extrabold mx-1">{id}</span>
      </div>

      {cartItems.length > 0 && cartItems.map((item, i) => <UserOrderItem key={i} color={item.color} count={item.count} price={item.price} product={item.product} />)}

      <div className="flex justify-between items-center p-2 text-xs text-neutral-400 font-bold my-1">
        <div className="md:flex gap-5">
          <div>
            <span className="text-neutral-600 text-sm md:text-base">الدفع: </span>
            <span className="text-neutral-400 text-xs md:text-sm">{isPaid ? "تم الدفع" : "لم يتم الدفع"}</span>
          </div>
          <div>
            <span className="text-neutral-600 text-sm md:text-base">التوصيل: </span>
            <span className="text-neutral-400 text-xs md:text-sm">{isDelivered ? "تم التوصيل" : "قيد التنفيذ"}</span>
          </div>
          <div>
            <span className="text-neutral-600 text-sm md:text-base">طريقة الدفع: </span>
            <span className="text-neutral-400 text-xs md:text-sm">{paymentMethodType}</span>
          </div>
        </div>
        <div className="text-neutral-600 font-bold text-lg">{totalOrderPrice} ليرة</div>
      </div>
    </div>
  );
};

export default UserOrderCard;
