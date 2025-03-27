import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Reducer/Api Requests/AuthApiRequests";
import { useNavigate } from "react-router";
import { clearInitialState } from "../../Reducer/Slices/AuthSlice";
import { getAllCartItems } from "../../Reducer/Api Requests/CartApiRequests";

const LoginHook = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const res = useSelector(state => state.authReducer.loginUser);
  const isLoading = useSelector(state => state.authReducer.isLoading);
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (res.token) {
          UseNontification("تم تسجيل الدخول بنجاح", "success");
          localStorage.setItem("token", res.token);
          localStorage.setItem("userData", JSON.stringify(res.data));
          setLoginForm({ email: "", password: "", });
          await dispatch(getAllCartItems());
          setTimeout(() => { navigate("/"); }, 2000);
          setTimeout(() => { window.location.reload(); }, 3000);
        }
        if (res.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("userData");
          UseNontification("خطأ في البريد الإلكتروني أو كلمة المرور", "error");
        }
      }
    }; run();
  }, [dispatch, res]);

  const onChange_email = (e) => {
    setLoginForm({ ...loginForm, email: e.target.value });
  };

  const onChange_password = (e) => {
    setLoginForm({ ...loginForm, password: e.target.value });
  };

  const onClickSubmit = async () => {
    if (validationValue() === true) {
      await dispatch(loginUser({
        "email": loginForm.email,
        "password": loginForm.password,
      }));
      await dispatch(clearInitialState());
    }
  };

  const validationValue = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(regexEmail.test(registerForm.email));
    const checkEmail = regexEmail.test(loginForm.email);
    if (!checkEmail) { UseNontification("ادخل بريدا صحيحا", "error"); return false; }
    else if (loginForm.password === "") { UseNontification("ادخل كلمة المرور", "error"); return false; }
    else return true;
  };

  return [loginForm, onChange_email, onChange_password, onClickSubmit];
};

export default LoginHook;
