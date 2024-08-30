import React from "react";
import SubTitle from "../Utility/SubTitle";
import { BiImageAdd } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import Multiselect from "multiselect-react-dropdown";

function AddProductPageContainer() {
  const onSelect = () => {};
  const onRemove = () => {};

  const options = [
    { name: "التصنيف الاول", id: 1 },
    { name: "التصنيف الثاني", id: 2 },
    { name: "التصنيف الثالث", id: 3 },
  ];
  return (
    <div className="max-w-3xl min-h-96">
      <SubTitle title={"إضافة منتج جديد"} />
      <div className="my-2 text-neutral-400">
        <h2 className="my-1">صور المنتج :</h2>
        <BiImageAdd className="text-9xl font-bold cursor-pointer" />
      </div>
      <div className="my-2">
        <input
          type="text"
          placeholder="اسم المنتج"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
        />
        <textarea
          rows={3}
          type="text"
          placeholder="وصف المنتج"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
        />
        <input
          type="number"
          placeholder="السعر قبل الخصم"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
        />
        <input
          type="number"
          placeholder="سعر المنتج"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
        />

        <select className="bg-stone-50 text-neutral-600 border border-neutral-400 py-2  pr-2 rounded-md outline-none w-full my-2">
          <option>التصنيف الرئيسي</option>
          <option>التصنيف الأول</option>
          <option>التصنيف الثاني</option>
          <option>التصنيف الثالث</option>
          <option>التصنيف الرابع</option>
        </select>
        <Multiselect
          className="mt-2 text-neutral-600"
          placeholder="التصنيف الفرعي"
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
          style={{ color: "red" }}
        />
        <select className="bg-stone-50 text-neutral-600 border border-neutral-400 py-2  pr-2 rounded-md outline-none w-full my-2">
          <option>الماركة</option>
          <option>الماركة الأولى</option>
          <option>الماركة الثانية</option>
          <option>الماركة الثالث</option>
        </select>
        <div>
          <h2 className="text-neutral-400">الألوان المتاحة للمنتج :</h2>
          <div className="my-1">
            <span
              className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
              style={{ backgroundColor: "red" }}
            ></span>
            <span
              className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
              style={{ backgroundColor: "white" }}
            ></span>
            <span
              className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
              style={{ backgroundColor: "black" }}
            ></span>
            <IoAddCircleOutline className="inline text-4xl text-neutral-400 cursor-pointer duration-500 hover:text-neutral-600" />
          </div>
        </div>
        <div className="text-end">
          <button className="text-base text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 my-2">
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductPageContainer;
