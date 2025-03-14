import { useEffect, useState } from 'react';
import ViewShopProductsHook from '../product/ViewShopProductsHook';
import UseNontification from '../../Components/Utility/UseNontification';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { GetWishList } from '../../Reducer/Api Requests/WishListApiRequests';
import { getAllCartItems } from '../../Reducer/Api Requests/CartApiRequests';

const NavBarSearchHook = () => {
  const [searchWord, setSearchWord] = useState('');
  const [dropdownMood, setDropdownMood] = useState("hidden");
  const [items, getPage, getProducts] = ViewShopProductsHook();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    window.location.pathname !== "/products" && (window.location.href = "/products");
  };

  useEffect(() => { setTimeout(() => { getProducts(); }, 1000); }, [searchWord]);

  const handleDropdownClick = async (type = "") => {
    setDropdownMood(dropdownMood === "hidden" ? "block" : "hidden");
    if (type === "logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      UseNontification("تم تسجيل الخروج", "success");
      await dispatch(GetWishList());
      await dispatch(getAllCartItems());
      setTimeout(() => { navigate("/"); }, 2000);
    }
  };
  return [searchWord, onChangeSearch, dropdownMood, handleDropdownClick];
};

export default NavBarSearchHook;
