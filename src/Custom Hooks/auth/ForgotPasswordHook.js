
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseNontification from '../../Components/Utility/UseNontification';
import { clearInitialState } from '../../Reducer/Slices/AuthSlice';
import { forgotPassword } from '../../Reducer/Api Requests/AuthApiRequests';
import { useNavigate } from 'react-router';

const ForgotPasswordHook = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector(state => state.authReducer.forgotPassword);
  const isLoading = useSelector(state => state.authReducer.isLoading);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onClickSubmit = async () => {
    if (validationValue() === true) {
      await dispatch(forgotPassword({ email }));
      await dispatch(clearInitialState());
    }
  };
  useEffect(() => {
    if (res) {
      if (res.status === "Success") {
        UseNontification("تم إرسال كود التحقق إلى بريدك الإلكتروني", "success");
        localStorage.setItem("resetPassword-Email", email);
        setTimeout(() => { navigate("/verifyResetCode"); }, 2000);
      }
      if (res.status === "fail") {
        UseNontification("البريد الإلكتروني غير موجود", "error");
      }
    }
  }, [isLoading]);
  const validationValue = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(regexEmail.test(registerForm.email));
    const checkEmail = regexEmail.test(email);
    if (!checkEmail) { UseNontification("ادخل بريدا صحيحا", "error"); return false; }
    else return true;
  };

  return [email, onChangeEmail, onClickSubmit];
};

export default ForgotPasswordHook;
