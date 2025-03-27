import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAdress } from "../../Reducer/Api Requests/AdressApiRequests";
import UseNontification from "../../Components/Utility/UseNontification";
import { create_Card_Order, create_Cash_Order } from "../../Reducer/Api Requests/OrderApiRequests";
import { useNavigate } from "react-router";
import { getAllCartItems } from "../../Reducer/Api Requests/CartApiRequests";
import { clearInitialState } from "../../Reducer/Slices/OrderSlice";

const Create_OrderHook = () => {
  const [adressID, setAdressID] = useState("0");
  const [adressDetails, setAdressDetails] = useState([]);
  const resAdressDetails = useSelector(state => state.adressReducer.oneAdress);
  const resCreateOrder = useSelector(state => state.OrderReducer.resCreateOrder);
  const isLoading = useSelector(state => state.OrderReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  ///Get Adress Details
  const onSelectAdress = (e) => { setAdressID(e.target.value); };
  useEffect(() => {
    if (adressID !== "0") { dispatch(getOneAdress(adressID)); }
    else { setAdressDetails([]); }
  }, [adressID]);
  useEffect(() => { if (resAdressDetails.data) { setAdressDetails(resAdressDetails.data); } }, [resAdressDetails]);

  const onSelect_PaymentMethod = (e) => { setPaymentMethod(e.target.dataset.paymentmethod); };

  const onClick_Complete = async (cartID) => {
    console.log(paymentMethod);
    if (validationAdress()) {
      if (paymentMethod === "cash") { await dispatch(create_Cash_Order({ cartID, details: adressDetails.details, phone: adressDetails.phone })); }
      else { await dispatch(create_Card_Order({ cartID, details: adressDetails.details, phone: adressDetails.phone })); }
    }
  };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        console.log(resCreateOrder);
        if (resCreateOrder === 201) {
          UseNontification("تم إرسال طلبك للمعاينة ", "success");
          await dispatch(getAllCartItems());
          await dispatch(clearInitialState());
          setTimeout(() => { navigate("/user/allorders"); }, 2000);
        }
      }
    }; run();
  }, [resCreateOrder]);

  const validationAdress = () => {
    if (paymentMethod === "") { UseNontification("لم تقم باختيار طريقة الدفع", "warn"); return false; }
    if (!adressDetails._id) { UseNontification("لم تقم باختيار عنوان الشحن", "warn"); return false; }
    return true;
  };

  return [onSelect_PaymentMethod, onSelectAdress, onClick_Complete];
};

export default Create_OrderHook;
