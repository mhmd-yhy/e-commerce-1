import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apply_CouponToCart } from "../../Reducer/Api Requests/CartApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";

const Apply_CouponToCartHook = () => {
  const dispatch = useDispatch();
  const resApply_Coupon = useSelector(state => state.CartReducer.resApply_Coupon);
  const isLoading = useSelector(state => state.CartReducer.isLoading);
  const [coupon, setCoupon] = useState("");
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);

  const onChange_Coupon = (e) => { setCoupon(e.target.value); };
  const onClick_Apply = async () => { await dispatch(apply_CouponToCart(coupon)); };
  useEffect(() => {
    if (!isLoading) {
      if (resApply_Coupon.message === "Coupon is invalid or has expired") { UseNontification("الكوبون الذي أدخلته غير صالح أو انتهت مدة صلاحيته", "error"); setTotalAfterDiscount(0); }
      if (resApply_Coupon.data) resApply_Coupon.data.totalAfterDiscount && setTotalAfterDiscount(resApply_Coupon.data.totalAfterDiscount);
    }
  }, [isLoading, resApply_Coupon]);

  return [coupon, onChange_Coupon, onClick_Apply, totalAfterDiscount];
};
export default Apply_CouponToCartHook;