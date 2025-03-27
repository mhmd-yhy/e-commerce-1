import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ClearAll_CartItems from "../../Custom Hooks/shopping cart/ClearAll_CartItems";
import ModalDelete from "../Utility/ModalDelete";
import Apply_CouponToCartHook from "../../Custom Hooks/shopping cart/Apply_CouponToCartHook";

function CartCheckout({ totalCartPrice }) {
  const [modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete, onClick_ClearAll] = ClearAll_CartItems();
  const [coupon, onChange_Coupon, onClick_Apply, totalAfterDiscount] = Apply_CouponToCartHook();
  const navigate = useNavigate();

  const onClick_Complete = () => { totalCartPrice !== 0 && navigate("/order/paymethoud"); };

  return (
    <div className="flex justify-center my-3">
      <div className="bg-white rounded-lg border border-neutral-400 p-4">
        <div className="flex">
          <input value={coupon} onChange={onChange_Coupon} type="text" placeholder="كود الخصم"
            className="border border-neutral-400 text-center placeholder:text-sm placeholder:text-center p-3 focus:rounded-sm" />
          <button onClick={onClick_Apply} className="text-base text-white bg-black py-1 px-3 duration-500 hover:text-neutral-400">
            تطبيق
          </button>
        </div>
        <div className="my-3">
          <div className="text-base text-center text-neutral-600 bg-white py-2 px-3 border border-neutral-400 rounded-lg">
            <span className={`${totalAfterDiscount !== 0 && "line-through text-red-600 ml-2"}`}> {totalCartPrice} ليرة </span>
            {
              totalAfterDiscount !== 0 && <span className={`${totalAfterDiscount !== 0 && "text-blue-700"}`}>{totalAfterDiscount} ليرة</span>
            }

          </div>
        </div>

        <div onClick={onClick_Complete} className={`text-base text-center cursor-pointer rounded-lg text-white bg-black py-1 px-3 duration-500 hover:text-neutral-400`}>
          إتمام الشراء
        </div>

        {totalCartPrice > 0 &&
          <div onClick={onClick_ClearAll} className="text-base text-center cursor-pointer rounded-lg text-white bg-red-600 py-1 px-3 mt-2 duration-500 hover:text-neutral-800">
            حذف جميع المنتجات
          </div>
        }

      </div>
      <ModalDelete modalMoodDelete={modalMoodDelete} closeModalDelete={closeModalDelete} onAcceptanceDelete={onAcceptanceDelete} msgDelete={msgDelete} />
    </div>
  );
}

export default CartCheckout;
