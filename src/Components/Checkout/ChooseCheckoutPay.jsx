import React from "react";
import GetAllCartItemsHook from "../../Custom Hooks/shopping cart/GetAllCartItemsHook";
import Apply_CouponToCartHook from "../../Custom Hooks/shopping cart/Apply_CouponToCartHook";
import GetAllAdressHook from "../../Custom Hooks/adress/GetAllAdressHook";
import Create_OrderHook from "../../Custom Hooks/order/Create_OrderHook";
import { Link } from "react-router-dom";

const ChooseCheckoutPay = () => {
  const [, , totalCartPrice, cartID] = GetAllCartItemsHook();
  const [, , , totalAfterDiscount] = Apply_CouponToCartHook();
  const [allAdress] = GetAllAdressHook();
  const [onSelect_PaymentMethod, onSelectAdress, onClick_Complete] = Create_OrderHook();
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-3 my-4">
        <div className="my-5">
          <label className="text-neutral-600 ">
            <input type="radio" className="ml-2" name="pay" data-paymentmethod={"card"} onChange={onSelect_PaymentMethod} />
            الدفع عن طريق البطاقه الائتمانية
          </label>
        </div>
        <div className="my-5">
          <label className="text-neutral-600 ">
            <input type="radio" className="ml-2" name="pay" data-paymentmethod={"cash"} onChange={onSelect_PaymentMethod} />
            الدفع عند الاستلام
          </label>
        </div>

        <select onChange={onSelectAdress} className="bg-stone-50 text-neutral-600 border border-neutral-400 py-2 pr-2 rounded-md outline-none w-full">
          <option value={0}>اختر عنوان الشحن</option>
          {
            allAdress.data ? (allAdress.data.map((value, i) =>
              <option key={i} value={value._id}>
                {value.alias} ({value.details.length > 20 ? value.details.slice(0, 25) + "..." : value.details})
              </option>)) : null
          }
        </select>
        {allAdress.data?.length === 0 && <p className="text-neutral-600 mt-2"> لم تقم بإضافة أي عنوان لإضافة عنوان جديد<Link to={"/user/addresses"} className={`text-red-600 mx-1`}>انقر هنا ...</Link></p>}

      </div>
      <div className="flex justify-end gap-3 my-3">
        <div className="text-base text-center text-neutral-600 bg-white py-1 px-3 border border-neutral-400 rounded-lg">
          {totalAfterDiscount !== 0 ? totalAfterDiscount : totalCartPrice} ليرة
        </div>
        <div onClick={() => onClick_Complete(cartID)} className="text-base cursor-pointer rounded-lg text-white bg-neutral-800 py-1 px-3 duration-500 hover:text-neutral-400">
          إتمام الشراء
        </div>
      </div>
    </div>
  );
};

export default ChooseCheckoutPay;
