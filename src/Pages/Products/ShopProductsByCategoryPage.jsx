import React, { useEffect } from "react";
import NavCategory from "../../Components/Category/NavCategory";
import Pagination from "../../Components/Utility/Pagination";
import ViewProducts_ByCategoryHook from "../../Custom Hooks/product/ViewProducts_ByCategoryHook";
import ProductsContainer from "../../Components/Product/ProductsContainer";
import SearchCountResult from "../../Components/Product/SearchCountResult";
import { ToastContainer } from "react-toastify";
import InternetConnectionHook from "../../Custom Hooks/internet/InternetConnectionHook";

export default function ShopProductsByCategoryPage() {
  const [checkInternet] = InternetConnectionHook();
  useEffect(() => { checkInternet(); }, []);
  const [items, getPage, getProducts, results] = ViewProducts_ByCategoryHook();
  return (
    <div className="products" style={{ minHeight: "calc(100vh - 72px - 57px)" }} >
      <ToastContainer />
      <NavCategory />
      <div className="container m-auto p-4 xl:px-36">
        <SearchCountResult searchCount={results} getProducts={getProducts} />
        <div>
          <ProductsContainer items={items.data} />
          <Pagination pageCount={items.paginationResult?.numberOfPages} getPage={getPage} />
        </div>
      </div>
    </div>
  );
}
