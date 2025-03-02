import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupon } from "../../Reducer/Api Requests/CouponApiRequests";

const GetAllCouponHook = () => {
  const res = useSelector(state => state.couponReducer.allCoupon);
  const isLoading = useSelector(state => state.couponReducer.isLoading);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  useEffect(() => {
    dispatch(getAllCoupon());
  }, []);

  useEffect(() => {
    if (res.data) setItems(res.data);
  }, [isLoading]);

  const convertDate = (convDate) => {
    const date = new Date(convDate);
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  };

  return [items, convertDate];
};
export default GetAllCouponHook;