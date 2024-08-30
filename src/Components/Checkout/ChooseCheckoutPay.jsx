import React from "react";

const ChooseCheckoutPay = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-3 my-4">
        <div className="my-5">
          <label className="text-neutral-600 ">
            <input type="radio" className="ml-2" name="pay" />
            الدفع عن طريق البطاقه الائتمانية
          </label>
        </div>
        <div className="my-5">
          <label className="text-neutral-600 ">
            <input type="radio" className="ml-2" name="pay" />
            الدفع عند الاستلام
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-3 my-3">
        <div className="text-base text-center text-neutral-600 bg-white py-1 px-3 border border-neutral-400 rounded-lg">
          34000 جنية
        </div>
        <div className="text-base cursor-pointer rounded-lg text-white bg-neutral-800 py-1 px-3 duration-500 hover:text-neutral-400">
          إتمام الشراء
        </div>
      </div>
    </div>
  );
};

export default ChooseCheckoutPay;
