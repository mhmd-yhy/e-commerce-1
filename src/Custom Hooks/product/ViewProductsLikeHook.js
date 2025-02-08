import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails, getProductsLike } from "../../Reducer/Api Requests/ProductApiRequests";
const ViewProductsLikeHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(state => state.productReducer.productDetails);
  const products = useSelector(state => state.productReducer.productsLike);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);
  useEffect(() => {
    item.data && dispatch(getProductsLike(item.data.category));
  }, [item]);
  let productsLike = [];
  if (products.data) productsLike = products.data.slice(0, 4);
  return [productsLike];
};
export default ViewProductsLikeHook;