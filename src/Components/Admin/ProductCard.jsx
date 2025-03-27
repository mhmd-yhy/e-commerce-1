import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ id, img, title, price, priceDiscount, currency, rate, onClickDelete }) {
  return (
    <div className="card block p-3 bg-white shadow-md rounded-lg max-h-full"
    >
      <div className="flex justify-between">
        <span className="text-neutral-400 cursor-pointer" onClick={() => onClickDelete(id)}>ازاله</span>
        <Link to={`/admin/update-product/${id}`}>
          <span className="text-neutral-400 cursor-pointer">تعديل</span>
        </Link>
      </div>
      <Link to={`/products/${id}`}>
        <img src={img} alt="" className="h-52 m-auto my-2 cursor-pointer" />
      </Link>
      <div className="text-neutral-600 text-sm sm:text-base mt-4">{title}</div>
      <div className="alt-sec flex justify-between items-center mt-2">
        <div className="text-yellow-500 text-sm sm:text-base">
          <i className="inline-block ml-1">
            <FaStar />
          </i>
          <span>{rate}</span>
        </div>
        <div className="text-sm sm:text-base font-bold text-neutral-600">
          <span className={`mx-1 ${priceDiscount > 1 && "mx-2 line-through text-red-600 text-base"}`}>{price} {currency}</span>
          {priceDiscount > 1 && <span>{priceDiscount} {currency}</span>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
