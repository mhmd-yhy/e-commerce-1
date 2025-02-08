import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import Pagination from "../../Components/Utility/Pagination";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import AllCategoryHook from "../../Custom Hooks/category/AllCategoryHook";

export default function AllCategory() {
  const [AllCategory, getPage] = AllCategoryHook();
  return (
    <div
      className="all-category"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <div className="container m-auto p-4 xl:px-36">
        <SubTitle title={"كل التصنيفات"} />
        <CategoryContainer AllCategory={AllCategory} isLoading={AllCategory.isLoading} />
        <Pagination pageCount={AllCategory.paginationResult?.numberOfPages} getPage={getPage} />
      </div>
    </div>
  );
}
