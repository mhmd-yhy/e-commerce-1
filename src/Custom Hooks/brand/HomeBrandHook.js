import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../Reducer/Slices/BrandSlice";

const HomeBrandHook = () => {
  const brands = useSelector(state => state.brandReducer.brands);
  const loading = useSelector(state => state.brandReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  return [brands, loading];
};

export default HomeBrandHook;