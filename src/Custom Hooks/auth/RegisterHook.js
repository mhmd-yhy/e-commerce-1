import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../Reducer/Api Requests/AuthApiRequests";
import { useNavigate } from "react-router";
import { clearInitialState } from "../../Reducer/Slices/AuthSlice";

const RegisterHook = () => {
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const dispatch = useDispatch();
  const res = useSelector(state => state.authReducer.createUser);
  const isLoading = useSelector(state => state.authReducer.isLoading);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading) {
      if (res.token) {
        UseNontification("تم تسجيل حساب جديد", "success");
        setRegisterForm({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
        setTimeout(() => { navigate("/login"); }, 2000);
      }
      if (res.errors) UseNontification(res.errors[0].msg, "error");
    }
  }, [dispatch, res]);
  const onChange_name = (e) => {
    setRegisterForm({ ...registerForm, name: e.target.value });
  };

  const onChange_email = (e) => {
    setRegisterForm({ ...registerForm, email: e.target.value });
  };

  const onChange_phone = (e) => {
    setRegisterForm({ ...registerForm, phone: e.target.value });
  };

  const onChange_password = (e) => {
    setRegisterForm({ ...registerForm, password: e.target.value });
  };

  const onChange_confirmPassword = (e) => {
    setRegisterForm({ ...registerForm, confirmPassword: e.target.value });
  };

  const onClickSubmit = async () => {
    if (validationValue() === true) {
      await dispatch(createNewUser({
        "name": registerForm.name,
        "email": registerForm.email,
        "password": registerForm.password,
        "passwordConfirm": registerForm.confirmPassword,
        "phone": registerForm.phone,
      }));
      await dispatch(clearInitialState());
    }
  };

  const validationValue = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=(?:.*[A-Za-z0-9]){5,}).{5,}$/;
    // console.log(regexEmail.test(registerForm.email));
    const checkEmail = regexEmail.test(registerForm.email);
    const checkPassword = regexPassword.test(registerForm.password);

    if (registerForm.name.length <= 2) { UseNontification("ادخل اسما صحيحا", "error"); return false; }
    else if (!checkEmail) { UseNontification("ادخل بريدا صحيحا", "error"); return false; }
    else if (registerForm.phone.length < 10) { UseNontification("ادخل رقم هاتف صحيح", "error"); return false; }
    else if (!checkPassword) { UseNontification("ادخل كلمة مرور تحتوي على 5 أحرف أو أرقام على الأقل، وحرف كبير، وحرف صغير", "error"); return false; }
    else if (registerForm.confirmPassword !== registerForm.password) { UseNontification("في صندوق تأكيد كلمة المرور ادخل كلمة مرور مطابقة", "error"); return false; }
    else return true;
  };

  return [registerForm, onChange_name, onChange_email, onChange_phone, onChange_password, onChange_confirmPassword, onClickSubmit];
};

export default RegisterHook;
