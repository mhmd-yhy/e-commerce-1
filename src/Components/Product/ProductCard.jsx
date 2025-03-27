import React from "react";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ img, title, price, priceDiscount, currency, rate, id, OnClick_AddToWishList, OnClick_RemoveFromWishList, isWish }) {
  return (
    <div className="card p-3 bg-white shadow-md rounded-lg max-h-96">
      <Link to={`/products/${id}`}>
        <img src={img.startsWith("http") ? img : `http://127.0.0.1:8000/products/${img}`} alt="" className="w-44 h-44 m-auto cursor-pointer" />
      </Link>
      <div className="flex justify-between items-center mt-3">
        <div className="text-neutral-600 text-sm sm:text-lg">{title}</div>
        <i className="text-neutral-600 float-end cursor-pointer text-sm sm:text-lg">
          {isWish ? <FaHeart onClick={() => OnClick_RemoveFromWishList(id)} className="text-red-600 text-2xl" /> : <FaRegHeart onClick={() => OnClick_AddToWishList(id)} className="text-xl" />}
        </i>
      </div>
      <div className="alt-sec flex justify-between items-center mt-2">
        <div className="text-yellow-500 text-sm sm:text-lg">
          <i className="inline-block ml-1">
            <FaStar />
          </i>
          <span>{rate}</span>
        </div>
        <div className="text-sm sm:text-lg font-bold text-neutral-600">
          <span className={`mx-1 ${priceDiscount > 1 && "mx-2 line-through text-red-600 text-base"}`}>{price} {currency}</span>
          {priceDiscount > 1 && <span>{priceDiscount} {currency}</span>}
        </div>
      </div>
    </div>
  );
}
