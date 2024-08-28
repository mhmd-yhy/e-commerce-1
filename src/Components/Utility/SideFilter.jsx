import React, { useState } from "react";
import { TbFilterCog } from "react-icons/tb";

export default function SideFilter() {
  const [moodMenu, setMoodMenu] = useState("max-h-0");

  return (
    <div
      className={`fixed bottom-0 left-0 ml-0 w-full bg-neutral-100 duration-500 sm:relative sm:ml-3 sm:w-auto sm:bg-transparent sm:p-0 sm:max-h-auto ${moodMenu}`}
      style={{ position: "" }}
    >
      <button
        className=" sm:hidden absolute text-2xl -top-9 left-1/2 -translate-x-1/2 bg-neutral-100 text-neutral-600 cursor-pointer p-3 pb-0 rounded-full rounded-b-lg"
        onClick={() =>
          setMoodMenu(moodMenu === "max-h-0" ? "max-h-64 p-4" : "max-h-0")
        }
      >
        <TbFilterCog />
      </button>
      <h2 className="font-bold mt-2 text-neutral-600">الفئة</h2>
      <ul className={`grid grid-cols-3 list-none text-sm sm:block`}>
        <li className="mt-2">
          <label className="cursor-pointer">
            <input type="checkbox" />
            <span className="mr-1 text-neutral-600">الكل</span>
          </label>
        </li>
        <li className="mt-2">
          <label className="cursor-pointer">
            <input type="checkbox" />
            <span className="mr-1 text-neutral-600">أجهزة منزلية</span>
          </label>
        </li>
        <li className="mt-2">
          <label className="cursor-pointer">
            <input type="checkbox" />
            <span className="mr-1 text-neutral-600">أجهزة منزلية</span>
          </label>
        </li>
        <li className="mt-2">
          <label className="cursor-pointer">
            <input type="checkbox" />
            <span className="mr-1 text-neutral-600">أجهزة منزلية</span>
          </label>
        </li>
      </ul>
      <h2 className="font-bold mt-2 text-neutral-600">الماركة</h2>
      <ul className={`grid grid-cols-3 list-none text-sm sm:block`}>
        <li className="mt-2">
          <label className="cursor-pointer">
            <input type="checkbox" />
            <span className="mr-1 text-neutral-600">الكل</span>
          </label>
        </li>
        <li className="mt-2">
          <label className="cursor-pointer">
            <input type="checkbox" />
            <span className="mr-1 text-neutral-600">ابل</span>
          </label>
        </li>
        <li className="mt-2">
          <label className="cursor-pointer">
            <input type="checkbox" />
            <span className="mr-1 text-neutral-600">سامسونج</span>
          </label>
        </li>
      </ul>
      <h2 className="font-bold mt-2 text-neutral-600">الماركة</h2>
      <ul className={`grid grid-cols-3 list-none text-sm sm:block`}>
        <li className="mt-2">
          <label>
            <span className="ml-1 text-neutral-600">من :</span>
            <input type="number" className="w-16 pr-2 text-neutral-600" />
          </label>
        </li>
        <li className="mt-2">
          <label>
            <span className="ml-1 text-neutral-600">إلى :</span>
            <input type="number" className="w-16 pr-2 text-neutral-600" />
          </label>
        </li>
      </ul>
    </div>
  );
}
