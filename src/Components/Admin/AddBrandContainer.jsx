import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import { BiImageAdd } from "react-icons/bi";

function AddBrandContainer() {
  return (
    <div className="max-w-3xl min-h-96">
      <SubTitle title={"إضافة ماركة جديدة"} />
      <div className="my-2 text-neutral-400">
        <h2 className="my-1">صوره الماركة :</h2>
        <BiImageAdd className="text-9xl font-bold cursor-pointer" />
      </div>
      <div className="my-2">
        <input
          type="text"
          placeholder="اسم الماركة"
          className="bg-transparent py-1 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
        />
        <br />
        <button className="text-base float-end text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 my-1">
          حفظ
        </button>
      </div>
    </div>
  );
}

export default AddBrandContainer;
