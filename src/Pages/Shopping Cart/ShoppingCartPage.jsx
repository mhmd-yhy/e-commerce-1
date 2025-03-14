import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import CartItem from "../../Components/Shopping Cart/CartItem";
import CartCheckout from "../../Components/Shopping Cart/CartCheckout";
import GetAllCartItemsHook from "../../Custom Hooks/shopping cart/GetAllCartItemsHook";
import RemoveCartItemHook from "../../Custom Hooks/shopping cart/RemoveCartItemHook";
import ModalDelete from "../../Components/Utility/ModalDelete";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Edit_CartItemQuantityHook from "../../Custom Hooks/shopping cart/Edit_CartItemQuantityHook";

const ShoppingCartPage = () => {
  const [products, numOfCartItems, totalCartPrice] = GetAllCartItemsHook();
  const [modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete, onClick_removeItem] = RemoveCartItemHook();
  const [quantity, onChange_Quantity, onClick_Edit] = Edit_CartItemQuantityHook();

  return (
    <div className="container m-auto p-4 xl:px-36" style={{ minHeight: "calc(100vh - 72px - 57px)" }} >
      <SubTitle title={`عربة التسوق : (${numOfCartItems}) منتج`} />
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        <div className="lg:col-span-2">
          {
            products.length > 0 ?
              products.map((item, i) => <CartItem key={i} itemDetailes={item} onClick_removeItem={onClick_removeItem} quantity={quantity} onChange_Quantity={onChange_Quantity} onClick_Edit={onClick_Edit} />)

              : <div className="h-full flex justify-center items-center">
                <div>
                  <p className="text-2xl text-neutral-700">لم تقم بإضافة أي منتج</p>
                  <Link to={"/products"} className="text-center block text-blue-700 hover:text-blue-500 duration-300">اذهب للتسوق الآن</Link>
                </div>
              </div>
          }
        </div>
        <div className="col-span-1">
          <CartCheckout totalCartPrice={totalCartPrice} />
        </div>
      </div>
      <ModalDelete modalMoodDelete={modalMoodDelete} closeModalDelete={closeModalDelete} onAcceptanceDelete={onAcceptanceDelete} msgDelete={msgDelete} />
      <ToastContainer />
    </div>
  );
};

export default ShoppingCartPage;
