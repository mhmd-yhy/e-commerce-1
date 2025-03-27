import { useEffect } from "react";
import mobile from "../../assets/images/mobile.png";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategory } from "../../Reducer/Api Requests/CategoryApiRequests";
import { getOneBrand } from "../../Reducer/Api Requests/BrandApiRequests";
import { getProductDetails } from "../../Reducer/Api Requests/ProductApiRequests";
import { getAllRatings_OfProduct } from "../../Reducer/Api Requests/RatingApiRequests";
const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.productReducer.productDetails);
  const category = useSelector(state => state.categoryReducer.oneCategory);
  const brand = useSelector(state => state.brandReducer.oneBrand);
  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(getAllRatings_OfProduct({ id }));
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
    priceAfterDiscount: 0,
    availableColors: [],
    brand: "",
    category: "",
    ratingsQuantity: 0,
    ratingsAverage: 0,
    subcategory: [],
  };
  if (item.data) {
    dataText = {
      _id: item.data._id,
      title: item.data.title,
      description: item.data.description,
      price: item.data.price,
      priceAfterDiscount: item.data.priceAfterDiscount,
      availableColors: item.data.availableColors,
      brand: brand.data ? brand.data.name : "",
      category: category.data ? category.data.name : "",
      ratingsQuantity: item.data.ratingsQuantity,
      ratingsAverage: item.data.ratingsAverage,
      subcategory: item.data.subcategory,
    };
  }
  let details = { dataText, images };
  return [details];
};
export default ViewProductDetailsHook;