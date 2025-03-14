import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import ResetUserPasswordHook from "../../Custom Hooks/profile/ResetUserPasswordHook";
function ProfilPassword() {
  const [resetPasswordForm, onChange_OldPassword, onChange_NewPassword, onChange_ConfirmPassword, viewBTNCancel, handle_Cancel, handle_Submit] = ResetUserPasswordHook();
  const { oldPassword, newPassword, confirmPassword } = resetPasswordForm;
  return (
    <div className="min-h-96 max-w-2xl">
      <SubTitle title={"تعديل كلمة المرور"} />
      <div className="my-5 min-h-96">
        <div className="my-2">
          <input
            value={oldPassword}
            onChange={onChange_OldPassword}
            type="password"
            placeholder="كلمة المرور القديمة"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <input
            value={newPassword}
            onChange={onChange_NewPassword}
            type="password"
            placeholder="كلمة المرور الجديدة"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />
          <input
            value={confirmPassword}
            onChange={onChange_ConfirmPassword}
            type="password"
            placeholder="تأكيد كلمة المرور"
            className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          />

        </div>
        <div className="text-end">
          {
            viewBTNCancel() && <button onClick={handle_Cancel} className="text-base mx-1 text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400 ">
              إلغاء
            </button>
          }

          <button onClick={handle_Submit} className="text-base mx-1 text-white bg-neutral-800 py-3 px-4 border border-neutral-400 rounded-lg duration-500 hover:text-neutral-400 ">
            حفظ كلمة المرور
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProfilPassword;
