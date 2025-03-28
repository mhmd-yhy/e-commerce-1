import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LoginHook from "../../Custom Hooks/auth/LoginHook";
import { ToastContainer } from "react-toastify";
import InternetConnectionHook from "../../Custom Hooks/internet/InternetConnectionHook";

export default function Login() {
  const [checkInternet] = InternetConnectionHook();
  useEffect(() => { checkInternet(); }, []);
  const [loginForm, onChange_email, onChange_password, onClickSubmit] = LoginHook();
  return (
    <div className="login flex justify-center pt-24" style={{ minHeight: "calc(100vh - 72px - 57px)" }} >
      <ToastContainer />
      <div className="sm:w-96 ">
        <h2 className="text-3xl text-neutral-600 font-bold  text-center">
          تسجيل الدخول
        </h2>
        <div className="mt-2 rounded-md">
          <input
            name="email"
            type="email"
            value={loginForm.email}
            onChange={onChange_email}
            placeholder="الإيميل"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />
          <input
            name="password"
            type="password"
            value={loginForm.password}
            onChange={onChange_password}
            placeholder="كلمة السر"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 mt-4 text-neutral-600 ring-1 ring-inset ring-neutral-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-300 outline-none sm:text-sm sm:leading-6"
          />
          <button onClick={onClickSubmit} className="text-stone-50 bg-neutral-800 rounded-lg py-1.5 w-full duration-500 hover:text-neutral-400 mt-4">
            تسجيل الدخول
          </button>
          <div className="flex justify-between items-center gap-4 mt-2 font-bold text-xs">
            <p className="text-neutral-600 ">
              ليس لديك حساب ؟{" "}
              <NavLink to={"/register"}>
                <span className="text-red-400 cursor-pointer">اضغط هنا</span>
              </NavLink>
            </p>
            <NavLink to={"/forgotPassword"}>
              <span className="text-blue-700 cursor-pointer block">نسيت كلمة المرور</span>
            </NavLink>
          </div>
        </div>
        <div className="mt-10">
          <Link
            className="text-blue-700 font-extrabold block my-2"
            to={"/admin/products-managment"}
          >
            الدخول بحساب أدمن
          </Link>
          <Link
            className="text-blue-700 font-extrabold block my-2"
            to={"/user/allorders"}
          >
            الدخول بحساب عميل
          </Link>
        </div>
      </div>
    </div>
  );
}
