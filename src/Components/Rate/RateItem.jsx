import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
const RateItem = ({ itemID, user, userID, rating, review, onClickDelete, onClickEdit }) => {

  let isUser = false;
  JSON.parse(localStorage.getItem("userData")) !== null
    && userID === JSON.parse(localStorage.getItem("userData"))._id && (isUser = true);
  return (
    <div className="p-4 pb-3 border-b border-b-neutral-300 text-sm">
      <h2 className="text-neutral-600 font-bold flex gap-2 items-center">
        {user}
        <span className="text-yellow-400 font-bold flex gap-2 items-center">
          {rating} <FaStar />
        </span>
      </h2>
      <div className="flex justify-between items-center">
        <p className="text-neutral-600">
          {review}
        </p>
        {
          isUser && <div className="flex gap-2 text-xl text-neutral-700">
            <RiDeleteBin7Line onClick={() => onClickDelete(itemID)} className="cursor-pointer duration-300 hover:text-neutral-500" />
            <FiEdit onClick={() => onClickEdit(itemID)} className="cursor-pointer duration-300 hover:text-neutral-500" />
          </div>
        }
      </div>
    </div>
  );
};

export default RateItem;
