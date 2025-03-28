import React from "react";
import ProductCard from "./ProductCard.jsx";
import SubTitle from "../../Components/Utility/SubTitle";
import ProductManagmentHook from "../../Custom Hooks/product/ProductManagmentHook.js";
import Pagination from "../Utility/Pagination.jsx";
import { ToastContainer } from "react-toastify";
import ModalDelete from "../Utility/ModalDelete.jsx";

function ProductsManagmentContainer() {
  const [products, onClickDelete, pageCount, getPage, modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete] = ProductManagmentHook();
  return (
    <div>
      <ToastContainer />
      <ModalDelete modalMoodDelete={modalMoodDelete} closeModalDelete={closeModalDelete} onAcceptanceDelete={onAcceptanceDelete} msgDelete={msgDelete} />

      <SubTitle title={"إدارة جميع المنتجات"} />
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-3 my-5 min-h-96">
          {
            products.data ? products.data.map((product, i) => {
              return <ProductCard
                key={i}
                id={product._id}
                img={product.imageCover}
                title={product.title}
                price={product.price}
                priceDiscount={product.priceAfterDiscount}
                currency={"ليرة"}
                rate={product.ratingsQuantity}
                onClickDelete={onClickDelete}
              />;
            }) : null
          }
        </div>
        <Pagination pageCount={pageCount} getPage={getPage} />
      </div>
    </div>
  );
}

export default ProductsManagmentContainer;
