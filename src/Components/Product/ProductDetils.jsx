import React from "react";
import { useParams } from "react-router";
import ViewProductDetailsHook from "../../Custom Hooks/product/ViewProductDetailsHook";

export default function ProductDetils() {
  const { id } = useParams();
  const [details] = ViewProductDetailsHook(id);

  return (
    <div className="product-details lg:col-span-2 xl:col-span-3 lg:px-8 xl:px-20">
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">
          {details.dataText.category} :
        </h2>
        <p className="text-base text-neutral-600">
          {details.dataText.title}<span className="text-yellow-400 font-bold"> {details.dataText.ratingsQuantity}</span>
        </p>
      </div>
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">
          الماركة :{" "}
          <span className="text-lg font-bold text-neutral-600">{details.dataText.brand}</span>
        </h2>
        <div className="">
          {
            details.dataText.availableColors.map((color, i) =>
              <span
                key={i}
                className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
                style={{ backgroundColor: color }}
              ></span>)
          }
        </div>
      </div>
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">المواصفات :</h2>
        <p className="text-base text-neutral-600">
          {details.dataText.description}
        </p>
      </div>
      <div className="mb-3">
        <span className="text-base text-neutral-600 bg-white py-2 px-3 border border-neutral-400 rounded-lg ml-4">
          {details.dataText.price} جنية
        </span>
        <button className="text-base text-white bg-black py-1 px-3 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400">
          اضف للعربة
        </button>
      </div>
    </div>
  );
}
// rafce
