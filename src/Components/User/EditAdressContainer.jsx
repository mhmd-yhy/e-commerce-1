import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import EditAdressHook from "../../Custom Hooks/adress/EditAdressHook";
import { ToastContainer } from "react-toastify";
function EditAdressContainer() {
  const [adressForm, onChange_AdressAlias, onChange_AdressDetails, onChange_Phone, handleOnSubmit] = EditAdressHook();
  return (
    <div className="min-h-96 max-w-2xl">
      <ToastContainer />
      <SubTitle title={"تعديل العنوان"} />
      <div className="my-5 min-h-96">
        <div className="my-2">
          <input
            value={adressForm.alias}
            onChange={onChange_AdressAlias}
            type="text"
            placeholder="تسمية العنوان (مثلاً المنزل - العمل)"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <textarea
            value={adressForm.details}
            onChange={onChange_AdressDetails}
            rows={3}
            type="text"
            placeholder="العنوان بالتفصيل"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <input
            value={adressForm.phone}
            onChange={onChange_Phone}
            type="text"
            placeholder="رقم الهاتف"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
        </div>
        <div className="text-end">
          <button onClick={handleOnSubmit} className="text-base text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400 ">
            تعديل العنوان
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditAdressContainer;
