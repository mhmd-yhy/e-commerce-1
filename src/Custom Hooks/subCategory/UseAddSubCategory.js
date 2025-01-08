import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../Reducer/Slices/CategorySlice";
import UseNontification from "../../Custom Hooks/UseNontification";
import { createSubCategory } from "../../Reducer/Slices/SubCategorySlice";

const UseAddCategory = () => {
  const category = useSelector(state => state.categoryReducer.category);
  const res = useSelector(state => state.subCategoryReducer.subCategory);
  const isLoading = useSelector(state => state.subCategoryReducer.isLoading);
  const dispatch = useDispatch();
  const [id, setId] = useState("0");
  const [name, setName] = useState("");

  const clearData = () => {
    setName("");
  };

  const handleChangeInput = (e) => {
    setName(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async () => {
    if (name === "") { UseNontification("ادخل اسم التصنيف الفرعي", "warn"); return; }
    if (id === "0") { UseNontification("اختر التصنيف الرئيسي", "warn"); return; }
    if (!navigator.onLine) {
      UseNontification("تحقق من الاتصال في الانترنت", "error");
      return;
    }
    await dispatch(createSubCategory({
      "name": name,
      "category": id
    }));
  };

  useEffect(() => {
    dispatch(GetAllCategory());
    if (!isLoading) {
      clearData();
      if (res) res.status && UseNontification("تمت عملية الإضافة", "success");
      else UseNontification("هناك مشكلة في عملية الإضافة", "error");
    }
  }, [isLoading]);

  return [category, isLoading, name, handleChangeInput, handleChangeSelect, handleSubmit];
};

export default UseAddCategory;
