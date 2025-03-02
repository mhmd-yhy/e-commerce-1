import { useEffect, useState } from "react";
import { useParams } from "react-router";
import UseNontification from "../../Components/Utility/UseNontification";
import { useDispatch, useSelector } from "react-redux";
import { createRating, getAllRatings_OfProduct } from "../../Reducer/Api Requests/RatingApiRequests";
import { clearInitialState } from "../../Reducer/Slices/RatingSlice";

const UseAddRating = () => {
  const { id } = useParams();
  const [ratingForm, setRatingForm] = useState({ rating: 0, review: "" });
  const dispatch = useDispatch();
  const res = useSelector(state => state.ratingReducer.resCreateRating);
  const isLoading = useSelector(state => state.ratingReducer.isLoading);
  useEffect(() => {
    if (!isLoading) {
      if (res) {
        res.errors && res.errors[0].msg === "You already added review on this product" && UseNontification("لقد قمت بالفعل بإضافة تقييم على هذا المنتج", "error");
        res.errors && res.errors[0].msg === "Review required" && UseNontification("الرجاء كتابة تعليق", "error");
        res.errors && res.errors[0].msg === "Rating min value 1.0 and max 5.0" && UseNontification("اختر تقييما بالضغط على النجوم", "error");
        if (res === 201) {
          UseNontification("تم إضافة تقييمك على هذا المنتج", "success");
          dispatch(getAllRatings_OfProduct({ id }));
          setRatingForm({ rating: 0, review: "" });
        }
      } else UseNontification("هناك مشكلة في عملية الإضافة", "error");
    }
    clearData();
    dispatch(clearInitialState());
  }, [isLoading]);

  const onChange_ReviewComment = (e) => { setRatingForm({ ...ratingForm, review: e.target.value }); };

  const onChange_RateStars = (value) => { setRatingForm({ ...ratingForm, rating: value }); };

  const onSubmit = async () => {
    validationValue() === true &&
      await dispatch(createRating({
        "review": ratingForm.review,
        "rating": ratingForm.rating,
        "product": id,
        "user": JSON.parse(localStorage.getItem("userData"))._id
      }));
  };

  const validationValue = () => {
    if (localStorage.getItem("userData") === null) { UseNontification("الرجاء تسجيل الدخول", "error"); return false; }
    if (ratingForm.review === "") { UseNontification("الرجاء كتابة تعليق", "error"); return false; }
    if (ratingForm.rating === 0) { UseNontification("اختر تقييما بالضغط على النجوم", "error"); return false; }
    return true;
  };

  const clearData = () => { setRatingForm({ review: "", rating: 0 }); };

  return [ratingForm, onChange_ReviewComment, onChange_RateStars, onSubmit];
};
export default UseAddRating;