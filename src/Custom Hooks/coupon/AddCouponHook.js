import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoupon, getAllCoupon } from "../../Reducer/Api Requests/CouponApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/CouponSlice";

const AddCouponHook = () => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.couponReducer.resCreateCoupon);
  const isLoading = useSelector(state => state.couponReducer.isLoading);
  const [couponForm, setCouponForm] = useState({ name: "", expire: "", discount: 0 });
  const OnChange_CouponName = (e) => { setCouponForm({ ...couponForm, name: e.target.value }); };
  const OnChange_CouponDate = (e) => { setCouponForm({ ...couponForm, expire: e.target.value }); };
  const OnChange_CouponDiscount = (e) => { setCouponForm({ ...couponForm, discount: e.target.value }); };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (res === 201) {
          UseNontification("تم إضافة كوبون جديد", "success");
          await dispatch(clearInitialState());
          await dispatch(getAllCoupon());
        }
        if (res.message)
          res.message === `Duplicate field value: \"${couponForm.name}\". Please use another value!`
            && UseNontification("اسم الكوبون موجود , اخل اسما جديدا", "error");
      }
    };
    run();
  }, [isLoading]);
  const handleSubmit = async () => {
    if (validationValue()) {
      await dispatch(createCoupon({ "name": couponForm.name, "expire": couponForm.expire, "discount": couponForm.discount }));
      setCouponForm({ name: "", expire: "", discount: 0 });
    }
  };

  const validationValue = () => {
    if (localStorage.getItem("userData") === null) { UseNontification("الرجاء تسجيل الدخول", "error"); return false; }
    if (couponForm.name === "") { UseNontification("ادخل اسم الكوبون", "error"); return false; }
    if (couponForm.expire === "") { UseNontification("ادخل تاريخ الإنتهاء", "error"); return false; }
    if (couponForm.discount === 0) { UseNontification("ادخل نسبة الخصم", "error"); return false; }
    return true;
  };

  return [couponForm, OnChange_CouponName, OnChange_CouponDate, OnChange_CouponDiscount, handleSubmit, isLoading];
};
export default AddCouponHook;