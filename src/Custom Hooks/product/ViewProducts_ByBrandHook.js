import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCatOrBrand } from "../../Reducer/Api Requests/ProductApiRequests";
import { useParams } from "react-router";

const ViewProducts_ByBrandHook = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.productReducer.productsCatOrBrand);
  const [selectedBrand, setSelectedBrand] = useState();
  const { id } = useParams();
  let sort = ""; let word = "";

  useEffect(() => { setSelectedBrand(`brand[in][]=${id}`); }, []);
  useEffect(() => { getProducts(); }, [selectedBrand]);

  const getProducts = (page = 1) => {
    sort = sortData();
    dispatch(getAllProductsCatOrBrand(`limit=8&page=${page}&sort=${sort}&keyword=${word}&${selectedBrand}`));
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
  return [items, getPage, getProducts, results];
};

export default ViewProducts_ByBrandHook;
