import React from "react";
import mobile from "../../assets/images/mobile.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
const CartItem = () => {
  return (
    <div className="my-3 p-2 bg-white rounded-lg border border-neutral-400 flex gap-2">
      <img src={mobile} alt="" className="h-36" />
      <div className="desc w-full">
        <h2 className="flex justify-between items-center text-sm text-neutral-400 font-semibold mb-2">
          <span>الالكترونيات</span>
          <span className="flex gap-2 items-center cursor-pointer duration-500 hover:text-neutral-600">
            إزالة <RiDeleteBinLine />
          </span>
        </h2>
        <p className="text-neutral-600 my-2">
          آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
        </p>
        <div className="rate flex gap-2 text-yellow-400 font-bold my-2">
          4.5 <FaStar />
        </div>
        <div className="flex gap-2 text-neutral-400 font-semibold my-2">
          <span>الماركة :</span>
          <span className="text-neutral-800 text-lg">ابل</span>
        </div>
        <div>
          <span
            className="p-3 py-1 rounded-full my-2"
            style={{ backgroundColor: "red" }}
          ></span>
        </div>
        <div className="flex justify-between items-center text-neutral-400 font-semibold my-2">
          <div className="flex gap-2">
            <span>الكميه :</span>
            <input
              type="number"
              className="w-12 bg-stone-50 border outline-none pr-2 text-neutral-600"
            />
          </div>
          <div className="text-neutral-600 text-bold text-lg">300 جنيه</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
