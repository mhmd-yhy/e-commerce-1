import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const AdressCard = ({ _id, alias, details, phone, onClickDelete, onClickEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 my-2">
      <div className="flex justify-between items-center">
        <div className="text-lg text-neutral-600">{alias}</div>
        <div className="flex gap-2 items-center text-sm text-neutral-400 font-bold">
          <Link to={`/user/edit-address/${_id}`} className="cursor-pointer flex items-center gap-1" >
            <FaEdit className="text-xl" />
            تعديل
          </Link>
          <span onClick={() => onClickDelete(_id)} className="cursor-pointer flex items-center gap-1">
            <MdDeleteOutline className="text-xl" />
            إزالة
          </span>
        </div>
      </div>
      <p className="text-sm text-neutral-600 my-2">
        {details}
      </p>
      <div>
        <span className="text-neutral-600">رقم الهاتف: </span>
        <span className="text-sm text-neutral-400">{phone}</span>
      </div>
    </div>
  );
};

export default AdressCard;
