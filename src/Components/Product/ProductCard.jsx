import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ img, title, price, currency, rate }) {
  return (
    <Link
      to={"/products/:id"}
      className="card p-3 bg-white shadow-md rounded-lg max-h-96 cursor-pointer"
    >
      <img src={img} alt="" className="" />
      <i className="text-neutral-600 float-end cursor-pointer text-sm sm:text-lg">
        <FaRegHeart />
      </i>
      <div className="text-neutral-600 text-sm sm:text-lg mt-2">{title}</div>
      <div className="alt-sec flex justify-between items-center mt-2">
        <div className="text-yellow-500 text-sm sm:text-lg">
          <i className="inline-block ml-1">
            <FaStar />
          </i>
          <span>{rate}</span>
        </div>
        <div className="text-sm sm:text-lg font-bold text-neutral-600">
          <span className="  ml-1">{price}</span>
          <span>{currency}</span>
        </div>
      </div>
    </Link>
  );
}
