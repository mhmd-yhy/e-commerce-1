import React from "react";
import { Link } from "react-router-dom";
const OrderCard = ({ order_ID, user, isPaid, isDelivered, id, paymentMethodType, totalOrderPrice }) => {
  return (
    <Link to={`/admin/orders/${order_ID}`} className="bg-white p-2 shadow-md rounded-lg flex gap-3 my-3 lg:my-0" >
      <div>
        <div className="py-2 text-xs text-neutral-400 font-bold my-1">
          طلب رقم #{id}
        </div>
        <div className="flex gap-2">
          <h2 className="text-neutral-600 text-sm my-1">
            طلب من : {user.name}
          </h2>
          <h2 className="text-blue-500 text-sm my-1">
            <span>({user.email})</span>
          </h2>
        </div>

        <div className="flex justify-between items-center p-2 text-neutral-400 font-bold my-1">
          <div className="grid grid-cols-2 items-center md:flex lg:grid xl:flex gap-5">
            <div>
              <span className="text-neutral-600 text-sm">الدفع: </span>
              <span className="text-neutral-400 text-xs">{isPaid ? "تم الدفع" : "لم يتم الدفع"}</span>
            </div>
            <div>
              <span className="text-neutral-600 text-sm">التوصيل: </span>
              <span className="text-neutral-400 text-xs">{isDelivered ? "تم التوصيل" : "قيد التنفيذ"}</span>
            </div>
            <div>
              <span className="text-neutral-600 text-sm">طريقة الدفع: </span>
              <span className="text-neutral-400 text-xs">{paymentMethodType}</span>
            </div>
            <div className="text-yellow-700 font-bold text-base ">{totalOrderPrice} ليرة</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
