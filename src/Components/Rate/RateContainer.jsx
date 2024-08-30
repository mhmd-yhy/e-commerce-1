import React from "react";
import { FaStar } from "react-icons/fa";
import RatePost from "./RatePost";
import RateItem from "./RateItem";
const RateContainer = () => {
  return (
    <div className="ratings p-2 bg-white rounded-lg border border-neutral-400 shadow-md">
      <h2 className="font-bold text-xl">
        التقيمات{" "}
        <span className="text-yellow-400 font-bold text-sm mx-1">
          4.3 <FaStar className="ml-1 inline" />
        </span>
        <span className="text-neutral-400 text-xs">(160 تقييم)</span>
      </h2>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <div className="my-4 text-center">
        <button
          disabled
          className="text-base text-neutral-800 bg-stone-50 py-1 px-3 border border-neutral-400 rounded-lg ml-4 duration-500"
        >
          السابق
        </button>
        <button className="text-base text-neutral-800 bg-stone-50 py-1 px-3 border border-neutral-400 rounded-lg ml-4 duration-500 hover:bg-neutral-800 hover:text-stone-50">
          التالي
        </button>
      </div>
    </div>
  );
};

export default RateContainer;
