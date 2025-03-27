import { useDispatch, useSelector } from "react-redux";
import { GetWishList } from "../../Reducer/Api Requests/WishListApiRequests";
import { useEffect, useState } from "react";

const GetWishListHook = () => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.wishListReducer.getAllWishList);
  const [wishList_IDArr, setWishList_IDArr] = useState([]);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    localStorage.getItem("userData") !== null && dispatch(GetWishList());
  }, [dispatch]);

  useEffect(() => {
    if (res && res.data) { // تحقق من وجود res و res.data
      setWishList_IDArr(res.data.map(prod => prod._id));
      setWishList(res.data);
    }
  }, [res]);

  return [wishList_IDArr, wishList];
};
export default GetWishListHook;