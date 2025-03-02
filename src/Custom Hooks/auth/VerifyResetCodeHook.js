
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseNontification from '../../Components/Utility/UseNontification';
import { clearInitialState } from '../../Reducer/Slices/AuthSlice';
import { verifyResetCode } from '../../Reducer/Api Requests/AuthApiRequests';
import { useNavigate } from 'react-router';

const VerifyResetCodeHook = () => {
  const [verifyCode, setVerifycode] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector(state => state.authReducer.verifyResetCode);
  const isLoading = useSelector(state => state.authReducer.isLoading);

  const onChangeVerifyCode = (e) => {
    setVerifycode(e.target.value);
  };

  const onClickSubmit = async () => {
    if (validationValue() === true) {
      await dispatch(verifyResetCode({
        "resetCode": verifyCode
      }));
      await dispatch(clearInitialState());
    }
  };
  useEffect(() => {
    if (res) {

      if (res.status === "Success") {
        UseNontification("تم التأكد من كود التحقق", "success");
        setTimeout(() => { navigate("/resetPassword"); }, 2000);
      }
      if (res.status === "fail") {
        UseNontification("كود التحقق غير صحيح", "error");
      }
    }
  }, [isLoading]);
  const validationValue = () => {
    if (verifyCode === "") { UseNontification("ادخل كود التحقق", "error"); return false; }
    else return true;
  };

  return [verifyCode, onChangeVerifyCode, onClickSubmit];
};

export default VerifyResetCodeHook;
