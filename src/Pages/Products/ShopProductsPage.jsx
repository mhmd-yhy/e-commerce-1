import React, { useEffect } from "react";
import NavCategory from "../../Components/Category/NavCategory";
import SearchCountResult from "../../Components/Product/SearchCountResult";
import SideFilter from "../../Components/Utility/SideFilter";
import Pagination from "../../Components/Utility/Pagination";
import ViewShopProductsHook from "../../Custom Hooks/product/ViewShopProductsHook";
import ProductsContainer from "../../Components/Product/ProductsContainer";
import InternetConnectionHook from "../../Custom Hooks/internet/InternetConnectionHook";
import { ToastContainer } from "react-toastify";
export default function ShopProductsPage() {
  const [checkInternet] = InternetConnectionHook();
  useEffect(() => { checkInternet(); }, []);
  const [items, getPage, getProducts, results] = ViewShopProductsHook();
  return (
    <div className="products" style={{ minHeight: "calc(100vh - 72px - 57px)" }} >
      <ToastContainer />
      <NavCategory />
      <div className="container m-auto p-4 xl:px-36">
        <SearchCountResult searchCount={results} getProducts={getProducts} />
        <div className="grid grid-flow-col gap-2 mt-4">
          <SideFilter />
          <ProductsContainer items={items.data} />
        </div>
        <Pagination pageCount={items.paginationResult?.numberOfPages} getPage={getPage} />
      </div>
    </div>
  );
}
