import { useEffect, useState } from "react";
import { clearInitialState } from "../../Reducer/Slices/CategorySlice";
import { CreateCategory } from "../../Reducer/Api Requests/CategoryApiRequests";
import { useDispatch, useSelector } from "react-redux";
//Notification React
import UseNontification from "../../Custom Hooks/UseNontification";
import 'react-toastify/dist/ReactToastify.css';

const UseAddCategory = () => {
  const [name, setName] = useState("");
  const [selectedImage, setImage] = useState({ image: null, imageData: "" });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.categoryReducer.isLoading);
  const res = useSelector((state) => state.categoryReducer.resCreateCategory);
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

  useEffect(() => {
    if (loading === false) {
      clearData();
      if (res) res === 201 && UseNontification("تمت عملية الإضافة", "success");
      else UseNontification("هناك مشكلة في عملية الإضافة", "error");
    }
    dispatch(clearInitialState());
  }, [loading]);
  return [name, selectedImage, loading, onChangeName, onChangeImage, handleSubmit];
};

export default UseAddCategory;
