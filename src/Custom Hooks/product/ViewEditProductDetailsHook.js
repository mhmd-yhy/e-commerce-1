import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetAllCategory } from "../../Reducer/Api Requests/CategoryApiRequests";
import { getAllBrand } from "../../Reducer/Api Requests/BrandApiRequests";
import { getSubCategory_By_CategoryID, getAllSubCategory_OfAllCategories } from "../../Reducer/Api Requests/SubCategoryApiRequests";
import { getProductDetails } from "../../Reducer/Api Requests/ProductApiRequests";

const ViewEditProductDetailsHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.categoryReducer.categories);
  const allBrand = useSelector((state) => state.brandReducer.brands);
  const allSubCategories = useSelector((state) => state.subCategoryReducer.subCategory);
  const allSubCategory_OfAllCategories = useSelector((state) => state.subCategoryReducer.allSubCategory_OfAllCategories);
  const productDetails = useSelector((state) => state.productReducer.productDetails);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const [allSubCategory, setAllSubCategory] = useState([{ name: 'Option 1️⃣', id: 1 }]);
  const [form, setForm] = useState({
    images: [],
    name: "",
    desc: "",
    priceBefore: 0,
    priceAfter: 0,
    quantity: 0,
    category: "0",
    brand: "0",
    subcategory: [],
    availableColors: []
  });
  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(getAllSubCategory_OfAllCategories());
  }, [id]);
  useEffect(() => {
    const run = async () => {
      if (productDetails.data && allSubCategory_OfAllCategories.data) {
        await dispatch(getSubCategory_By_CategoryID(productDetails.data.category));

        /*////////// Convert ImageURL To File //////////*/
        const convertURLToFile = async (url, filename) => {
          const response = await fetch(url);
          const blob = await response.blob();
          return new File([blob], filename, { type: blob.type });
        };
        let imagesAfterConvertToFile = [];
        productDetails.data.images.map((image, index) => {
          convertURLToFile(image, `image-${index}.png`).then(file => {
            imagesAfterConvertToFile.push({ name: `image-${index + 1}.png`, url: file && URL.createObjectURL(file), img: file });
          });
        });

        /*////////// subCategory Filterition for product //////////*/
        const subCategory_Filterition = productDetails.data.subcategory.flatMap((sub) =>
          allSubCategory_OfAllCategories.data.filter((val) => val._id === sub)
        );

        setForm({
          // images1: productDetails.data.images,
          images: imagesAfterConvertToFile,
          name: productDetails.data.title,
          desc: productDetails.data.description,
          priceBefore: productDetails.data.price,
          priceAfter: productDetails.data.price,
          quantity: productDetails.data.quantity,
          category: productDetails.data.category,
          brand: productDetails.data.brand,
          subcategory: subCategory_Filterition,
          availableColors: productDetails.data.availableColors,
        });
      }
    };
    run();
  }, [productDetails]);

  /*////////// Get AllCategory , AllBrand & AllSubCategory of selected Category //////////*/
  useEffect(() => {
    const getData = async () => {
      await dispatch(GetAllCategory());
      await dispatch(getAllBrand());
      setAllSubCategory(allSubCategories);
    };
    getData();
  }, [isLoading, productDetails, allSubCategories]);
  return [allCategory, allBrand, allSubCategory, form, setForm];
};
export default ViewEditProductDetailsHook;
