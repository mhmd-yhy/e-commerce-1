import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import VerifyResetCodeHook from "../../Custom Hooks/auth/VerifyResetCodeHook";

export default function VerifyResetCode() {
  const [verifyCode, onChangeVerifyCode, onClickSubmit] = VerifyResetCodeHook();
  return (
    <div
      className="login flex justify-center pt-24 px-10"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <div className="sm:w-96 ">
        <h2 className="text-neutral-600 font-bold">
           تم إرسال كود التحقق إلى بريدك الإلكتروني , يرجى كتابة الكود بشكل صحيح.
        </h2>
        <div className="mt-2 rounded-md">
          <input
            name="verifycode"
            type="text"
            value={verifyCode}
            onChange={onChangeVerifyCode}
            placeholder="كود التحقق"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />
          <button onClick={onClickSubmit} className="text-stone-50 bg-neutral-800 rounded-lg py-1.5 w-full duration-500 hover:text-neutral-400 mt-4">
            تغيير كلمة المرور
          </button>
          <div className="flex justify-between items-center gap-4 mt-2 font-bold text-xs">
            <NavLink to={"/login"}>
              <span className="text-blue-700 cursor-pointer block">صفحة تسجيل الدخول</span>
            </NavLink>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
