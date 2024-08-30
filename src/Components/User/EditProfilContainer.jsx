import React from "react";
import SubTitle from "../Utility/SubTitle";
function EditProfilContainer() {
  return (
    <div className="min-h-96 max-w-2xl">
      <SubTitle title={"تعديل الملف الشخصي"} />
      <div className="my-5 min-h-96">
        <div className="my-2">
          <input
            type="text"
            placeholder="الاسم"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <input
            type="number"
            placeholder="رقم الهاتف"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <input
            type="email"
            placeholder="الإيميل"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
        </div>
        <div className="text-end">
          <button className="text-base text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400 ">
            حفظ التغييرات
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilContainer;
