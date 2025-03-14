import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearInitialState } from "../../Reducer/Slices/BrandSlice";
import UseNontification from "../../Components/Utility/UseNontification";
import { createBrand } from "../../Reducer/Api Requests/BrandApiRequests";
import { useNavigate } from "react-router";

const UseAddBrand = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [selectedImage, setImage] = useState({ image: null, imageData: "" });
  const dispatch = useDispatch();
  const res = useSelector(state => state.brandReducer.resCreateBrand);
  const isLoading = useSelector(state => state.brandReducer.isLoading);

  useEffect(() => {
    if (!isLoading) {
      clearData();
      if (res.message === "Invalid Token. please login again") {
        UseNontification("لا تمتلك الصلاحية , الرجاء تسجيل الدخول", "error");
        setTimeout(() => { navigate("/login"); }, 3000);
      }
      if (res) res === 201 && UseNontification("تمت عملية الإضافة", "success");
      else UseNontification("هناك مشكلة في عملية الإضافة", "error");
    }
    dispatch(clearInitialState());
  }, [isLoading]);

  const clearData = () => {
    setImage({ image: null, imageData: "" });
    setName("");
  };

  const OnchangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage({ image: URL.createObjectURL(e.target.files[0]), imageData: e.target.files[0] });
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedImage.imageData);
    await dispatch(createBrand(formData));
  };



  return [name, selectedImage, isLoading, OnchangeName, onChangeImage, handleSubmit];
};

export default UseAddBrand;
