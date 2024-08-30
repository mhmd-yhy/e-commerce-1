import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
const UserSidebar = () => {
  const [adminMenuMood, setAdminMenuMood] = useState("max-h-0 py-0");
  return (
    <div className=" z-50">
      <div
        onClick={() =>
          setAdminMenuMood(
            adminMenuMood === "max-h-0 py-0"
              ? "max-h-full py-3"
              : "max-h-0 py-0"
          )
        }
        className="sm:hidden absolute left-0 top-0 text-3xl text-neutral-600 cursor-pointer"
      >
        <BiFoodMenu />
      </div>
      <ul
        className={`list-none bg-white rounded-lg text-sm shadow-lg absolute top-4 left-0 w-full duration-500 overflow-hidden ${adminMenuMood} sm:relative sm:max-h-full sm:top-0 my-6 sm:py-3`}
      >
        <li className="">
          <Link
            to={"/user/allorders"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
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
