import { useDispatch, useSelector } from "react-redux";
import { AddToWishList, GetWishList } from "../../Reducer/Api Requests/WishListApiRequests";
import { useEffect } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/WishListSlice";

const AddToWishListHook = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const res = useSelector(state => state.wishListReducer.addToWishList);
  const isLoading = useSelector(state => state.wishListReducer.isLoading);
  const OnClick_AddToWishList = async (id) => {
    localStorage.getItem("userData") !== null ? await dispatch(AddToWishList(id)) : UseNontification("لا تمتلك الصلاحية , الرجاء تسجيل الدخول", "error");
  };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        res === 200 && dispatch(GetWishList());
        // if (res.message === "Invalid Token. please login again") {
        //   UseNontification("لا تمتلك الصلاحية , الرجاء تسجيل الدخول", "error");
        //   setTimeout(() => { navigate("/login"); }, 3000);
        // }
      }
      await dispatch(clearInitialState());
    };
    run();
  }, [isLoading]);

  return [OnClick_AddToWishList];
};
export default AddToWishListHook;