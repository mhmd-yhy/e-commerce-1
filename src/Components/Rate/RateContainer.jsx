import React from "react";
import { FaStar } from "react-icons/fa";
import RatePost from "./RatePost";
import RateItem from "./RateItem";
import RateItemsHook from "../../Custom Hooks/rate/RateItemsHook";
import Pagination from "../Utility/Pagination";
import ModalDelete from "../Utility/ModalDelete";
import DeleteRateItemHook from "../../Custom Hooks/rate/DeleteRateItemHook";
import EditRateItemHook from "../../Custom Hooks/rate/EditRateItemHook";
import ModalEdit from "../Utility/ModalEdit";

const RateContainer = () => {
  const [allRatings, pageCount, getPage, rateAvg, rateQty] = RateItemsHook();
  const [onClickDelete, modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete] = DeleteRateItemHook();
  const [onClickEdit, modalMoodEdit, closeModalEdit, ratingForm, onChange_ReviewComment, onChange_RateStars, onAcceptanceEdit, msgEdit] = EditRateItemHook();
  return (
    <div className="ratings p-2 bg-white rounded-lg border border-neutral-400 shadow-md">
      <h2 className="font-bold text-xl">
        التقيمات{" "}
        <span className="text-yellow-400 font-bold text-sm mx-1">
          {rateAvg && rateAvg.toFixed(1)}
          <FaStar className="ml-1 inline" />
        </span>
        <span className="text-neutral-400 text-xs">({rateQty} تقييم)</span>
      </h2>
      <RatePost />

      {
        allRatings.results !== 0
          ? (allRatings.data && allRatings.data.map((data, i) => <RateItem key={i} itemID={data._id} user={data.user.name} userID={data.user._id} rating={data.rating} review={data.review} onClickDelete={onClickDelete} onClickEdit={onClickEdit} />))
          : (<div className="text-neutral-800 font-bold text-xl text-center py-3">لا يوجد أي تقييم</div>)
      }

      {allRatings.results !== 0 && <Pagination pageCount={pageCount} getPage={getPage} />}
      <ModalDelete modalMoodDelete={modalMoodDelete} closeModalDelete={closeModalDelete} onAcceptanceDelete={onAcceptanceDelete} msgDelete={msgDelete} />

      <ModalEdit modalMoodEdit={modalMoodEdit} closeModalEdit={closeModalEdit} ratingForm={ratingForm} onChange_ReviewComment={onChange_ReviewComment} onChange_RateStars={onChange_RateStars} onAcceptanceEdit={onAcceptanceEdit} msgEdit={msgEdit} />
    </div>
  );
};

export default RateContainer;
