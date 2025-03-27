import React from "react";
import SubTitle from "../Utility/SubTitle";
import { BiImageAdd } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
//import Multiselect package
import Multiselect from "multiselect-react-dropdown";
//import SelectColors package
import Compact from '@uiw/react-color-compact';
import ViewEditProductDetailsHook from "../../Custom Hooks/product/ViewEditProductDetailsHook";
import UseEditProduct from "../../Custom Hooks/product/UseEditProduct";

function EditProductContainer() {
  const [allCategory, allBrand, allSubCategory, productDetails, setProductDetails] = ViewEditProductDetailsHook();
  const [showColorsPicker, setShowColorsPicker, OnSelectImage, onClickImage, onSelectCategory, onSelectSubCategory, onRemoveSubCategory, onSelectBrand, onSelectColor, onClickColor, OnSubmit] = UseEditProduct(productDetails, setProductDetails);
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
            productDetails.images ? productDetails.images?.map((image, i) => {
              return <img key={i} src={image.url} alt={""} className="h-24 w-28 sm:w-32 md:w-28 cursor-pointer" data-image={image.name} onClick={onClickImage} />;
            }) : null
          }
        </div>
      </div>
      <div className="my-2">
        <input type="text" placeholder="اسم المنتج"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          value={productDetails.title} onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
        />
        <textarea
          rows={3}
          type="text" placeholder="وصف المنتج"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          value={productDetails.description} onChange={(e) => setProductDetails({ ...productDetails, desc: e.target.value })}
        />
        <input
          type="number" placeholder="السعر قبل الخصم"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          min={0}
          value={productDetails.price} onChange={(e) => setProductDetails({ ...productDetails, priceBefore: e.target.value })}
        />
        <input
          type="number" placeholder="السعر بعد الخصم"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          min={0}
          value={productDetails.priceAfterDiscount} onChange={(e) => setProductDetails({ ...productDetails, priceAfter: e.target.value })}
        />
        <input
          type="number" placeholder="الكمية المحددة"
          className="bg-transparent py-1 pr-2 text-neutral-600 border border-neutral-400 rounded-lg outline-none w-full my-2"
          min={0}
          value={productDetails.quantity} onChange={(e) => setProductDetails({ ...productDetails, quantity: e.target.value })}
        />

        <select className="bg-stone-50 text-neutral-600 border border-neutral-400 py-2  pr-2 rounded-md outline-none w-full my-2" onChange={onSelectCategory} value={productDetails.category}>

          {
            allCategory.data ? (allCategory.data.map((value, i) => <option key={i} value={value._id}>{value.name}</option>)) : null
          }

        </select>
        <Multiselect
          className="mt-2 text-neutral-600"
          placeholder="التصنيف الفرعي"
          options={allSubCategory}
          selectedValues={productDetails.subcategory}
          onSelect={onSelectSubCategory}
          onRemove={onRemoveSubCategory}
          displayValue="name"
          style={{ color: "red" }}
        />

        <select className="bg-stone-50 text-neutral-600 border border-neutral-400 py-2  pr-2 rounded-md outline-none w-full my-2" onChange={onSelectBrand} value={productDetails.brand && productDetails.brand}>
          {
            allBrand.data ? (allBrand.data.map((value, i) => <option key={i} value={value._id}>{value.name}</option>)) : null
          }

        </select>
        <div>
          <h2 className="text-neutral-400">الألوان المتاحة للمنتج :</h2>
          <div className="my-1">
            {
              productDetails.availableColors && productDetails.availableColors?.map((value, i) => {
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
    </div>
  );
}

export default EditProductContainer;
