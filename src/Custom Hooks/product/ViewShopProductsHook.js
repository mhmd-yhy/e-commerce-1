import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Reducer/Api Requests/ProductApiRequests";

const ViewShopProductsHook = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.productReducer.product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  let items = [];
  let pageCount = 1;
  if (allProducts) {
    items = allProducts;
    pageCount = allProducts.paginationResult?.numberOfPages;
  }
  const getPage = (page) => {
    dispatch(getAllProducts(page));
  };
  return [items, getPage];
};
export default ViewShopProductsHook;