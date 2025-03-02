import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearInitialState } from "../../Reducer/Slices/ProductSlice";
import UseNontification from "../../Components/Utility/UseNontification";
import { deleteProduct, getAllProducts } from "../../Reducer/Api Requests/ProductApiRequests";
import { useNavigate } from "react-router";

const ProductManagmentHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.productReducer.product);
  const resDelete = useSelector(state => state.productReducer.resDeleteProduct);
  const isLoading = useSelector(state => state.productReducer.isLoading);
  const [modalMoodDelete, setModalMoodDelete] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  //View All Products
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resDelete.message === "Invalid Token. please login again") {
          UseNontification("لا تمتلك الصلاحية , الرجاء تسجيل الدخول", "error");
          setTimeout(() => { navigate("/login"); }, 3000);
        }
        if (resDelete) resDelete === 204 && UseNontification("تمت عملية الحذف", "success");
        else UseNontification("هناك مشكلة في عملية الحذف", "error");
      }
      await dispatch(clearInitialState());
    };
    run();
  }, [isLoading]);

  //Delete Product
  let msgDelete = "هل تريد حذف هذا المنتج؟";
  const onClickDelete = async (id) => {
    setModalMoodDelete(true);
    setDeleteID(id);
  };
  const onAcceptanceDelete = async () => {
    await dispatch(deleteProduct(deleteID));
    dispatch(getAllProducts());
    closeModalDelete();
  };
  const closeModalDelete = () => { setModalMoodDelete(!modalMoodDelete); };


  let products = [];
  let pageCount = 1;
  if (allProducts.data && allProducts.paginationResult) {
    products = allProducts;
    pageCount = allProducts.paginationResult.numberOfPages;
  }

  const getPage = (page) => {
    dispatch(getAllProducts(page));
  };

  return [products, onClickDelete, pageCount, getPage, modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete];
};
export default ProductManagmentHook;