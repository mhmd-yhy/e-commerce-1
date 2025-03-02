import { useDispatch, useSelector } from "react-redux";
import { GetWishList } from "../../Reducer/Api Requests/WishListApiRequests";
import { useEffect } from "react";

const GetWishListHook = () => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.wishListReducer.getAllWishList);
  useEffect(() => {
    localStorage.getItem("userData") !== null && dispatch(GetWishList());
  }, [dispatch]);
  let wishList_IDArr = res.data ? res.data.map(prod => prod._id) : [];
  let wishList = res.data ? res.data : [];
  return [wishList_IDArr, wishList];
};
export default GetWishListHook;