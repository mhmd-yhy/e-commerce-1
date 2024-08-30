import React from "react";
import UserOrderItem from "./UserOrderItem";

const UserOrderCard = () => {
  return (
    <div className="bg-white rounded-lg p-2 my-3">
      <div className="text-xs text-neutral-400 font-bold my-1">
        <span className="">طلب رقم #2321</span>
      </div>
      <UserOrderItem />
      <UserOrderItem />
      <div className="flex justify-between py-2 text-xs text-neutral-400 font-bold my-1">
        <div className="">
          <span className="text-neutral-600 text-lg">الحالة: </span>
          <span className="text-neutral-400 text-base">قيد التنفيذ</span>
        </div>
        <div className="text-neutral-600 font-bold text-lg">600 جنيه</div>
      </div>
    </div>
  );
};

export default UserOrderCard;
