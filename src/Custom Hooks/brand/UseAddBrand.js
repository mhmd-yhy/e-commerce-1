import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrand } from "../../Reducer/Slices/BrandSlice";
import UseNontification from "../../Custom Hooks/UseNontification";

const UseAddBrand = () => {
  const [name, setName] = useState("");
  const [selectedImage, setImage] = useState({ image: null, imageData: "" });
  const dispatch = useDispatch();
  const res = useSelector(state => state.brandReducer.brands);
  const isLoading = useSelector(state => state.brandReducer.isLoading);

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

  useEffect(() => {
    if (!isLoading) {
      clearData();
      if (res) res.status && UseNontification("تمت عملية الإضافة", "success");
      else UseNontification("هناك مشكلة في عملية الإضافة", "error");
    }
  }, [isLoading]);

  return [name, selectedImage, isLoading, OnchangeName, onChangeImage, handleSubmit];
};

export default UseAddBrand;
