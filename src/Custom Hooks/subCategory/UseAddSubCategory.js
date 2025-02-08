import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseNontification from "../../Custom Hooks/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/SubCategorySlice";
import { GetAllCategory } from "../../Reducer/Api Requests/CategoryApiRequests";
import { createSubCategory } from "../../Reducer/Api Requests/SubCategoryApiRequests";

const UseAddCategory = () => {
  const categories = useSelector(state => state.categoryReducer.categories);
  const res = useSelector(state => state.subCategoryReducer.resCreateSubCategory);
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
    const run = async () => {
      await dispatch(GetAllCategory());
      if (!isLoading) {
        clearData();
        if (res) res === 201 && UseNontification("تمت عملية الإضافة", "success");
        else UseNontification("هناك مشكلة في عملية الإضافة", "error");
      }
      await dispatch(clearInitialState());
    };
    run();
  }, [isLoading]);

  return [categories, isLoading, name, handleChangeInput, handleChangeSelect, handleSubmit];
};

export default UseAddCategory;
