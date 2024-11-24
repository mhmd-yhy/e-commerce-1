import React, { useEffect } from "react";
import SubTitle from "../Utility/SubTitle";
import Pagination from "../Utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory, GetAllCategoryPage } from "../../Reducer/Slices/CategorySlice";
import CategoryContainer from "./CategoryContainer";
export default function AllCategory() {

  const data = useSelector(state => state.categoryReducer);
  // console.log(data);
  // console.log(data.paginationResult.numberOfPages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory(12));
  }, []);
  const getPage = (page) => {
    dispatch(GetAllCategoryPage(page));
    console.log(page);
    return page;
  };
  return (
    <div
      className="all-category"
      style={{ minHeight: "calc(100vh - 72px - 57px)" }}
    >
      <div className="container m-auto p-4 xl:px-36">
        <SubTitle title={"كل التصنيفات"} />
        <CategoryContainer data={data.category} isLoading={data.isLoading} />
        <Pagination pageCount={data.paginationResult.numberOfPages} getPage={getPage} />
      </div>
    </div>
  );
}
