import React from "react";
import SubTitle from "../Utility/SubTitle";
import { BiImageAdd } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
//import Multiselect package
import Multiselect from "multiselect-react-dropdown";
//import SelectColors package
import Compact from '@uiw/react-color-compact';
import { ToastContainer } from "react-toastify";
import ViewEditProductDetailsHook from "../../Custom Hooks/product/ViewEditProductDetailsHook";
import UseEditProduct from "../../Custom Hooks/product/UseEditProduct";
function EditProductContainer() {
  const [allCategory, allBrand, allSubCategory, form, setForm] = ViewEditProductDetailsHook();
  const [showColorsPicker, setShowColorsPicker, OnSelectImage, onClickImage, onSelectCategory, onSelectSubCategory, onRemoveSubCategory, onSelectBrand, onSelectColor, onClickColor, OnSubmit] = UseEditProduct(form, setForm);
  return (
    <div className="max-w-3xl min-h-96">
      <SubTitle title={"تعديل المنتج"} />
      <div className="my-2 text-neutral-400">
        <h2 className="my-1">صور المنتج :</h2>
        <div className="flex items-center flex-wrap justify-between md:justify-normal md:gap-4">
          <label htmlFor="image" className="block h-24 w-28">
            <BiImageAdd className="text-8xl font-bold cursor-pointer" />
          </label>
          <input type="file" id="image" hidden onChange={OnSelectImage} />
          {
            form.images ? form.images.map((image, i) => {
              return <img key={i} src={image.url} alt={image.name} className="h-24 w-28 sm:w-32 md:w-28 cursor-pointer" data-image={image.name} onClick={onClickImage} />;
            }) : null
          }
        </div>
      </div>
      <div className="my-2">
        <input
          type="text"
          placeholder="اسم المنتج"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          rows={3}
          type="text"
          placeholder="وصف المنتج"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
        <input
          type="number"
          placeholder="السعر قبل الخصم"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          min={0}
          value={form.priceBefore}
          onChange={(e) => setForm({ ...form, priceBefore: e.target.value })}
        />
        <input
          type="number"
          placeholder="السعر بعد الخصم"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          min={0}
          value={form.priceAfter}
          onChange={(e) => setForm({ ...form, priceAfter: e.target.value })}
        />
        <input
          type="number"
          placeholder="الكمية المحددة"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          min={0}
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <select className="bg-stone-50 text-neutral-600 border border-neutral-400 py-2  pr-2 rounded-md outline-none w-full my-2" onChange={onSelectCategory} value={form.category}>
          {/* <option value={form.category._id}>{form.category.name}</option> */}

          {
            allCategory.data ? (allCategory.data.map((value, i) => <option key={i} value={value._id}>{value.name}</option>)) : null
          }
          {/* {
            allCategory.data ? (allCategory.data.filter((value, i) => value._id !== form.category._id)).map((value, i) => <option key={i} value={value._id}>{value.name}</option>) : null
          } */}

        </select>
        <Multiselect
          className="mt-2 text-neutral-600"
          placeholder="التصنيف الفرعي"
          options={allSubCategory}
          selectedValues={form.subcategory}
          onSelect={onSelectSubCategory}
          onRemove={onRemoveSubCategory}
          displayValue="name"
          style={{ color: "red" }}
        />
        <select className="bg-stone-50 text-neutral-600 border border-neutral-400 py-2  pr-2 rounded-md outline-none w-full my-2" onChange={onSelectBrand} value={form.brand}>
          {/* <option value={form.brand._id}>{form.brand.name}</option> */}

          {/* {
            allBrand.data ? (allBrand.data.filter((value) => value._id !== form.brand._id).map((value, i) => <option key={i} value={value._id}>{value.name}</option>)) : null
          } */}
          {
            allBrand.data ? (allBrand.data.map((value, i) => <option key={i} value={value._id}>{value.name}</option>)) : null
          }

        </select>
        <div>
          <h2 className="text-neutral-400">الألوان المتاحة للمنتج :</h2>
          <div className="my-1">
            {
              form.availableColors && form.availableColors.map((value, i) => {
                return (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer"
                    style={{ backgroundColor: value }}
                    data-color={value}
                    onClick={onClickColor}
                  ></span>
                );
              })
            }
            <IoAddCircleOutline className="inline text-4xl text-neutral-400 cursor-pointer duration-500 hover:text-neutral-600"
              onClick={() => setShowColorsPicker(!showColorsPicker)} />
          </div>
        </div>
        {
          showColorsPicker &&
          <Compact
            color={"#fff"}
            style={{
              boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
            }}
            onChange={onSelectColor}
          />
        }

        <div className="text-end">
          <button className="text-base text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 my-2"
            onClick={OnSubmit}>
            حفظ
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditProductContainer;
