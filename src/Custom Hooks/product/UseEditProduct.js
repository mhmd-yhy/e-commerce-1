import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseNontification from "../../Components/Utility/UseNontification";
import { clearInitialState } from "../../Reducer/Slices/ProductSlice";
import { useNavigate, useParams } from "react-router";
import { getSubCategory_By_CategoryID } from "../../Reducer/Api Requests/SubCategoryApiRequests";
import { editProduct, getProductDetails } from "../../Reducer/Api Requests/ProductApiRequests";

const UseEditProduct = (productDetails, setProductDetails) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const allSubCategories = useSelector((state) => state.subCategoryReducer.subCategory);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const res = useSelector((state) => state.productReducer.product);
  const [allSubCategory, setAllSubCategory] = useState([{ name: 'Option 1️⃣', id: 1 }]);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  /////get category, subCategory & brand of product
  const [showColorsPicker, setShowColorsPicker] = useState(false);

  const OnSelectImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const check = productDetails.images.find(image => image === e.target.files[0].name);
      if (check) {
        UseNontification("لقد قمت باختيار هذه الصورة بالفعل", "warn");
        return;
      }
      if (productDetails.imagesArr.length >= 5) {
        UseNontification("لا يمكنك إضافة أكثر من 5 صور", "warn");
        return;
      }
      // setProductDetails({ ...productDetails, imagesArr: [...productDetails.imagesArr, { name: e.target.files[0].name, url: URL.createObjectURL(e.target.files[0]), img: e.target.files[0] }] });
    }
  };

  const onClickImage = (e) => {
    setProductDetails({ ...productDetails, images: productDetails.images.filter(image => image !== e.target.dataset.image) });
  };

  /*////// Start onSelectCategory //////*/
  const onSelectCategory = async (e) => {
    console.log("object");
    if (productDetails.category !== "0") {
      setProductDetails({ ...productDetails, category: e.target.value });
      dispatch(getSubCategory_By_CategoryID(e.target.value));
    }
  };
  useEffect(() => {
    if (allSubCategories) {
      console.log(allSubCategories);
      setAllSubCategory(allSubCategories);
    }
  }, [allSubCategories]);
  /*////// End onSelectCategory //////*/

  const onSelectSubCategory = (selectedList) => {
    // setProductDetails({ ...productDetails, subCategoryID: selectedList });
  };

  const onRemoveSubCategory = (selectedList) => {
    // setProductDetails({ ...productDetails, subCategoryID: selectedList });
  };

  const onSelectBrand = (e) => {
    setProductDetails({ ...productDetails, brand: e.target.value });
  };

  const onSelectColor = (color) => {
    const check = productDetails.availableColors.find(value => value === color.hex);
    if (check) {
      UseNontification("هذا اللون في قائمة اختياراتك", "warn");
      return;
    }
    setProductDetails({ ...productDetails, availableColors: [...productDetails.availableColors, color.hex] });
    setShowColorsPicker(false);
  };

  const onClickColor = (e) => {
    setProductDetails({ ...productDetails, availableColors: productDetails.availableColors.filter(color => color !== e.target.dataset.color) });

    setShowColorsPicker(false);
  };
  const OnSubmit = async () => {
    if (!checkEmptyData(productDetails)) {
      const formData = new FormData();
      formData.append("title", productDetails.name);
      formData.append("description", productDetails.desc);
      formData.append("quantity", productDetails.quantity);
      formData.append("price", productDetails.priceBefore);
      formData.append("imageCover", productDetails.images[0].img);
      formData.append("category", productDetails.category);
      formData.append("brand", productDetails.brand);
      productDetails.availableColors.map(color => formData.append("availableColors", color));
      productDetails.subcategory.map(item => formData.append("subcategory", item._id));
      productDetails.images.map(item => formData.append("images", item.img));

      await dispatch(editProduct(id, formData));
    }
  };
  useEffect(() => {
    if (!isLoading) {
      if (res.message === "Invalid Token. please login again") {
        UseNontification("لا تمتلك الصلاحية , الرجاء تسجيل الدخول", "error");
        setTimeout(() => { navigate("/login"); }, 3000);
      }
      if (res) res.status && UseNontification("تمت عملية التعديل", "success");
      else UseNontification("هناك مشكلة في عملية التعديل", "error");
    }
    dispatch(clearInitialState());
  }, [isLoading]);
  const checkEmptyData = (productDetails) => {
    if (productDetails.name === "") { UseNontification("ادخل اسم المنتج", "warn"); return true; }
    else if (productDetails.desc === "") { UseNontification("ادخل وصف المنتج", "warn"); return true; }
    else if (+productDetails.priceBefore <= 0 || productDetails.priceBefore === "السعر قبل الخصم") { UseNontification("ادخل سعر المنتج", "warn"); return true; }
    else if (+productDetails.quantity <= 0 || productDetails.quantity === "الكمية المحددة") { UseNontification("ادخل كمبة المنتج", "warn"); return true; }
    else if (productDetails.category === "0") { UseNontification("اختر تصنيف المنتج", "warn"); return true; }
    else if (productDetails.subcategory.length <= 0) { UseNontification("اختر التصنيفات الفرعية للمنتج", "warn"); return true; }
    else if (productDetails.brand === "0") { UseNontification("اختر ماركة المنتج", "warn"); return true; }
    else if (productDetails.availableColors.length <= 0) { UseNontification("اختر ألوان المنتج", "warn"); return true; }
    else if (productDetails.images.length <= 0) { UseNontification("ادخل صور المنتج", "warn"); return true; }
    else return false;
  };

  return [showColorsPicker, setShowColorsPicker, OnSelectImage, onClickImage, onSelectCategory, onSelectSubCategory, onRemoveSubCategory, onSelectBrand, onSelectColor, onClickColor, OnSubmit];
};

export default UseEditProduct;
