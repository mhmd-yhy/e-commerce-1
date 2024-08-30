import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
const Sidebar = () => {
  const [adminMenuMood, setAdminMenuMood] = useState("max-h-0 py-0");
  return (
    <div className="">
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
            to={"/admin/products-managment"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            إدارة المنتجات
          </Link>
        </li>
        <li className="">
          <Link
            to={"/admin/orders-managment"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            إدارة الطلبات
          </Link>
        </li>
        <li className="">
          <Link
            to={"/admin/add-brand"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            أضف ماركة
          </Link>
        </li>
        <li className="">
          <Link
            to={"/admin/add-category"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            أضف تصنيف
          </Link>
        </li>
        <li className="">
          <Link
            to={"/admin/add-subcategory"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            أضف تصنيف فرعي
          </Link>
        </li>
        <li className="">
          <Link
            to={"/admin/add-product"}
            className="py-4 border-b block text-center border-b-neutral-300 rounded-md text-neutral-600 duration-500 hover:bg-neutral-600 hover:text-stone-50"
          >
            أضف منتج
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
