import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon, getAllCoupon } from "../../Reducer/Api Requests/CouponApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/CouponSlice";

const DeleteCouponHook = () => {
  const dispatch = useDispatch();
  const resDelete = useSelector(state => state.couponReducer.resDeleteCoupon);
  const isLoading = useSelector(state => state.couponReducer.isLoading);
  const [modalMoodDelete, setModalMoodDelete] = useState(false);
  const [deleteID, setDeleteID] = useState("");

  const closeModalDelete = () => { setDeleteID(""); setModalMoodDelete(!modalMoodDelete); };
  const onClickDelete = async (itemID) => { setModalMoodDelete(true); setDeleteID(itemID); };

  const onAcceptanceDelete = async () => {
    await dispatch(deleteCoupon(deleteID));
    setModalMoodDelete(false);
  };

  let msgDelete = "هل أنت متأكد من حذف هذا الكوبون ؟";
  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resDelete === 204) {
          UseNontification("تم حذف هذا الكوبون", "success");
          await dispatch(getAllCoupon());
        }
      }
      await dispatch(clearInitialState());
    };
    run();
  }, [isLoading]);

  return [onClickDelete, modalMoodDelete, closeModalDelete, onAcceptanceDelete, msgDelete];
};
export default DeleteCouponHook;


