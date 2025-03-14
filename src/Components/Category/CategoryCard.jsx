import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ _id, title, img, keyBackground }) {
  return (
    <Link to={`/products/category/${_id}`} className="m-auto relative cursor-pointer">
      <div
        className={`slider-background${keyBackground} w-32 h-32 rounded-full opacity-50`}
      ></div>
      <img
        src={img}
        alt=""
        className="h-24 w-28 absolute top-4 left-1/2 -translate-x-1/2"
      />
      <div className="text-center text-lg text-neutral-600 font-semibold">
        {title}
      </div>
    </Link>
  );
}
