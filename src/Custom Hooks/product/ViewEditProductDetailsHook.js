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
  const resProductDetails = useSelector((state) => state.productReducer.productDetails);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const [allSubCategory, setAllSubCategory] = useState([{ name: 'Option 1️⃣', id: 1 }]);
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const run = async () => {
      await dispatch(getProductDetails(id));
    };
    run();

  }, [id]);
  useEffect(() => {
    dispatch(getAllSubCategory_OfAllCategories());
  }, []);


  // Get subCategories of selected category for multiSelect box of subCategory
  useEffect(() => {
    if (resProductDetails.data)
      dispatch(getSubCategory_By_CategoryID(resProductDetails.data.category));
  }, [resProductDetails]);

  useEffect(() => {
    const run = async () => {
      if (resProductDetails?.data && allSubCategory_OfAllCategories?.data) {
        setProductDetails(resProductDetails.data);
        /*////////// Convert ImageURL To File //////////*/
        const convertURLToFile = async (url, filename) => {
          const response = await fetch(url);
          const blob = await response.blob();
          return new File([blob], filename, { type: blob.type });
        };
        let imagesAfterConvertToFile = [];
        resProductDetails.data.images.map((image, index) => {
          convertURLToFile(image, `image-${index}.png`).then(file => {
            imagesAfterConvertToFile.push({ name: `image-${index + 1}.png`, url: file && URL.createObjectURL(file), img: file });
          });
        });

        /*////////// subCategory Filterition for product //////////*/
        const subCategory_Filterition = resProductDetails.data.subcategory.flatMap((sub) =>
          allSubCategory_OfAllCategories.data.filter((val) => val._id === sub)
        );
        setProductDetails({ ...resProductDetails.data, images: imagesAfterConvertToFile, subcategory: subCategory_Filterition, });
      }
    };
    run();
  }, [resProductDetails]);
  useEffect(() => {
    const getData = async () => {
      await dispatch(GetAllCategory());
      await dispatch(getAllBrand());
      setAllSubCategory(allSubCategories);
    };
    getData();
  }, [isLoading, resProductDetails, allSubCategories]);
  return [allCategory, allBrand, allSubCategory, productDetails, setProductDetails];
};
export default ViewEditProductDetailsHook;
