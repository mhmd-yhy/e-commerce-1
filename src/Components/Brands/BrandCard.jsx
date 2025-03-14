import React from "react";
import { Link } from "react-router-dom";

export default function BrandCard({ _id, img }) {
  return (
    <Link to={`/products/brand/${_id}`} className="bg-white m-auto">
      <img src={img} alt="" className="w-40 h-40" />
    </Link>
  );
}
