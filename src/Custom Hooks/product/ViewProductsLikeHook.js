import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, getProductsLike } from "../../Reducer/Slices/ProductSlice";
import { useParams } from "react-router";
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