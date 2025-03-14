import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems, removeCartItem } from "../../Reducer/Api Requests/CartApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/CartSlice";

const RemoveCartItemHook = () => {
  const resRemove = useSelector(state => state.CartReducer.resRemoveCartItem);
  const isLoading = useSelector(state => state.CartReducer.isLoading);
  const [deleteID, setDeleteID] = useState("");
  const dispatch = useDispatch();
  const [modalMoodDelete, setModalMoodDelete] = useState(false);

  const onClick_removeItem = (id) => { setDeleteID(id); setModalMoodDelete(true); };
  const closeModalDelete = () => { setDeleteID(""); setModalMoodDelete(!modalMoodDelete); };
  const onAcceptanceDelete = async () => {
    await dispatch(removeCartItem(deleteID));
    setModalMoodDelete(false);
  };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resRemove === 200) {
          UseNontification("تم حذف عنصر من كرت التسوق", "success");
          await dispatch(getAllCartItems());
          await dispatch(clearInitialState());
        }
      }
    }; run();
  }, [resRemove]);

  let msgDelete = "هل أنت متأكد من إزالة المنتج ؟ ";
  return [modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete, onClick_removeItem];
};
export default RemoveCartItemHook;