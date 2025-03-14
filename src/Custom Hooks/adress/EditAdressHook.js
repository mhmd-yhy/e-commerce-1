import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { useDispatch, useSelector } from "react-redux";
import { editAdress, getOneAdress } from "../../Reducer/Api Requests/AdressApiRequests";
import { clearInitialState } from "../../Reducer/Slices/AdressSlice";
import { useNavigate, useParams } from "react-router";

const EditAdressHook = () => {
  const { id } = useParams();
  const [adressForm, setAdressForm] = useState({ alias: "", details: "", phone: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resEditAdress = useSelector(state => state.adressReducer.resEditAdress);
  const adressDetails = useSelector(state => state.adressReducer.oneAdress);
  const isLoading = useSelector(state => state.adressReducer.isLoading);

  useEffect(() => {
    dispatch(getOneAdress(id));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (adressDetails.data) setAdressForm({ alias: adressDetails.data.alias, details: adressDetails.data.details, phone: adressDetails.data.phone });
    }
  }, [adressDetails]);

  const onChange_AdressAlias = (e) => {
    setAdressForm({ ...adressForm, alias: e.target.value });
  };
  const onChange_AdressDetails = (e) => {
    setAdressForm({ ...adressForm, details: e.target.value });
  };
  const onChange_Phone = (e) => {
    setAdressForm({ ...adressForm, phone: e.target.value });
  };

  const handleOnSubmit = async () => {
    validation() &&
      await dispatch(editAdress({ id, alias: adressForm.alias, details: adressForm.details, phone: adressForm.phone }));
  };

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resEditAdress) {
          if (resEditAdress === 200) {
            UseNontification("تم تعديل العنوان", "success");
            setAdressForm({ alias: "", details: "", phone: "" });
            setTimeout(() => { navigate("/user/addresses"); }, 2000);
          }
        }
      }
      await dispatch(clearInitialState());
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
export default EditAdressHook;