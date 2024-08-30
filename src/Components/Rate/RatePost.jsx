import React from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
const RatePost = () => {
  const rateStars = {
    size: 20,
    count: 5,
    color: "#5F5F66",
    activeColor: "rgb(250 204 21)",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <FaRegStar />,
    halfIcon: <FaStarHalfAlt />,
    filledIcon: <FaStar />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };
  return (
    <div className="border-b border-neutral-300 pb-4">
      <div className="flex gap-2 items-center text-sm md:px-10 my-3">
        <span className="text-neutral-600 font-semibold">علي محمد</span>
        <ReactStars {...rateStars} />
      </div>
      <div className="text-left md:px-10">
        <textarea
          className="bg-stone-100 w-full rounded-lg mt-2 border outline-none pr-2 text-neutral-600"
          rows={3}
        ></textarea>
        <button className="text-base w--24 text-white bg-black py-1 px-3 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400">
          اضف تعليق
        </button>
      </div>
    </div>
  );
};

export default RatePost;
