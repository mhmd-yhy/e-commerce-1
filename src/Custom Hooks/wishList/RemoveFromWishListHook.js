import { useDispatch, useSelector } from "react-redux";
import { GetWishList, RemoveFromWishList } from "../../Reducer/Api Requests/WishListApiRequests";
import { useEffect } from "react";
import { clearInitialState } from "../../Reducer/Slices/WishListSlice";

const RemoveFromWishListHook = () => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.wishListReducer.removeFromWishList);
  const isLoading = useSelector(state => state.wishListReducer.isLoading);

  const OnClick_RemoveFromWishList = async (id) => {
    await dispatch(RemoveFromWishList(id));
  };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        res === 200 && dispatch(GetWishList());
      }
      await dispatch(clearInitialState());
    };
    run();
  }, [isLoading]);

  return [OnClick_RemoveFromWishList];
};
export default RemoveFromWishListHook;