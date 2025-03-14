import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Reducer/Api Requests/ProductApiRequests";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.productReducer.product);
  const func_getAllProducts = async () => {
    await dispatch(getAllProducts());
  };
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  let items = [];
  if (allProducts?.data) items = allProducts.data.slice(0, 4);
  return [items, func_getAllProducts];
};
export default ViewHomeProductsHook;