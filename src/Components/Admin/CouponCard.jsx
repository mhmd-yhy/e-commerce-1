import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const CouponCard = ({ itemID, title, date, discount, onClickDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 my-2">
      <div className="flex justify-between items-center">
        <div className="text-sm text-neutral-600">اسم الكوبون :{title}</div>
        <div className="flex gap-2 items-center text-sm text-neutral-400 font-bold">
          <Link to={`/admin/edit-coupon/${itemID}`} className="cursor-pointer flex items-center gap-1" >
            <FaEdit className="text-lg" />
            تعديل
          </Link>
          <span onClick={() => onClickDelete(itemID)} className="cursor-pointer flex items-center gap-1">
            <MdDeleteOutline className="text-xl" />
            إزالة
          </span>
        </div>
      </div>
      <p className="text-sm text-neutral-600 my-2">

      </p>
      <div>
        <span className="text-neutral-600">تاريخ الإنتهاء : </span>
        <span className="text-sm text-neutral-400">{date}</span>
      </div>
      <div>
        <span className="text-neutral-600">نسبة الخصم : </span>
        <span className="text-sm text-neutral-400">{discount} %</span>
      </div>

    </div>
  );
};

export default CouponCard;
