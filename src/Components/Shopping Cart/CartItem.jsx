import React, { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Edit_CartItemQuantityHook from "../../Custom Hooks/shopping cart/Edit_CartItemQuantityHook";
const CartItem = ({ itemDetailes, onClick_removeItem }) => {
  const { _id, color, count, price, product } = itemDetailes;
  const [quantity, onChange_Quantity, onClick_Edit] = Edit_CartItemQuantityHook();
  useEffect(() => {
    onChange_Quantity(count);
  }, []);

  return (
    <div className="my-3 p-2 bg-white rounded-lg border border-neutral-400 flex gap-2">
      <Link to={`/products/${product?._id}`}>
        <img src={product?.imageCover?.startsWith("http") ? product?.imageCover : `http://127.0.0.1:8000/products/${product?.imageCover}`} alt="" className="h-36 w-40 sm:w-52" />
      </Link>
      <div className="desc w-full">
        <h2 className="flex justify-between items-center text-sm text-neutral-400 font-semibold mb-2">
          <span>{product?.title}</span>
          <span onClick={() => onClick_removeItem(_id)} className="flex gap-2 items-center cursor-pointer duration-500 hover:text-neutral-600">
            إزالة <RiDeleteBinLine />
          </span>
        </h2>
        <Link to={`/products/${product?._id}`}>
          <div className="flex justify-between md:justify-between items-center sm:w-1/2 md:w-full lg:w-1/2">
            <div className="flex gap-2 text-neutral-400 font-semibold my-2">
              <span>الماركة :</span>
              <span className="text-neutral-800 text-sm">{product?.brand?.name}</span>
            </div>
            <div className="rate flex items-center text-yellow-400 font-bold my-2">
              {product?.ratingsAverage ? product.ratingsAverage : 0} <FaStar />
            </div>
          </div>
          <div>
            <span
              className="p-3 py-1 rounded-full my-2"
              style={{ backgroundColor: color }}
            ></span>
          </div>
        </Link>
        <div className="sm:flex md:block lg:flex justify-between items-center text-neutral-400 font-semibold my-2">
          <div className="flex items-center gap-2">
            <div>
              <span>الكميه :</span>
              <input value={quantity} onChange={(e) => onChange_Quantity(e.target.value)}
                type="number" max={100} min={1} className="w-12 bg-stone-50 border outline-none pr-2 text-neutral-600" />
            </div>
            <button onClick={() => onClick_Edit(_id)} className="text-xs text-white bg-blue-700 rounded-md px-1 py-1 font-extralight duration-500 hover:text-neutral-400">
              تطبيق
            </button>
          </div>
          <div className="text-end mt-2 text-neutral-600 text-bold text-lg">{price} ليرة</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
