import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import BrandContainer from "../../Components/Brands/BrandContainer";
import Pagination from "../../Components/Utility/Pagination";
import AllBrandHook from "../../Custom Hooks/brand/AllBrandHook";
export default function AllBrands() {
  const [allBrands, isLoading, getPage] = AllBrandHook();
  return (
    <div className="all-category">
      <div
        className="container m-auto p-4 xl:px-36"
        style={{ minHeight: "calc(100vh - 72px - 57px)" }}
      >
        <SubTitle title={"كل الماركات"} />
        <BrandContainer allBrands={allBrands} isLoading={isLoading} />
        <Pagination pageCount={allBrands.paginationResult?.numberOfPages} getPage={getPage} />
      </div>
    </div>
  );
}
