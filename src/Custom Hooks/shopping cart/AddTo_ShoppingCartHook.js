import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addToCard } from "../../Reducer/Api Requests/CartApiRequests";
import { clearInitialState } from "../../Reducer/Slices/CartSlice";

const AddTo_ShoppingCartHook = () => {
  const { id } = useParams();
  const [cardForm, setcardForm] = useState({ id: "", color: "" });
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.CartReducer.isLoading);
  const resAdd = useSelector(state => state.CartReducer.resAddToCard);
  const navigate = useNavigate();
  const onSelect_color = (e) => { setcardForm({ id: id, color: e.target.dataset.color }); };

  const onClick_AddToCart = async () => {
    if (checkColor()) await dispatch(addToCard({ productId: cardForm.id, color: cardForm.color }));
  };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resAdd.message === "You are not logged in. Please login to get access") { UseNontification("لم تقم بتسجيل الدخول , قم بتسجيل الدخول مجددا", "error"); return false; }
        if (resAdd.data?.totalCartPrice) {
          UseNontification("تم إضافة منتج إلى العربة", "success");
          await dispatch(clearInitialState());
          setTimeout(() => { navigate("/shopping-cart"); }, 2000);
        }

      }
    }; run();
  }, [resAdd]);

  const checkColor = () => {
    if (cardForm.color === "") { UseNontification("لم تقم باختيار لون المنتج!", "error"); return false; }
    else return true;
  };

  return [cardForm, onSelect_color, onClick_AddToCart];
};
export default AddTo_ShoppingCartHook;