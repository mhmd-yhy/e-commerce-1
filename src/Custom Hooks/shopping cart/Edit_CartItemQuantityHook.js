import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItemQuantity, getAllCartItems } from "../../Reducer/Api Requests/CartApiRequests";
import { clearInitialState } from "../../Reducer/Slices/CartSlice";

const Edit_CartItemQuantityHook = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.CartReducer.isLoading);
  const resEdit = useSelector(state => state.CartReducer.resEditItemQuantity);
  const onChange_Quantity = (value) => {
    setQuantity(value);
  };
  const onClick_Edit = async (itemID) => {
    await dispatch(editItemQuantity({ itemID, quantity }));
  };
  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resEdit === 200) {
          await dispatch(getAllCartItems());
          await dispatch(clearInitialState());
        }
      }
    }; run();
  }, [isLoading, resEdit]);
  return [quantity, onChange_Quantity, onClick_Edit];
};
export default Edit_CartItemQuantityHook;