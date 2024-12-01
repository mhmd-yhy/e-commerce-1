import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory, GetAllCategoryPage } from "../../Reducer/Slices/CategorySlice";

const AllCategoryHook = () => {

  const data = useSelector(state => state.categoryReducer);
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
  return [data, getPage];
};

export default AllCategoryHook;
