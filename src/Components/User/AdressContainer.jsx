import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import AdressCard from "./AdressCard";
import { Link } from "react-router-dom";
import GetAllAdressHook from "../../Custom Hooks/adress/GetAllAdressHook";
import DeleteAdressHook from "../../Custom Hooks/adress/DeleteAdressHook";
import ModalDelete from "../Utility/ModalDelete";
import { ToastContainer } from "react-toastify";

const AdressContainer = () => {
  const [allAdress] = GetAllAdressHook();
  const [onClickDelete, modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete] = DeleteAdressHook();

  return (
    <div className="min-h-96">
      <SubTitle title={"دفتر العناوين"} />

      {allAdress.data && allAdress.data.map((adress, i) => <AdressCard key={i} _id={adress._id} alias={adress.alias} details={adress.details} phone={adress.phone} onClickDelete={onClickDelete} />)}
      <div className="text-center py-2 my-4">

        <Link
          to={"/user/add-address"}
          className="text-base text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 "
        >
          إضافة عنوان جديد
        </Link>
      </div>
      <ModalDelete modalMoodDelete={modalMoodDelete} closeModalDelete={closeModalDelete} onAcceptanceDelete={onAcceptanceDelete} msgDelete={msgDelete} />
      <ToastContainer />
    </div>
  );
};

export default AdressContainer;
