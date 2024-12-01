import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import { BiImageAdd } from "react-icons/bi";
import LoadingUI from "../Utility/LoadingUI";
import UseAddBrand from "../../Custom Hooks/brand/UseAddBrand";
//Notification React
import { ToastContainer } from 'react-toastify';
const imageStyle = "text-9xl font-bold cursor-pointer w-full h-full";
function AddBrandContainer() {
  const [name, selectedImage, isLoading, OnchangeName, onChangeImage, handleSubmit] = UseAddBrand();
  return (
    <div className="max-w-3xl min-h-96">
      <ToastContainer />
      <SubTitle title={"إضافة ماركة جديدة"} />
      <div className="my-2 text-neutral-400">
        <h2 className="my-1">صوره الماركة :</h2>
        <div className="flex justify-between items-center">
          <div>
            <label className="block w-32 h-32">
              {selectedImage.image ? <img src={selectedImage.image} className={imageStyle} alt="" /> : <BiImageAdd className="text-9xl font-bold cursor-pointer" />}
              <input type="file" hidden onChange={(e) => onChangeImage(e)} />
            </label>
          </div>
          {isLoading && <LoadingUI />}
        </div>

      </div>
      <div className="my-2">
        <input
          type="text"
          placeholder="اسم الماركة"
          className="bg-transparent py-1 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
          value={name}
          onChange={OnchangeName}
        />
        <br />
        <button className="text-base float-end text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 my-1" disabled={name && selectedImage.imageData ? false : true} onClick={handleSubmit}>
          حفظ
        </button>
      </div>
    </div>
  );
}

export default AddBrandContainer;
