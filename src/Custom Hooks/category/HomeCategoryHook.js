import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../Reducer/Slices/CategorySlice";

const HomeCategoryHook = () => {
  const data = useSelector(state => state.categoryReducer.category);
  const isLoading = useSelector(state => state.categoryReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory());
  }, []);
  return [data, isLoading];
};

export default HomeCategoryHook;
