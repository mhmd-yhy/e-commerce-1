import React from "react";
import SubTitle from "../Utility/SubTitle";
import { BiImageAdd } from "react-icons/bi";
import LoadingUI from "../Utility/LoadingUI";
import UseAddCategory from "../../Custom Hooks/category/UseAddCategory";
//Notification React
import { ToastContainer } from 'react-toastify';

const imageStyle = "text-9xl font-bold cursor-pointer w-full h-full";

function AddCategoryContainer() {

  const [name, selectedImage, loading, onChangeName, onChangeImage, handleSubmit] = UseAddCategory();
  return (
    <div className="max-w-3xl min-h-96">
      <ToastContainer />
      <SubTitle title={"إضافة تصنيف جديد"} />

      <div className="my-2 text-neutral-400">
        <h2 className="my-1">صوره التصنيف :</h2>
        <div className="flex justify-between items-center">
          <div>
            <label htmlFor="upload-photo" className="block w-32 h-32">
              {
                selectedImage.image ? (<img src={selectedImage.image} alt="" className={imageStyle} />) : (<BiImageAdd className={imageStyle} />)
              }
            </label>
            <input type="file" name="photo" className="hidden" id="upload-photo" onChange={onChangeImage} />
          </div>
          {loading && <LoadingUI />}
        </div>
      </div>

      <div className="my-2">
        <input
          type="text"
          placeholder="اسم التصنيف"
          value={name}
          onChange={onChangeName}
          className="bg-transparent py-1 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
        />
        <br />
        <button onClick={handleSubmit} disabled={!name || !selectedImage.image} className="text-base float-end text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 my-1 disabled:text-neutral-400" >
          حفظ
        </button>
      </div>
    </div>
  );
}

export default AddCategoryContainer;
