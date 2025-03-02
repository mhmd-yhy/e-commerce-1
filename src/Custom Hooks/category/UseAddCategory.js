import { useEffect, useState } from "react";
import { clearInitialState } from "../../Reducer/Slices/CategorySlice";
import { CreateCategory } from "../../Reducer/Api Requests/CategoryApiRequests";
import { useDispatch, useSelector } from "react-redux";
//Notification React
import UseNontification from "../../Components/Utility/UseNontification";
import { useNavigate } from "react-router";

const UseAddCategory = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [selectedImage, setImage] = useState({ image: null, imageData: "" });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.categoryReducer.isLoading);
  const res = useSelector((state) => state.categoryReducer.resCreateCategory);

  useEffect(() => {
    if (loading === false) {
      clearData();
      if (res.message === "Invalid Token. please login again") {
        UseNontification("لا تمتلك الصلاحية , الرجاء تسجيل الدخول", "error");
        setTimeout(() => { navigate("/login"); }, 3000);
      }
      if (res) res === 201 && UseNontification("تمت عملية الإضافة", "success");
      else UseNontification("هناك مشكلة في عملية الإضافة", "error");
    }
    dispatch(clearInitialState());
  }, [loading]);

  const clearData = () => {
    setImage({ image: null, imageData: "" });
    setName("");
  };

  const onChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage({ image: URL.createObjectURL(e.target.files[0]), imageData: e.target.files[0] });
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedImage.imageData);
    await dispatch(CreateCategory(formData));
  };

  return [name, selectedImage, loading, onChangeName, onChangeImage, handleSubmit];
};

export default UseAddCategory;
