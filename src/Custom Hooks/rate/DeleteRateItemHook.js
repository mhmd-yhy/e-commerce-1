import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRating, getAllRatings_OfProduct } from "../../Reducer/Api Requests/RatingApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";
import { useParams } from "react-router";
import { clearInitialState } from "../../Reducer/Slices/RatingSlice";
import { getProductDetails } from "../../Reducer/Api Requests/ProductApiRequests";

const DeleteRateItemHook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const resDelete = useSelector(state => state.ratingReducer.resDeleteRating);
  const isLoading = useSelector(state => state.ratingReducer.isLoading);
  const [modalMoodDelete, setModalMoodDelete] = useState(false);
  const [deleteID, setDeleteID] = useState("");

  const closeModalDelete = () => { setDeleteID(""); setModalMoodDelete(!modalMoodDelete); };
  const onClickDelete = async (itemID) => { setModalMoodDelete(true); setDeleteID(itemID); };

  const onAcceptanceDelete = async () => {
    await dispatch(deleteRating(deleteID));
    setModalMoodDelete(false);
  };

  let msgDelete = "هل أنت متأكد من حذف تعليقك على هذا المنتج؟";
  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resDelete === 204) {
          UseNontification("تم حذف تقييمك على هذا المنتج", "success");
          await dispatch(getAllRatings_OfProduct({ id }));
        }
      }
      await dispatch(getProductDetails(id));
      await dispatch(clearInitialState());
    };
    run();
  }, [isLoading]);

  return [onClickDelete, modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete];
};
export default DeleteRateItemHook;
