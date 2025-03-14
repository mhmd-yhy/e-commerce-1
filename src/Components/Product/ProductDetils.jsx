import React from "react";
import { useParams } from "react-router";
import ViewProductDetailsHook from "../../Custom Hooks/product/ViewProductDetailsHook";
import GetWishListHook from "../../Custom Hooks/wishList/GetWishListHook";
import AddToWishListHook from "../../Custom Hooks/wishList/AddToWishListHook";
import RemoveFromWishListHook from "../../Custom Hooks/wishList/RemoveFromWishListHook";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import AddTo_ShoppingCartHook from "../../Custom Hooks/shopping cart/AddTo_ShoppingCartHook";
export default function ProductDetils() {
  const { id } = useParams();
  const [details] = ViewProductDetailsHook(id);
  const [OnClick_AddToWishList] = AddToWishListHook();
  const [OnClick_RemoveFromWishList] = RemoveFromWishListHook();
  const [wishArr] = GetWishListHook();
  let isWish = wishArr.find(wish => wish === id ? true : false);
  const [cardForm, onSelect_color, onClick_AddToCart] = AddTo_ShoppingCartHook();

  return (
    <div className="product-details lg:col-span-2 xl:col-span-3 lg:px-8 xl:px-20">
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">
          {details.dataText.category} :
        </h2>
        <p className="text-base text-neutral-600 flex gap-3">
          {details.dataText.title}<span className="text-yellow-400 font-bold flex items-center gap-1"> {details.dataText.ratingsAverage} <FaStar className="ml-1 inline" /></span>
        </p>
      </div>
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">
          الماركة :{" "}
          <span className="text-lg font-bold text-neutral-600">{details.dataText.brand}</span>
        </h2>
        <div className="">
          {
            details.dataText.availableColors.map((color, i) =>
              <span
                onClick={onSelect_color}
                data-color={color}
                key={i}
                className={`px-3 py-1 rounded-full border border-neutral-400 ml-2 cursor-pointer ${cardForm.color === color && "border-4 border-neutral-500"} `}
                style={{ backgroundColor: color }}
              ></span>)
          }
        </div>
      </div>
      <div className="mb-3">
        <h2 className="text-sm text-neutral-400 font-bold mb-1">المواصفات :</h2>
        <p className="text-base text-neutral-600">
          {details.dataText.description}
        </p>
      </div>
      <div className="mb-3 flex gap-1 items-center">
        <span className="text-base text-neutral-600 bg-white py-2 px-3 border border-neutral-400 rounded-lg ml-4">
          {details.dataText.price} جنية
        </span>

        <button onClick={onClick_AddToCart} className="text-base text-white bg-black py-2 px-3 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400">
          اضف للعربة
        </button>

        <i className="text-neutral-600 float-end cursor-pointer text-sm sm:text-lg">
          {isWish ? <FaHeart onClick={() => OnClick_RemoveFromWishList(id)} className="text-red-600 text-2xl" /> : <FaRegHeart onClick={() => OnClick_AddToWishList(id)} className="text-xl" />}
        </i>
      </div>
    </div>
  );
}
// rafce
