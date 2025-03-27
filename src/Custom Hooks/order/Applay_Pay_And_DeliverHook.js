import { useDispatch, useSelector } from "react-redux";
import { applayDeliver, applayPay, getOneOrder } from "../../Reducer/Api Requests/OrderApiRequests";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/OrderSlice";

const Applay_Pay_And_DeliverHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const resPaid = useSelector(state => state.OrderReducer.resPaid);
  const resDelivered = useSelector(state => state.OrderReducer.resDelivered);
  const isLoading = useSelector(state => state.OrderReducer.isLoading);
  const [pay, setPay] = useState(false);
  const [deliver, setDeliver] = useState(false);

  const onChange_status = (type) => {
    if (type === "تم الدفع") { setPay(true); setDeliver(false); }
    if (type === "تم التوصيل") { setDeliver(true); setPay(false); }
    if (type === "0") { setDeliver(false); setPay(false); }
  };

  const onClick_Applay = async () => {
    pay && await dispatch(applayPay(id));
    deliver && await dispatch(applayDeliver(id));
  };

  useEffect(() => {
    if (!isLoading) {
      if (resPaid === 200) {
        UseNontification("تم الدفع", "success");
        dispatch(clearInitialState());
      }
    }
  }, [resPaid]);
  useEffect(() => {
    if (!isLoading) {
      if (resDelivered === 200) {
        UseNontification("تم التوصيل", "success");
        dispatch(clearInitialState());
      }
    }
  }, [resDelivered]);

  useEffect(() => { dispatch(getOneOrder(id)); }, [resDelivered, resPaid]);

  return [onChange_status, onClick_Applay];
};

export default Applay_Pay_And_DeliverHook;
