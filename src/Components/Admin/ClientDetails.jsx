import React from "react";

const ClientDetails = ({ userDetails, shippingAddress, totalOrderPrice, isPaid, isDelivered, paymentMethodType, onChange_status, onClick_Applay }) => {
  const { name, phone, email } = userDetails;
  return (
    <div className="bg-white p-2 rounded-lg shadow-md col-span-1">

      <div className="my-2">
        <h2 className="text-lg text-neutral-600 font-extrabold my-2">
          تفاصيل العميل
        </h2>
        <div className="my-1">
          <span className="text-neutral-600 ml-2">الاسم:</span>
          <span className="text-neutral-400 ml-2">{name}</span>
        </div>
        <div className="my-1">
          <span className="text-neutral-600 ml-2">رقم الهاتف:</span>
          <span className="text-neutral-400 ml-2">{phone}</span>
        </div>
        <div className="my-1">
          <span className="text-neutral-600 ml-2">الايميل:</span>
          <span className="text-neutral-400 ml-2">{email}</span>
        </div>
        <div className="my-1">
          <span className="text-neutral-600 ml-2">عنوان التسليم:</span>
          <span className="text-neutral-400 ml-2">{shippingAddress?.details}</span>
        </div>
        <div className="my-1">
          <span className="text-neutral-600 ml-2">رقم هاتف المستلم:</span>
          <span className="text-neutral-400 ml-2">{shippingAddress?.phone}</span>
        </div>
      </div>

      <div className="border-t border-neutral-300">
        <h2 className="text-lg text-neutral-600 font-extrabold my-2">
          تفاصيل الطلب
        </h2>
        <div className="flex justify-between items-center text-neutral-400">
          <div className="md:flex gap-3">
            <div>
              <span className="text-neutral-600 md:text-sm">الدفع: </span>
              <span className="text-neutral-400 md:text-xs">{isPaid ? "تم الدفع" : "لم يتم الدفع"}</span>
            </div>
            <div>
              <span className="text-neutral-600 md:text-sm">التوصيل: </span>
              <span className="text-neutral-400 md:text-xs">{isDelivered ? "تم التوصيل" : "قيد التنفيذ"}</span>
            </div>
            <div>
              <span className="text-neutral-600 md:text-sm">طريقة الدفع: </span>
              <span className="text-neutral-400 md:text-xs">{paymentMethodType}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-2 my-2 text-neutral-600 text-lg border-y border-neutral-300 text-center">
        المجموع : {totalOrderPrice} ليرة
      </div>
      {
        !isPaid || !isDelivered ? (<div className="text-center my-2">
          <select onChange={(e) => onChange_status(e.target.value)} className="bg-stone-50 text-neutral-400 border border-neutral-300 py-2 px-4 rounded-md outline-none mx-2">
            <option value={"0"}>حالة الطلب</option>
            {!isPaid && <option value={"تم الدفع"}>تم الدفع</option>}
            {!isDelivered && <option value={"تم التوصيل"}>تم التوصيل</option>}
          </select>
          <button onClick={onClick_Applay} className="text-base text-white bg-neutral-800 py-1 px-3 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400">
            حفظ
          </button>
        </div>)
          : null
      }
    </div>
  );
};

export default ClientDetails;
