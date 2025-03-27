import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImMenu3, ImMenu4 } from "react-icons/im";
const UserSidebar = () => {
  const [UserMenuMood, setUserMenuMood] = useState("max-h-0 py-0");
  return (
    <div className=" z-50">
      <div onClick={() => setUserMenuMood(UserMenuMood === "max-h-0 py-0" ? "max-h-full py-3" : "max-h-0 py-0")}
        className="sm:hidden absolute left-0 top-0 text-3xl px-1 text-neutral-600 cursor-pointer">
        {UserMenuMood === "max-h-0 py-0" ? <ImMenu3 /> : <ImMenu4 />}
      </div>

      <ul
        className={`list-none bg-white rounded-lg text-sm shadow-lg absolute top-4 left-0 w-full duration-500 overflow-hidden ${UserMenuMood} sm:relative sm:max-h-full sm:top-0 my-6 sm:py-3`}>
        <li className="">
          <Link to={"/user/allorders"} className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50">
            إدارة الطلبات
          </Link>
        </li>
        <li className="">
          <Link
            to={"/user/favoriteproducts"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            المنتجات المفضلة
          </Link>
        </li>
        <li className="">
          <Link
            to={"/user/addresses"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            العناوين الشخصية
          </Link>
        </li>
        <li className="">
          <Link
            to={"/user/profile"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            الملف الشخصي
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
