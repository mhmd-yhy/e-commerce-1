import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../Reducer/Slices/CategorySlice";
import { getAllBrand } from "../../Reducer/Slices/BrandSlice";
import UseNontification from "../../Custom Hooks/UseNontification";
import { getSubCategory_By_CategoryID } from "../../Reducer/Slices/SubCategorySlice";
import { createProduct } from "../../Reducer/Slices/ProductSlice";

const UseAddProduct = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer.category);
  const brand = useSelector((state) => state.brandReducer.brands);
  const subCategory = useSelector((state) => state.subCategoryReducer.subCategory);
  const res = useSelector((state) => state.productReducer.product);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  useEffect(() => {
    dispatch(GetAllCategory());
    dispatch(getAllBrand());

    if (!isLoading) {
      clearData();
      if (res) res.status && UseNontification("تمت عملية الإضافة", "success");
      else UseNontification("هناك مشكلة في عملية الإضافة", "error");
    }
  }, [isLoading]);
  const [form, setForm] = useState({
    imagesArr: [],
    name: "",
    desc: "",
    priceBefore: "السعر قبل الخصم",
    priceAfter: "السعر بعد الخصم",
    quantity: "الكمية المحددة",
    categoryID: "0",
    BrandID: "0",
    subCategoryID: [],
    colorsArr: []
  });
  const [showColorsPicker, setShowColorsPicker] = useState(false);

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
    setForm({ ...form, categoryID: e.target.value });
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
      formData.append("price", form.priceBefore);
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
    else if (+form.priceBefore <= 0 || form.priceBefore === "السعر قبل الخصم") { UseNontification("ادخل سعر المنتج", "warn"); return true; }
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
      priceBefore: "السعر قبل الخصم",
      priceAfter: "السعر بعد الخصم",
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
