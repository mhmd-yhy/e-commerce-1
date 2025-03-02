import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRating, getAllRatings_OfProduct } from "../../Reducer/Api Requests/RatingApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";
import { useParams } from "react-router";
import { clearInitialState } from "../../Reducer/Slices/RatingSlice";
import { getProductDetails } from "../../Reducer/Api Requests/ProductApiRequests";

const EditRateItemHook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const resEdit = useSelector(state => state.ratingReducer.resEditRating);
  const allRatings = useSelector(state => state.ratingReducer.allRatings);
  const isLoading = useSelector(state => state.ratingReducer.isLoading);
  const [modalMoodEdit, setModalMoodEdit] = useState(false);
  const [ratingForm, setRatingForm] = useState({ rating: 0, review: "" });
  const [editID, setEditID] = useState("");

  ///get rating data
  const onClickEdit = (itemID) => {
    if (allRatings.data) {
      const { rating, review } = allRatings.data.filter((rateing) => rateing._id === itemID)[0];
      setRatingForm({ rating: rating, review: review });
    }
    setModalMoodEdit(true);
    setEditID(itemID);
  };

  const onChange_ReviewComment = (e) => { setRatingForm({ ...ratingForm, review: e.target.value }); };

  const onChange_RateStars = (value) => { setRatingForm({ ...ratingForm, rating: value }); };

  const onAcceptanceEdit = async () => {
    validationValue() === true &&
      await dispatch(editRating({ editID, review: ratingForm.review, rating: ratingForm.rating, }));
    setModalMoodEdit(false);
  };

  const validationValue = () => {
    if (ratingForm.review === "") { UseNontification("الرجاء كتابة تعليق", "error"); return false; }
    if (ratingForm.rating === 0) { UseNontification("اختر تقييما بالضغط على النجوم", "error"); return false; }
    return true;
  };

  const closeModalEdit = () => { setEditID(""); setModalMoodEdit(!modalMoodEdit); };

  let msgEdit = "";
  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resEdit === 200) {
          UseNontification("تم تعديل تقييمك على هذا المنتج", "success");
          await dispatch(getAllRatings_OfProduct({ id }));
        }
      }
      await dispatch(getProductDetails(id));
      await dispatch(clearInitialState());
    };
    run();
  }, [isLoading]);

  return [onClickEdit, modalMoodEdit, closeModalEdit, ratingForm, onChange_ReviewComment, onChange_RateStars, onAcceptanceEdit, msgEdit];
};
export default EditRateItemHook;
