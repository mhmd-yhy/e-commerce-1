import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCategory } from '../../Reducer/Api Requests/CategoryApiRequests';
import { getAllBrand } from '../../Reducer/Api Requests/BrandApiRequests';
import ViewShopProductsHook from '../product/ViewShopProductsHook';

const SideFilterHook = () => {
  const [items, getPage, getProducts, results, sortData] = ViewShopProductsHook();
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoryReducer.categories);
  const brands = useSelector(state => state.brandReducer.brands);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();
  ////get fata from LocalStorage
  let queryBrand_Filter = ''; let queryCategory_Filter = '';

  useEffect(() => {
    dispatch(GetAllCategory());
    dispatch(getAllBrand());
  }, []);

  const onSelectBrand = (e) => {
    if (e.target.value === "0") {
      setSelectedBrand([]);
      return;
    }
    if (e.target.checked) setSelectedBrand([...selectedBrand, e.target.value]);
    else setSelectedBrand(selectedBrand.filter(item => item !== e.target.value));
  };
  useEffect(() => {
    queryBrand_Filter = selectedBrand.map(val => `brand[in][]=${val}`).join("&");
    localStorage.setItem(`queryBrand_Filter`, queryBrand_Filter);
    getProducts();
  }, [selectedBrand]);

  const onSelectCategory = (e) => {
    if (e.target.value === "0") {
      setSelectedCategory([]);
      return;
    }
    if (e.target.checked) setSelectedCategory([...selectedCategory, e.target.value]);
    else setSelectedCategory(selectedCategory.filter(item => item !== e.target.value));
  };
  useEffect(() => {
    queryCategory_Filter = selectedCategory.map(val => `category[in][]=${val}`).join("&");
    localStorage.setItem(`queryCategory_Filter`, queryCategory_Filter);
    getProducts();
  }, [selectedCategory]);

  const handlePriceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };
  const handlePriceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [priceFrom, priceTo]);

  return [categories, brands, onSelectBrand, onSelectCategory, handlePriceFrom, handlePriceTo];
};

export default SideFilterHook;
