import React, { useEffect } from "react";
import SubTitle from "../Utility/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../Reducer/Slices/CategorySlice";

function AddSubCategoryContainer() {
  const category = useSelector(state => state.categoryReducer.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory());
  }, []);
  console.log(category);
  const handleChangeSelect = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="max-w-3xl min-h-96">
      <SubTitle title={"إضافة تصنيف فرعي جديد"} />
      <div className="my-2">
        <input
          type="text"
          placeholder="اسم التصنيف الفرعي"
          className="bg-transparent py-2 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
        />
        <br />
        <div className="my-4">
          <select className="bg-stone-50 text-neutral-400 border border-neutral-400 py-2  pr-2 rounded-md outline-none w-full" onChange={handleChangeSelect}>
            <option value={0}>اختر تصنيف</option>
            {category && category.map((value, i) => {
              return <option key={i} value={value._id}>{value.name}</option>;
            })}

          </select>
        </div>
        <button className="text-base float-end text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 my-1">
          حفظ
        </button>
      </div>
    </div>
  );
}

export default AddSubCategoryContainer;
