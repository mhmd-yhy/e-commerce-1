import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBrand } from "../../Reducer/Api Requests/BrandApiRequests";
const AllBrandHook = () => {
  const allBrands = useSelector(state => state.brandReducer.brands);
  const isLoading = useSelector(state => state.brandReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  const getPage = (page) => {
    dispatch(getAllBrand(page));
    return page;
  };

  return [allBrands, isLoading, getPage];
};

export default AllBrandHook;
