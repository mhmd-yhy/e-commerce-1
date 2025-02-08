import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../Reducer/Api Requests/CategoryApiRequests";

const HomeCategoryHook = () => {
  const categories = useSelector(state => state.categoryReducer.categories);
  const isLoading = useSelector(state => state.categoryReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory());
  }, []);
  return [categories, isLoading];
};

export default HomeCategoryHook;
