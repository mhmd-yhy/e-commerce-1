import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllCartItems, getAllCartItems } from "../../Reducer/Api Requests/CartApiRequests";
import { useNavigate } from "react-router";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/CartSlice";
import GetAllCartItemsHook from "./GetAllCartItemsHook";
const ClearAll_CartItems = () => {
  // const [products, numOfCartItems, totalCartPrice, getAll] = GetAllCartItemsHook();
  const resClearAll = useSelector(state => state.CartReducer.resClearAllCartItems);
  const isLoading = useSelector(state => state.CartReducer.isLoading);

  const dispatch = useDispatch();
  const [modalMoodDelete, setModalMoodDelete] = useState(false);
  const navigate = useNavigate();

  const onClick_ClearAll = (id) => { setModalMoodDelete(true); };
  const closeModalDelete = () => { setModalMoodDelete(!modalMoodDelete); };
  const onAcceptanceDelete = async () => {
    await dispatch(clearAllCartItems());
    setModalMoodDelete(false);
  };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resClearAll === 204) {
          UseNontification("تم إفراغ جميع عناصر الكرت", "success");
          await dispatch(getAllCartItems());
          await dispatch(clearInitialState());
          setTimeout(() => { navigate("/products"); }, 2000);
        }
      }
    }; run();
  }, [resClearAll]);

  let msgDelete = "هل أنت متأكد من إزالة جميع المنتجات ؟ ";
  return [modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete, onClick_ClearAll];
};
export default ClearAll_CartItems;