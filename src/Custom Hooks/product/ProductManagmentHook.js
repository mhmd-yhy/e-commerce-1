import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../../Reducer/Slices/ProductSlice";
import UseNontification from "../UseNontification";

const ProductManagmentHook = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.productReducer.product);
  const resDelete = useSelector(state => state.productReducer.resDelete);
  const isLoading = useSelector(state => state.productReducer.isLoading);

  //View All Products
  useEffect(() => {
    dispatch(getAllProducts(1));
  }, []);
  useEffect(() => {
    if (!isLoading) {
      if (resDelete) resDelete.status && UseNontification("تمت عملية الحذف", "success");
      else UseNontification("هناك مشكلة في عملية الحذف", "error");
    }
  }, [resDelete]);

  //Delete Product
  const onClickDelete = async (id) => {
    // console.log(isLoading);
    await dispatch(deleteProduct(id));
    // console.log(isLoading);
    dispatch(getAllProducts());
  };


  let products = [];
  let pageCount = 1;
  if (allProducts.data && allProducts.paginationResult) {
    products = allProducts;
    pageCount = allProducts.paginationResult.numberOfPages;
  }

  const getPage = (page) => {
    dispatch(getAllProducts(page));
  };

  return [products, onClickDelete, pageCount, getPage];
};
export default ProductManagmentHook;