import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import AdressCard from "./AdressCard";
import { Link } from "react-router-dom";
const AdressContainer = () => {
  return (
    <div className="min-h-96">
      <SubTitle title={"دفتر العناوين"} />
      <AdressCard />
      <AdressCard />
      <div className="text-center py-2 my-4">
        <Link
          to={"/user/add-address"}
          className="text-base text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 "
        >
          إضافة عنوان جديد
        </Link>
      </div>
    </div>
  );
};

export default AdressContainer;
