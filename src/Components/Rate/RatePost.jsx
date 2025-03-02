import React from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import UseAddRating from "../../Custom Hooks/rate/UseAddRating";
const RatePost = () => {
  const [ratingForm, onChange_ReviewComment, onChange_RateStars, onSubmit] = UseAddRating();
  let userName = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")).name : "";
  const rateStars = {
    size: 20,
    count: 5,
    color: "#5F5F66",
    activeColor: "rgb(250 204 21)",
    value: ratingForm.rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <FaRegStar />,
    halfIcon: <FaStarHalfAlt />,
    filledIcon: <FaStar />,
    onChange: (newValue) => {
      onChange_RateStars(newValue);
    },
  };
  return (
    <div className="border-b border-neutral-300 pb-4">
      <div className="flex gap-2 items-center text-sm md:px-10 my-3">
        <span className="text-neutral-600 font-semibold text-lg">{userName}</span>
        <ReactStars {...rateStars} />
      </div>
      <div className="text-left md:px-10">
        <textarea
          value={ratingForm.review}
          onChange={onChange_ReviewComment}
          className="bg-stone-100 w-full rounded-lg mt-2 border outline-none pr-2 text-neutral-600"
          rows={3}
        ></textarea>
        <button onClick={onSubmit} className="text-base text-white bg-black mt-1 py-1 px-3 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400">
          اضف تعليق
        </button>
      </div>
    </div>
  );
};

export default RatePost;
