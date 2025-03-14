import { useEffect, useState } from "react";
import UseNontification from "../../Components/Utility/UseNontification";
import { useNavigate } from "react-router";

const ViewUserProfileHook = () => {
  const [profile, setProfile] = useState({ _id: "", name: "", phone: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const { _id, name, phone, email } = JSON.parse(localStorage.getItem("userData"));
      setProfile({ _id: _id, name: name, phone: phone, email: email });
    } else { UseNontification("لم تقم بتسجيل الدخول", "error"); setTimeout(() => { navigate("/login"); }, 2000); }
  }, []);

  return [profile];
};
export default ViewUserProfileHook;