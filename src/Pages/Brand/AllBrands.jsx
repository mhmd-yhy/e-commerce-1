import React, { useEffect } from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import BrandContainer from "../../Components/Brands/BrandContainer";
import Pagination from "../../Components/Utility/Pagination";
import AllBrandHook from "../../Custom Hooks/brand/AllBrandHook";
import InternetConnectionHook from "../../Custom Hooks/internet/InternetConnectionHook";
import { ToastContainer } from "react-toastify";
export default function AllBrands() {
  const [checkInternet] = InternetConnectionHook();
  useEffect(() => { checkInternet(); }, []);
  const [allBrands, isLoading, getPage] = AllBrandHook();
  return (
    <div className="all-category">
      <ToastContainer />
      <div className="container m-auto p-4 xl:px-36" style={{ minHeight: "calc(100vh - 72px - 57px)" }} >
        <SubTitle title={"كل الماركات"} />
        <BrandContainer allBrands={allBrands} isLoading={isLoading} />
        <Pagination pageCount={allBrands.paginationResult?.numberOfPages} getPage={getPage} />
      </div>
    </div>
  );
}
