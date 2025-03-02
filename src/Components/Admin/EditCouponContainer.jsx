import React from "react";
import LoadingUI from "../Utility/LoadingUI";
import EditCouponHook from "../../Custom Hooks/coupon/EditCouponHook";
import { ToastContainer } from "react-toastify";

function EditCouponContainer() {
  const [editForm, OnChange_CouponName, OnChange_CouponDate, OnChange_CouponDiscount, handleSubmit, isLoading] = EditCouponHook();
  return (
    <div className="mb-16">
      <ToastContainer />
      <div className="flex justify-between items-center">
        <div className="title text-neutral-600 text-lg">تعديل كوبون</div>
        {
          isLoading ? <LoadingUI /> : null
        }

      </div>
      <div className="my-2">
        <input
          type="text" placeholder="اسم الكوبون"
          className="bg-transparent py-2 my-2 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
          value={editForm?.name}
          onChange={OnChange_CouponName}
        />
        <input
          type="date"
          className="bg-transparent py-2 pl-10 my-2 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
          value={editForm?.expire}
          onChange={OnChange_CouponDate}
        />
        <input
          type="number" max={100} min={0} placeholder="نسبة خصم الكوبون"
          className="bg-transparent py-2 my-2 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
          value={editForm?.discount}
          onChange={OnChange_CouponDiscount}
        />

        <button className="text-base float-end text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400 my-1"
          onClick={handleSubmit}>
          تعديل
        </button>
      </div>
    </div>
  );
}

export default EditCouponContainer;
