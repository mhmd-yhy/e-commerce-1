import React from "react";
import SubTitle from "../Utility/SubTitle";
import EditUserProfileHook from "../../Custom Hooks/profile/EditUserProfileHook";
import { ToastContainer } from "react-toastify";
function EditProfilContainer() {
  const [profile, onChange_Name, onChange_Phone, onChange_Email, handle_Cancel, handle_Submit] = EditUserProfileHook();
  return (
    <div className="min-h-96 max-w-2xl">
      <ToastContainer />
      <SubTitle title={"تعديل الملف الشخصي"} />
      <div className="my-5 min-h-96">
        <div className="my-2">
          <input
            value={profile.name} onChange={onChange_Name}
            type="text"
            placeholder="الاسم"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <input
            value={profile.phone} onChange={onChange_Phone}
            type="number"
            placeholder="رقم الهاتف"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <input
            value={profile.email} onChange={onChange_Email}
            type="email"
            placeholder="الإيميل"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
        </div>
        <div className="text-end">
          <button onClick={handle_Cancel} className="text-base mx-1 text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400 ">
            إلغاء
          </button>

          <button onClick={handle_Submit} className="text-base mx-1 text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400 ">
            حفظ التغييرات
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilContainer;
