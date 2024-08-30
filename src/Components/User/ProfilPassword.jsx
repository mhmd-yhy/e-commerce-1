import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
function ProfilPassword() {
  return (
    <div className="min-h-96 max-w-2xl">
      <SubTitle title={"تعديل العنوان"} />
      <div className="my-5 min-h-96">
        <div className="my-2">
          <input
            type="text"
            placeholder="كلمة المرور القديمة"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <input
            type="text"
            placeholder="كلمة المرور الجديدة"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
        </div>
        <div className="text-end">
          <button className="text-base text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400 ">
            حفظ كلمة المرور
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilPassword;
