import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/ProductSlice";
import { GetAllCategory } from "../../Reducer/Api Requests/CategoryApiRequests";
import { getAllBrand } from "../../Reducer/Api Requests/BrandApiRequests";
import { getSubCategory_By_CategoryID } from "../../Reducer/Api Requests/SubCategoryApiRequests";
import { createProduct } from "../../Reducer/Api Requests/ProductApiRequests";
import { useNavigate } from "react-router";

const UseAddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer.categories);
  const brand = useSelector((state) => state.brandReducer.brands);
  const subCategory = useSelector((state) => state.subCategoryReducer.subCategory);
  const res = useSelector((state) => state.productReducer.resCreateProduct);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const [form, setForm] = useState({
    imagesArr: [],
    name: "",
    desc: "",
    price: "السعر قبل الخصم",
    priceAfterDiscount: "السعر بعد الخصم",
    quantity: "الكمية المحددة",
    categoryID: "0",
    BrandID: "0",
    subCategoryID: [],
    colorsArr: []
  });
  const [showColorsPicker, setShowColorsPicker] = useState(false);
  useEffect(() => {
    dispatch(GetAllCategory());
    dispatch(getAllBrand());
    if (!isLoading) {
      clearData();
      if (res.message === "Invalid Token. please login again") {
        UseNontification("لا تمتلك الصلاحية , الرجاء تسجيل الدخول", "error");
        setTimeout(() => { navigate("/login"); }, 3000);
      }
      if (res) {
        if (res === 201) {
          UseNontification("تمت عملية الإضافة", "success");
          setTimeout(() => { navigate("/admin/products-managment"); }, 3000);
        }
      }
      else UseNontification("هناك مشكلة في عملية الإضافة", "error");
    }
    dispatch(clearInitialState());
  }, [isLoading]);
  const OnSelectImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const check = form.imagesArr.find(image => image.name === e.target.files[0].name);
      if (check) {
        UseNontification("لقد قمت باختيار هذه الصورة بالفعل", "warn");
        return;
      }
      if (form.imagesArr.length >= 5) {
        UseNontification("لا يمكنك إضافة أكثر من 5 صور", "warn");
        return;
      }

      setForm({ ...form, imagesArr: [...form.imagesArr, { name: e.target.files[0].name, url: URL.createObjectURL(e.target.files[0]), img: e.target.files[0] }] });
    }
  };

  const onClickImage = (e) => {
    setForm({ ...form, imagesArr: form.imagesArr.filter(image => image.name !== e.target.dataset.name) });
  };

  const onSelectCategory = (e) => {
    setForm({ ...form, categoryID: e.target.value, subCategoryID: [] });
    if (e.target.value !== "0") dispatch(getSubCategory_By_CategoryID(e.target.value));
  };

  const onSelectSubCategory = (selectedList) => {
    setForm({ ...form, subCategoryID: selectedList });
  };

  const onRemoveSubCategory = (selectedList) => {
    setForm({ ...form, subCategoryID: selectedList });
  };

  const onSelectBrand = (e) => {
    setForm({ ...form, BrandID: e.target.value });
  };

  const onSelectColor = (color) => {
    const check = form.colorsArr.find(value => value === color.hex);
    if (check) {
      UseNontification("هذا اللون في قائمة اختياراتك", "warn");
      return;
    }
    setForm({ ...form, colorsArr: [...form.colorsArr, color.hex] });
    setShowColorsPicker(false);
  };

  const onClickColor = (e) => {
    setForm({ ...form, colorsArr: form.colorsArr.filter(color => color !== e.target.dataset.color) });

    setShowColorsPicker(false);
  };

  const OnSubmit = async () => {
    if (!checkEmptyData(form)) {
      const formData = new FormData();
      formData.append("title", form.name);
      formData.append("description", form.desc);
      formData.append("quantity", form.quantity);
      formData.append("price", form.price);
      formData.append("priceAfterDiscount", form.priceAfterDiscount);
      formData.append("imageCover", form.imagesArr[0].img);
      formData.append("category", form.categoryID);
      formData.append("brand", form.BrandID);
      form.colorsArr.map(color => formData.append("availableColors", color));
      form.subCategoryID.map(item => formData.append("subcategory", item._id));
      form.imagesArr.map(item => formData.append("images", item.img));
      await dispatch(createProduct(formData));
    }
  };

  const checkEmptyData = (form) => {
    if (form.name === "") { UseNontification("ادخل اسم المنتج", "warn"); return true; }
    else if (form.desc === "") { UseNontification("ادخل وصف المنتج", "warn"); return true; }
    else if (+form.price <= 0 || form.price === "السعر قبل الخصم") { UseNontification("ادخل سعر المنتج", "warn"); return true; }
    else if (+form.priceAfterDiscount >= +form.price) { UseNontification("سعر المنتج بعد الخصم يجب أن يكون أقل من السعر الأساسي للمنتج", "warn"); return true; }
    else if (+form.quantity <= 0 || form.quantity === "الكمية المحددة") { UseNontification("ادخل كمبة المنتج", "warn"); return true; }
    else if (form.categoryID === "0") { UseNontification("اختر تصنيف المنتج", "warn"); return true; }
    else if (form.subCategoryID.length <= 0) { UseNontification("اختر التصنيفات الفرعية للمنتج", "warn"); return true; }
    else if (form.BrandID === "0") { UseNontification("اختر ماركة المنتج", "warn"); return true; }
    else if (form.colorsArr.length <= 0) { UseNontification("اختر ألوان المنتج", "warn"); return true; }
    else if (form.imagesArr.length <= 0) { UseNontification("ادخل صور المنتج", "warn"); return true; }
    else return false;
  };

  const clearData = () => {
    setForm({
      imagesArr: [],
      name: "",
      desc: "",
      price: "السعر قبل الخصم",
      priceAfterDiscount: "السعر بعد الخصم",
      quantity: "الكمية المحددة",
      categoryID: "0",
      BrandID: "0",
      subCategoryID: [],
      colorsArr: []
    });
  };
  return [category, brand, subCategory, form, setForm, showColorsPicker, setShowColorsPicker, OnSelectImage, onClickImage, onSelectCategory, onSelectSubCategory, onRemoveSubCategory, onSelectBrand, onSelectColor, onClickColor, OnSubmit];
};

export default UseAddProduct;
