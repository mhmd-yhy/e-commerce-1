import React from "react";

export default function Discount({ title, img }) {
  return (
    <div className="rounded-lg discount-backcolor flex justify-evenly items-center my-6">
      <div className="text-stone-50 text-xs md:text-lg font-semibold">{title}</div>
      <img src={img} alt="" className="w-44 sm:w-64 md:w-80" />
    </div>
  );
}
