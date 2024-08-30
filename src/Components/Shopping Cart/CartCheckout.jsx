import React from "react";
import { Link } from "react-router-dom";

function CartCheckout() {
  return (
    <div className="flex justify-center my-3">
      <div className="bg-white rounded-lg border border-neutral-400 p-4">
        <div className="flex">
          <input
            type="text"
            placeholder="كود الخصم"
            className="border border-neutral-400 text-center placeholder:text-sm placeholder:text-center p-3 focus:rounded-sm"
          />
          <button className="text-base text-white bg-black py-1 px-3 duration-500 hover:text-neutral-400">
            تطبيق
          </button>
        </div>
        <div className="my-3">
          <div className="text-base text-center text-neutral-600 bg-white py-2 px-3 border border-neutral-400 rounded-lg">
            34000 جنية
          </div>
        </div>
        <Link to={"/order/paymethoud"}>
          <div className="text-base text-center cursor-pointer rounded-lg text-white bg-black py-1 px-3 duration-500 hover:text-neutral-400">
            إتمام الشراء
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CartCheckout;
