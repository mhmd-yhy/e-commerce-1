import React from "react";

const ClientDetails = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md col-span-1">
      <h2 className="text-lg text-neutral-600 font-extrabold my-2">
        تفاصيل العميل
      </h2>
      <div className="my-2">
        <div className="my-1">
          <span className="text-base text-neutral-600 ml-2">الاسم:</span>
          <span className="text-base text-neutral-400 ml-2">احمد عبدالله</span>
        </div>
        <div className="my-1">
          <span className="text-base text-neutral-600 ml-2">رقم الهاتف:</span>
          <span className="text-base text-neutral-400 ml-2">0021313432423</span>
        </div>
        <div className="my-1">
          <span className="text-base text-neutral-600 ml-2">الايميل:</span>
          <span className="text-base text-neutral-400 ml-2">
            ahmed@gmail.com
          </span>
        </div>
      </div>
      <div className="py-2 my-2 text-neutral-600 text-lg border-y border-neutral-300 text-center">
        المجموع ٤٠٠٠ جنيه
      </div>
      <div className="text-center my-2">
        <select className="bg-stone-50 text-neutral-400 border border-neutral-300 py-2 px-4 rounded-md outline-none mx-2">
          <option>حالة الطلب</option>
          <option>قيد التنفيذ</option>
          <option>تم الإنتهاء</option>
        </select>
        <button className="text-base text-white bg-neutral-800 py-1 px-3 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400">
          حفظ
        </button>
      </div>
    </div>
  );
};

export default ClientDetails;
