import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseNontification from "../../Components/Utility/UseNontification";
import { deleteAdress, getAllAdress } from "../../Reducer/Api Requests/AdressApiRequests";
import { clearInitialState } from "../../Reducer/Slices/AdressSlice";

const DeleteAdressHook = () => {
  const dispatch = useDispatch();
  const resDelete = useSelector(state => state.adressReducer.resDeleteAdress);
  const isLoading = useSelector(state => state.adressReducer.isLoading);
  const [modalMoodDelete, setModalMoodDelete] = useState(false);
  const [deleteID, setDeleteID] = useState("");

  const onClickDelete = (itemID) => { setModalMoodDelete(true); setDeleteID(itemID); };
  const closeModalDelete = () => { setDeleteID(""); setModalMoodDelete(!modalMoodDelete); };

  const onAcceptanceDelete = async () => {
    await dispatch(deleteAdress(deleteID));
    setModalMoodDelete(false);
  };

  let msgDelete = "هل أنت متأكد من حذف هذا العنوان؟";
  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resDelete === 200) {
          UseNontification("تم حذف العنوان", "success");
          await dispatch(getAllAdress());
        }
      }
      await dispatch(clearInitialState());
    };

    run();
  }, [isLoading]);

  return [onClickDelete, modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete];
};
export default DeleteAdressHook;