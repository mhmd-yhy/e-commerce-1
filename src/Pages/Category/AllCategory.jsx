import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import Pagination from "../../Components/Utility/Pagination";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import AllCategoryHook from "../../Custom Hooks/category/AllCategoryHook";

export default function AllCategory() {
  const [data, getPage] = AllCategoryHook();
  console.log(data)
  return (
    <div
      className="all-category"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <div className="container m-auto p-4 xl:px-36">
        <SubTitle title={"كل التصنيفات"} />
        <CategoryContainer data={data} isLoading={data.isLoading} />
        <Pagination pageCount={data.paginationResult.numberOfPages} getPage={getPage} />
      </div>
    </div>
  );
}
