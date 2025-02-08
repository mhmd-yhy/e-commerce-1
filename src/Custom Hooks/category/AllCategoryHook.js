import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory, GetAllCategoryPage } from "../../Reducer/Api Requests/CategoryApiRequests";

const AllCategoryHook = () => {

  const AllCategory = useSelector(state => state.categoryReducer.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory(8));
  }, []);

  const getPage = (page) => {
    dispatch(GetAllCategoryPage(page));
    return page;
  };
  return [AllCategory, getPage];
};

export default AllCategoryHook;
