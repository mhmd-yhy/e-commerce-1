
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseNontification from '../../Components/Utility/UseNontification';
import { clearInitialState } from '../../Reducer/Slices/AuthSlice';
import { forgotPassword, resetPassword } from '../../Reducer/Api Requests/AuthApiRequests';
import { useNavigate } from 'react-router';

const ResetPasswordHook = () => {
  const [resetPasswordForm, setResetPasswordForm] = useState({ password: "", confirmPassword: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector(state => state.authReducer.resetPassword);
  const isLoading = useSelector(state => state.authReducer.isLoading);
  const onChange_Password = (e) => {
    setResetPasswordForm({ ...resetPasswordForm, password: e.target.value });
  };
  const onChange_ConfirmPassword = (e) => {
    setResetPasswordForm({ ...resetPasswordForm, confirmPassword: e.target.value });
  };

  const onClickSubmit = async () => {
    if (validationValue() === true) {
      if (localStorage.getItem("resetPassword-Email") !== null) {
        await dispatch(resetPassword({
          "email": localStorage.getItem("resetPassword-Email"),
          "newPassword": resetPasswordForm.password
        }));
        await dispatch(clearInitialState());
      }
    }
  };
  useEffect(() => {
    if (res) {
      if (res === 200) {
        UseNontification("تم تغيير كلمة المرور", "success");
        localStorage.removeItem("resetPassword-Email");
        setTimeout(() => { navigate("/login"); }, 2000);
      }
      if (res === "fail") {
        UseNontification("حدث خطأ أثناء تغيير كلمة المرور", "error");
      }
    }
  }, [isLoading]);
  const validationValue = () => {
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=(?:.*[A-Za-z0-9]){5,}).{5,}$/;
    const checkPassword = regexPassword.test(resetPasswordForm.password);
    if (!checkPassword) { UseNontification("ادخل كلمة مرور تحتوي على 5 أحرف أو أرقام على الأقل، وحرف كبير، وحرف صغير", "error"); return false; }
    else if (resetPasswordForm.confirmPassword !== resetPasswordForm.password) { UseNontification("في صندوق تأكيد كلمة المرور ادخل كلمة مرور مطابقة", "error"); return false; }
    else return true;
  };

  return [resetPasswordForm, onChange_Password, onChange_ConfirmPassword, onClickSubmit];
};

export default ResetPasswordHook;
