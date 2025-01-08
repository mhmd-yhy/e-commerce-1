import React from "react";
import SubTitle from "../Utility/SubTitle";
import LoadingUI from "../Utility/LoadingUI";
import UseAddSubCategory from "../../Custom Hooks/subCategory/UseAddSubCategory";
//Notification React
import { ToastContainer } from 'react-toastify';

function AddSubCategoryContainer() {
  const [category, isLoading, name, handleChangeInput, handleChangeSelect, handleSubmit] = UseAddSubCategory();
  return (
    <div className="max-w-3xl min-h-96">
      <div className="flex justify-between items-center">
        <SubTitle title={"إضافة تصنيف فرعي جديد"} />
        {
          isLoading ? <LoadingUI /> : null
        }

      </div>
      <div className="my-2">
        <input
          type="text"
          placeholder="اسم التصنيف الفرعي"
          className="bg-transparent py-2 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
          value={name}
          onChange={handleChangeInput}
        />
        <br />
        <div className="my-4">
          <select className="bg-stone-50 text-neutral-400 border border-neutral-400 py-2  pr-2 rounded-md outline-none w-full"
            onChange={handleChangeSelect}>
            <option value={0}>اختر التصنيف الرئيسي</option>
            {category && category.map((value, i) => {
              return <option key={i} value={value._id}>{value.name}</option>;
            })}

          </select>
        </div>
        <button className="text-base float-end text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 my-1"
          onClick={handleSubmit}>
          حفظ
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddSubCategoryContainer;
