import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { useDispatch, useSelector } from "react-redux";
import { resetUserPassword } from "../../Reducer/Api Requests/UserProfileApiRequests";
import { clearInitialState } from "../../Reducer/Slices/UserProfileSlice";
import { useNavigate } from "react-router";

const ResetUserPasswordHook = () => {
  const [resetPasswordForm, setResetPasswordForm] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resEdit = useSelector(state => state.UserProfileReducer.resetUserPassword);
  const isLoading = useSelector(state => state.UserProfileReducer.isLoading);

  const onChange_OldPassword = (e) => { setResetPasswordForm({ ...resetPasswordForm, oldPassword: e.target.value }); };
  const onChange_NewPassword = (e) => { setResetPasswordForm({ ...resetPasswordForm, newPassword: e.target.value }); };
  const onChange_ConfirmPassword = (e) => { setResetPasswordForm({ ...resetPasswordForm, confirmPassword: e.target.value }); };
  const handle_Cancel = () => { setResetPasswordForm({ oldPassword: "", newPassword: "", confirmPassword: "" }); };

  const handle_Submit = async () => {
    if (validation()) {
      await dispatch(resetUserPassword({
        "currentPassword": resetPasswordForm.oldPassword,
        "password": resetPasswordForm.newPassword,
        "passwordConfirm": resetPasswordForm.confirmPassword
      }));
    }
  };
  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        if (resEdit?.message === "User recently changed password! Please login again..") { UseNontification("لقد قام المستخدم بتغيير كلمة المرور مؤخرًا! يرجى تسجيل الدخول مرة أخرى حتى تستطيع تغييرها من جديد", "error"); return false; }

        if (resEdit.errors) if (resEdit.errors[0]?.msg === "Incorrect current password") { UseNontification("كلمة المرور الحالية غير صحيحة", "error"); return false; }

        if (resEdit === 200) {
          UseNontification("تم تغيير كلمة المرور , يرجى تسجيل الدخول مجددا", "success");
          await dispatch(clearInitialState());
          handle_Cancel();
          localStorage.removeItem("userData");
          localStorage.removeItem("token");
          setTimeout(() => { navigate("/login"); }, 2000);
        }
      }
    }; run();
  }, [resEdit]);

  const validation = () => {
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=(?:.*[A-Za-z0-9]){5,}).{5,}$/;
    const checkPassword = regexPassword.test(resetPasswordForm.newPassword);
    if (resetPasswordForm.oldPassword === "") { UseNontification("ادخل كلمة المرور القديمة", "error"); return false; }
    if (!checkPassword) { UseNontification("ادخل كلمة مرور تحتوي على 5 أحرف أو أرقام على الأقل، وحرف كبير، وحرف صغير", "error"); return false; }
    else if (resetPasswordForm.confirmPassword !== resetPasswordForm.newPassword) { UseNontification("في صندوق تأكيد كلمة المرور ادخل كلمة مرور مطابقة", "error"); return false; }
    else return true;
  };

  const viewBTNCancel = () => {
    const { oldPassword, newPassword, confirmPassword } = resetPasswordForm;
    if (oldPassword !== "" || newPassword !== "" || confirmPassword !== "") return true;
    else return false;
  };

  return [resetPasswordForm, onChange_OldPassword, onChange_NewPassword, onChange_ConfirmPassword, viewBTNCancel, handle_Cancel, handle_Submit];
};
export default ResetUserPasswordHook;