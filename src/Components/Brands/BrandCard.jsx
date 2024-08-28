import React from "react";

export default function BrandCard({ img }) {
  return (
    <div className="bg-white m-auto">
      <img src={img} alt="" className="w-56" />
    </div>
  );
}
