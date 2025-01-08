import { useEffect } from "react";
import mobile from "../../assets/images/mobile.png";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Reducer/Slices/ProductSlice";
import { getOneCategory } from "../../Reducer/Slices/CategorySlice";
import { getOneBrand } from "../../Reducer/Slices/BrandSlice";
const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.productReducer.productDetails);
  const category = useSelector(state => state.categoryReducer.category);
  const brand = useSelector(state => state.brandReducer.oneBrand);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id]);
  // Get Images
  let images = [{ original: mobile, }];
  item.data ? images = item.data.images.map(img => { return { original: img, }; }) : images = [{ original: mobile, }];
  //Get Category & Brand
  useEffect(() => {
    item.data && dispatch(getOneCategory(item.data.category));
    item.data && dispatch(getOneBrand(item.data.brand));
  }, [item]);

  // Get Details
  let dataText = {
    id: "",
    title: "",
    description: "",
    price: 0,
    availableColors: [],
    brand: "",
    category: "",
    // quantity: 0,
    ratingsQuantity: 0,
    // sold: 0,
    subcategory: [],
  };
  if (item.data) {
    dataText = {
      _id: item.data._id,
      title: item.data.title,
      description: item.data.description,
      price: item.data.price,
      availableColors: item.data.availableColors,
      brand: brand.data ? brand.data.name : "",
      category: category.data ? category.data.name : "",
      // quantity: 10,
      ratingsQuantity: item.data.ratingsQuantity,
      // sold: 0,
      subcategory: item.data.subcategory,
    };
  }
  let details = { dataText, images };
  return [details];
};
export default ViewProductDetailsHook;