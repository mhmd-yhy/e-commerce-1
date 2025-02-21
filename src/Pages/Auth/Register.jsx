import React from "react";
import { NavLink } from "react-router-dom";
import RegisterHook from "../../Custom Hooks/auth/RegisterHook";
import { ToastContainer } from "react-toastify";

export default function Register() {
  const [registerForm, onChange_name, onChange_email, onChange_phone, onChange_password, onChange_confirmPassword, onClickSubmit] = RegisterHook();
  return (
    <div
      className="login flex justify-center pt-24"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <div className="sm:w-96 ">
        <h2 className="text-3xl text-neutral-600 font-bold  text-center">
          تسجيل حساب جديد
        </h2>
        <div className="mt-2 rounded-md">
          <input
            value={registerForm.name}
            onChange={onChange_name}
            name="text"
            type="text"
            placeholder="اسم المستخدم"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />
          <input
            value={registerForm.email}
            onChange={onChange_email}
            name="email"
            type="email"
            placeholder="الإيميل"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />
          <input
            value={registerForm.phone}
            onChange={onChange_phone}
            name="tel"
            type="tel"
            placeholder="رقم الهاتف"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />
          <input
            value={registerForm.password}
            onChange={onChange_password}
            name="password"
            type="password"
            placeholder="كلمة السر"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />
          <input
            value={registerForm.confirmPassword}
            onChange={onChange_confirmPassword}
            name="password"
            type="password"
            placeholder=" تأكيد كلمة السر"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />

          <button onClick={onClickSubmit} className="text-stone-50 bg-neutral-800 rounded-lg py-1.5 w-full duration-500 hover:text-neutral-400 mt-4">
            تسجيل حساب
          </button>
          <p className="text-center text-sm mt-2 text-neutral-600 font-bold">
            لديك حساب بالفعل ؟ {" "}
            <NavLink to={"/login"}>
              <span className="text-red-400 cursor-pointer">اضغط هنا</span>
            </NavLink>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
