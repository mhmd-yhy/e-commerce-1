import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "../../Custom Hooks/auth/ForgotPasswordHook";

export default function ForgotPassword() {
  const [email, onChangeEmail, onClickSubmit] = ForgetPasswordHook();
  return (
    <div
      className="login flex justify-center pt-24"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <div className="sm:w-96 ">
        <h2 className="text-3xl text-neutral-600 font-bold  text-center">
          نسيت كلمة المرور
        </h2>
        <div className="mt-2 rounded-md">
          <input
            name="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="الإيميل"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />
          <button onClick={onClickSubmit} className="text-stone-50 bg-neutral-800 rounded-lg py-1.5 w-full duration-500 hover:text-neutral-400 mt-4">
            أرسل الكود
          </button>
          <div className="flex justify-between items-center gap-4 mt-2 font-bold text-xs">
            <p className="text-neutral-600 ">
              ليس لديك حساب ؟{" "}
              <NavLink to={"/register"}>
                <span className="text-red-400 cursor-pointer">اضغط هنا</span>
              </NavLink>
            </p>
            <NavLink to={"/login"}>
              <span className="text-blue-700 cursor-pointer block">تسجيل الدخول</span>
            </NavLink>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
