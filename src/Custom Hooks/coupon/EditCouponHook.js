import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editCoupon, getOneCoupon } from "../../Reducer/Api Requests/CouponApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/CouponSlice";

const EditCouponHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const couponDetails = useSelector((state) => state.couponReducer.oneCoupon);
  const resEditCoupon = useSelector((state) => state.couponReducer.resEditCoupon);
  const isLoading = useSelector((state) => state.couponReducer.isLoading);
  const [editForm, setEditForm] = useState({ name: "", expire: "", discount: "" });

  ///get couponDetails
  useEffect(() => {
    dispatch(getOneCoupon(id));
  }, [id]);
  useEffect(() => {
    if (!isLoading) {
      (couponDetails.data) &&
        setEditForm({ name: couponDetails.data.name, expire: convertDate(couponDetails.data.expire), discount: couponDetails.data.discount });
    }
  }, [isLoading, dispatch]);

  const convertDate = (convDate) => {
    const date = new Date(convDate);
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  };

  const OnChange_CouponName = (e) => { setEditForm({ ...editForm, name: e.target.value }); };
  const OnChange_CouponDate = (e) => { setEditForm({ ...editForm, expire: e.target.value }); };
  const OnChange_CouponDiscount = (e) => { setEditForm({ ...editForm, discount: e.target.value }); };

  const handleSubmit = async () => {
    validationValue() &&
      await dispatch(editCoupon({ id, name: editForm.name, expire: editForm.expire, discount: editForm.discount }));
  };

  const validationValue = () => {
    if (localStorage.getItem("userData") === null) { UseNontification("الرجاء تسجيل الدخول", "error"); return false; }
    if (editForm.name === "") { UseNontification("ادخل اسم الكوبون", "error"); return false; }
    if (editForm.expire === "") { UseNontification("ادخل تاريخ الإنتهاء", "error"); return false; }
    if (editForm.discount === 0) { UseNontification("ادخل نسبة الخصم", "error"); return false; }
    return true;
  };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resEditCoupon === 200) {
          UseNontification("تم تعديل الكوبون", "success");
          await dispatch(clearInitialState());
          setTimeout(() => { navigate("/admin/coupons-managment"); }, 2000);
        }
      }
    };
    run();
  }, [resEditCoupon]);

  return [editForm, OnChange_CouponName, OnChange_CouponDate, OnChange_CouponDiscount, handleSubmit];
};
export default EditCouponHook;
