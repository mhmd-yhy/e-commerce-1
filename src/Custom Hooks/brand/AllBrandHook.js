import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBrand } from "../../Reducer/Slices/BrandSlice";
const AllBrandHook = () => {
  const brands = useSelector(state => state.brandReducer.brands);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  const getPage = (page) => {
    dispatch(getAllBrand(page));
    return page;
  };

  return [brands, getPage];
};

export default AllBrandHook;
