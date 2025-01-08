import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../Reducer/Slices/CategorySlice";

const HomeCategoryHook = () => {
  const categories = useSelector(state => state.categoryReducer.categories);
  const isLoading = useSelector(state => state.categoryReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory());
  }, []);
  // let data = [];
  // if (categoryies.data) data = categoryies.data;
  return [categories, isLoading];
};

export default HomeCategoryHook;
