import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const OrderDetailesCard = ({ color, count, price, product }) => {
  return (
    <Link to={`/products/${product.id}`} className="p-2 flex items-center gap-2 bg-white shadow-md rounded-lg my-3 lg:my-0">
      <img src={product.imageCover.startsWith("http") ? product.imageCover : `http://127.0.0.1:8000/products/${product.imageCover}`} alt="" className="w-32 sm:w-44 h-44 cursor-pointer" />
      <div>
        <p className="desc text-neutral-600 my-1 font-extrabold">
          {product.title}
        </p>
        <div className="text-yellow-500 flex text-sm my-1">
          <i className="ml-1">
            <FaStar />
          </i>
          <span>{product.ratingsQuantity}</span>
        </div>
        <div className="my-1">
          <span className="px-3 py-1 rounded-full border border-neutral-400 ml-2" style={{ backgroundColor: color }} ></span>
        </div>
        <div className="flex gap-3 items-center text-sm font-bold text-neutral-400 my-1">
          <div className="flex gap-2">
            <span>الكمية :</span>
            <span className="bg-stone-50 border outline-none px-2 rounded-full text-neutral-600">{count}</span>
          </div>
          <div className="text-neutral-600 font-bold text-xs sm:text-sm">{price} ليرة</div>
        </div>
      </div>
    </Link>
  );
};

export default OrderDetailesCard;
