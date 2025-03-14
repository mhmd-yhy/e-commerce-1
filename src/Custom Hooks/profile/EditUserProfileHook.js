import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUserProfile } from "../../Reducer/Api Requests/UserProfileApiRequests";
import { clearInitialState } from "../../Reducer/Slices/UserProfileSlice";

const EditUserProfileHook = () => {
  const [profile, setProfile] = useState({ _id: "", name: "", phone: "", email: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resEdit = useSelector(state => state.UserProfileReducer.resEditUserProfile);
  const isLoading = useSelector(state => state.UserProfileReducer.isLoading);
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const phone = queryParams.get("phone");
  const email = queryParams.get("email");
  let oldEmail = email;
  useEffect(() => { if (id) setProfile({ _id: id, name: name, phone: phone, email: email }); }, []);

  const onChange_Name = (e) => { setProfile({ ...profile, name: e.target.value }); };
  const onChange_Phone = (e) => { setProfile({ ...profile, phone: e.target.value }); };
  const onChange_Email = (e) => { setProfile({ ...profile, email: e.target.value }); };
  const handle_Cancel = () => { navigate("/user/profile"); };
  const handle_Submit = async () => {
    if (validation()) {
      if (oldEmail !== profile.email)
        await dispatch(editUserProfile({ name: profile.name, phone: profile.phone, email: profile.email }));
      else await dispatch(editUserProfile({ name: profile.name, phone: profile.phone }));
    }
  };
  useEffect(() => {
    const run = async () => {
      if (!isLoading)
        if (resEdit?.data) {
          if (resEdit.data.user) {
            localStorage.setItem("userData", JSON.stringify(resEdit.data.user));
            UseNontification("تم تعديل معلومات الملف الشخصي", "success");
            await dispatch(clearInitialState());
            setTimeout(() => { navigate("/user/profile"); }, 2000);
          }
        }
    }; run();
  }, [resEdit]);

  const validation = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(regexEmail.test(registerForm.email));
    const checkEmail = regexEmail.test(profile.email);

    if (profile.name === "") { UseNontification("ادخل اسما للمستخدم", "error"); return false; }
    else if (profile.phone === "") { UseNontification("ادخل رقم المستخدم", "error"); return false; }
    else if (!checkEmail) { UseNontification("ادخل بريدا صحيحا", "error"); return false; }
    else return true;
  };

  return [profile, onChange_Name, onChange_Phone, onChange_Email, handle_Cancel, handle_Submit];
};
export default EditUserProfileHook;