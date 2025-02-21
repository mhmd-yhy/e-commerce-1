import React, { useEffect, useState } from 'react';
import ViewShopProductsHook from '../product/ViewShopProductsHook';

const NavBarSearchHook = () => {
  const [searchWord, setSearchWord] = useState('');
  const [items, getPage, getProducts] = ViewShopProductsHook();
  const onChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    window.location.pathname !== "/products" && (window.location.href = "/products");
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [searchWord]);

  return [searchWord, onChangeSearch];
};

export default NavBarSearchHook;
