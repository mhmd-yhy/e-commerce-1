import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/ProductSlice";
import { useParams } from "react-router";
import { getSubCategory_By_CategoryID } from "../../Reducer/Api Requests/SubCategoryApiRequests";
import { editProduct, getProductDetails } from "../../Reducer/Api Requests/ProductApiRequests";

const UseEditProduct = (form, setForm) => {
  console.log(form);
  const { id } = useParams();
  const dispatch = useDispatch();
  const allSubCategories = useSelector((state) => state.subCategoryReducer.subCategory);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const res = useSelector((state) => state.productReducer.product);
  const [allSubCategory, setAllSubCategory] = useState([{ name: 'Option 1️⃣', id: 1 }]);
  // const [form, setForm] = useState({
  //   images: [],
  //   name: "",
  //   desc: "",
  //   priceBefore: 0,
  //   priceAfter: 0,
  //   quantity: 0,
  //   category: "0",
  //   brand: "0",
  //   subcategory: [],
  //   availableColors: []
  // });
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  /////get category, subCategory & brand of product
  const [showColorsPicker, setShowColorsPicker] = useState(false);

  const OnSelectImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const check = form.images.find(image => image === e.target.files[0].name);
      if (check) {
        UseNontification("لقد قمت باختيار هذه الصورة بالفعل", "warn");
        return;
      }
      if (form.imagesArr.length >= 5) {
        UseNontification("لا يمكنك إضافة أكثر من 5 صور", "warn");
        return;
      }
      // setForm({ ...form, imagesArr: [...form.imagesArr, { name: e.target.files[0].name, url: URL.createObjectURL(e.target.files[0]), img: e.target.files[0] }] });
    }
  };

  const onClickImage = (e) => {
    setForm({ ...form, images: form.images.filter(image => image !== e.target.dataset.image) });
  };

  /*////// Start onSelectCategory //////*/
  const onSelectCategory = async (e) => {
    if (form.category !== "0") {
      setForm({ ...form, category: e.target.value });
      dispatch(getSubCategory_By_CategoryID(e.target.value));
    }
  };
  useEffect(() => {
    if (allSubCategories) {
      setAllSubCategory(allSubCategories);
    }
  }, [allSubCategories]);
  /*////// End onSelectCategory //////*/

  const onSelectSubCategory = (selectedList) => {
    // setForm({ ...form, subCategoryID: selectedList });
  };

  const onRemoveSubCategory = (selectedList) => {
    // setForm({ ...form, subCategoryID: selectedList });
  };

  const onSelectBrand = (e) => {
    setForm({ ...form, brand: e.target.value });
  };

  const onSelectColor = (color) => {
    const check = form.availableColors.find(value => value === color.hex);
    if (check) {
      UseNontification("هذا اللون في قائمة اختياراتك", "warn");
      return;
    }
    setForm({ ...form, availableColors: [...form.availableColors, color.hex] });
    setShowColorsPicker(false);
  };

  const onClickColor = (e) => {
    setForm({ ...form, availableColors: form.availableColors.filter(color => color !== e.target.dataset.color) });

    setShowColorsPicker(false);
  };
  const OnSubmit = async () => {
    if (!checkEmptyData(form)) {
      const formData = new FormData();
      formData.append("title", form.name);
      formData.append("description", form.desc);
      formData.append("quantity", form.quantity);
      formData.append("price", form.priceBefore);
      formData.append("imageCover", form.images[0].img);
      formData.append("category", form.category);
      formData.append("brand", form.brand);
      form.availableColors.map(color => formData.append("availableColors", color));
      form.subcategory.map(item => formData.append("subcategory", item._id));
      form.images.map(item => formData.append("images", item.img));

      await dispatch(editProduct(id, formData));
    }
  };
  useEffect(() => {
    if (!isLoading) {
      if (res) res.status && UseNontification("تمت عملية التعديل", "success");
      else UseNontification("هناك مشكلة في عملية التعديل", "error");
    }
    dispatch(clearInitialState());
  }, [isLoading]);
  const checkEmptyData = (form) => {
    if (form.name === "") { UseNontification("ادخل اسم المنتج", "warn"); return true; }
    else if (form.desc === "") { UseNontification("ادخل وصف المنتج", "warn"); return true; }
    else if (+form.priceBefore <= 0 || form.priceBefore === "السعر قبل الخصم") { UseNontification("ادخل سعر المنتج", "warn"); return true; }
    else if (+form.quantity <= 0 || form.quantity === "الكمية المحددة") { UseNontification("ادخل كمبة المنتج", "warn"); return true; }
    else if (form.category === "0") { UseNontification("اختر تصنيف المنتج", "warn"); return true; }
    else if (form.subcategory.length <= 0) { UseNontification("اختر التصنيفات الفرعية للمنتج", "warn"); return true; }
    else if (form.brand === "0") { UseNontification("اختر ماركة المنتج", "warn"); return true; }
    else if (form.availableColors.length <= 0) { UseNontification("اختر ألوان المنتج", "warn"); return true; }
    else if (form.images.length <= 0) { UseNontification("ادخل صور المنتج", "warn"); return true; }
    else return false;
  };

  return [showColorsPicker, setShowColorsPicker, OnSelectImage, onClickImage, onSelectCategory, onSelectSubCategory, onRemoveSubCategory, onSelectBrand, onSelectColor, onClickColor, OnSubmit];
};

export default UseEditProduct;
