import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../Reducer/Api Requests/CategoryApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";

const HomeCategoryHook = () => {
  
  const categories = useSelector(state => state.categoryReducer.categories);
  const isLoading = useSelector(state => state.categoryReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(GetAllCategory()); }, []);
  useEffect(() => { !isLoading && categories && categories === "Network Error" && UseNontification("هناك مشكلة في التحميل , يرجى التحقق من اتصالك بالإنترنت", "error"); }, [categories]);

  return [categories, isLoading];
};

export default HomeCategoryHook;
