import React from "react";
import mobile from "../../assets/images/mobile.png";
import { FaStar } from "react-icons/fa";
const UserOrderItem = () => {
  return (
    <div className=" p-2 flex justify-evenly items-center ">
      <img src={mobile} alt="" className="h-48" />
      <div>
        <p className="desc text-neutral-600 text-sm my-1">
          آيفون XRبذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم
        </p>
        <div className="text-yellow-500 flex text-sm my-1">
          <i className="ml-1">
            <FaStar />
          </i>
          <span>4.5</span>
        </div>
        <h2 className="text-sm text-neutral-400 font-bold my-1">
          الماركة :{" "}
          <span className="text-lg font-bold text-neutral-600">آبل</span>
        </h2>
        <div className="my-1">
          <span
            className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
            style={{ backgroundColor: "red" }}
          ></span>
        </div>
        <div className="flex justify-between items-center text-sm font-bold text-neutral-400 my-1">
          <div className="flex gap-2">
            <span>الكميه :</span>
            <input
              type="number"
              className="w-12 bg-stone-50 border outline-none pr-2 text-neutral-600"
            />
          </div>
          <div className="text-neutral-600 font-bold text-sm">300 جنيه</div>
        </div>
      </div>
    </div>
  );
};

export default UserOrderItem;
