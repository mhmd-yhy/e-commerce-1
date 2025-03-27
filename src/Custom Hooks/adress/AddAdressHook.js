import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { useDispatch, useSelector } from "react-redux";
import { addAdress } from "../../Reducer/Api Requests/AdressApiRequests";
import { clearInitialState } from "../../Reducer/Slices/AdressSlice";

const AddAdressHook = () => {
  const [adressForm, setAdressForm] = useState({ alias: "", details: "", phone: "" });
  const dispatch = useDispatch();
  const resAddAdress = useSelector(state => state.adressReducer.resAddAdress);
  const isLoading = useSelector(state => state.adressReducer.isLoading);

  const onChange_AdressAlias = (e) => { setAdressForm({ ...adressForm, alias: e.target.value }); };
  const onChange_AdressDetails = (e) => { setAdressForm({ ...adressForm, details: e.target.value }); };
  const onChange_Phone = (e) => { setAdressForm({ ...adressForm, phone: e.target.value }); };

  const handleOnSubmit = async () => { validation() && await dispatch(addAdress(adressForm)); };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resAddAdress) {
          if (resAddAdress.message === "Invalid Token. please login again") { UseNontification("الرجاء تسجيل الدخول", "error"); return; }
          else if (resAddAdress === 200) { UseNontification("تم إضافة عنوان جديد", "success"); return; }
        }
      }
      await dispatch(clearInitialState());
      setAdressForm({ alias: "", details: "", phone: "" });
    };
    run();
  }, [isLoading]);

  const validation = () => {
    if (adressForm.alias === "") { UseNontification("ادخل اسما للعنوان", "error"); return false; }
    else if (adressForm.details === "") { UseNontification("ادخل العنوان", "error"); return false; }
    else if (adressForm.phone === "") { UseNontification("ادخل رقم الهاتف", "error"); return false; }
    else return true;
  };

  return [adressForm, onChange_AdressAlias, onChange_AdressDetails, onChange_Phone, handleOnSubmit];
};
export default AddAdressHook;