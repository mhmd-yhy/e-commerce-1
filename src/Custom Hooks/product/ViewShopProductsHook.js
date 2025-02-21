import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../Reducer/Api Requests/ProductApiRequests";

const ViewShopProductsHook = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.productReducer.product);
  let sort = "";
  let word; let queryBrand_Filter; let queryCategory_Filter; let priceFrom = ""; let priceTo = "";
  let priceFromString; let priceToString;

  const getProducts = (page = 1) => {
    sort = sortData();
    getStorage(); ////check data from LocalStorage
    getPriceString(); ////to get queryString of price
    dispatch(getAllProductsSearch(`limit=8&page=${page}&sort=${sort}&keyword=${word}&${queryBrand_Filter}&${queryCategory_Filter}${priceFromString}${priceToString}`));
  };
  useEffect(() => {
    getProducts();
  }, []);
  const getStorage = () => {
    localStorage.getItem("searchWord") !== null ? word = localStorage.getItem("searchWord") : word = '';
    localStorage.getItem("queryBrand_Filter") !== null ? queryBrand_Filter = localStorage.getItem("queryBrand_Filter") : queryBrand_Filter = '';
    localStorage.getItem("queryCategory_Filter") !== null ? queryCategory_Filter = localStorage.getItem("queryCategory_Filter") : queryCategory_Filter = '';
    localStorage.getItem("priceFrom") !== null ? priceFrom = localStorage.getItem("priceFrom") : priceFrom = 0;
    localStorage.getItem("priceTo") !== null && (priceTo = localStorage.getItem("priceTo"));
  };

  const getPriceString = () => {
    if (priceFrom === "" || priceFrom <= 0) priceFromString = "";
    else priceFromString = `&price[gte]=${priceFrom}`;
    if (priceTo === "" || priceTo <= 0) priceToString = "";
    else priceToString = `&price[lte]=${priceTo}`;
  };

  const sortData = () => {
    if (localStorage.getItem("sort") !== null)
      switch (localStorage.getItem("sort")) {
        case "الأكثر مبيعاً":
          return "-sold";
        case "الأعلى تقييماً":
          return "-ratingsQuantity";
        case "السعر من الأقل للأعلى":
          return "+price";
        case "السعر من الأعلى للأقل":
          return "-price";
        default: return "";
      }
  };


  let items = [];
  let pageCount = 1;
  let results = 1;
  if (allProducts) {
    items = allProducts;
    pageCount = allProducts.paginationResult?.numberOfPages;
    results = allProducts.results;
  }
  const getPage = (page) => {
    getProducts(page);
  };

  return [items, getPage, getProducts, results, sortData];
};
export default ViewShopProductsHook;