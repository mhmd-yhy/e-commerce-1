import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfilCard = ({ profileData }) => {
  const { _id, name, phone, email } = profileData;
  return (
    <div className="bg-white p-2 rounded-lg shadow-md col-span-1">
      <div className="my-4 mt-2 flex justify-between">
        <div>
          <span className="text-base text-neutral-600 ml-2">الاسم:</span>
          <span className="text-base text-neutral-400 ml-2">{profileData.name}</span>
        </div>
        <Link to={`/user/edit-profile/${_id}?name=${name}&phone=${phone}&email=${email}`} className="flex items-center gap-1 text-sm text-neutral-400 font-bold" >
          <FaEdit className="text-xl" />
          تعديل
        </Link>
      </div>
      <div className="my-4">
        <span className="text-base text-neutral-600 ml-2">رقم الهاتف:</span>
        <span className="text-base text-neutral-400 ml-2">{profileData.phone}</span>
      </div>
      <div className="my-4">
        <span className="text-base text-neutral-600 ml-2">الايميل:</span>
        <span className="text-base text-neutral-400 ml-2">{profileData.email}</span>
      </div>
    </div>
  );
};

export default ProfilCard;
