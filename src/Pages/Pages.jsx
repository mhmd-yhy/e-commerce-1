import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import NavBar from "../Components/Utility/NavBar";
import AllCategory from "../Components/Category/AllCategory";
import AllBrands from "../Components/Brands/AllBrands";
import Footer from "../Components/Utility/Footer";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ShopProductsPage from "./Products/ShopProductsPage";
import ProductDetiles from "./Products/ProductDetilsPage";
import ShoppingCartPage from "./Shopping Cart/ShoppingCartPage";
import CheckoutPage from "./Checkout/CheckoutPage";
import ProductsManagmentPage from "./AdminPages/ProductsManagmentPage";
import OrdersManagmentPage from "./AdminPages/OrdersManagmentPage";
import OrderDetailesPage from "./AdminPages/OrderDetailesPage";
import AddBrandPage from "./AdminPages/AddBrandPage";
import AddCategoryPage from "./AdminPages/AddCategoryPage";
import AddSubCategoryPage from "./AdminPages/AddSubCategoryPage";
import AddProductPage from "./AdminPages/AddProductPage";
import Oreders from "./User/Oreders";
import FavoriteProducts from "./User/FavoriteProducts";
import Adress from "./User/Adress";
import AddAdress from "./User/AddAdress";
import EditAdress from "./User/EditAdress";
import Profil from "./User/Profil";
import EditProfil from "./User/EditProfil";
export default function Pages() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-category" element={<AllCategory />} />
        <Route path="/products" element={<ShopProductsPage />} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/products/:id" element={<ProductDetiles />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/order/paymethoud" element={<CheckoutPage />} />
        {/* Admin Pages */}
        <Route
          path="/admin/products-managment"
          element={<ProductsManagmentPage />}
        />
        <Route
          path="/admin/orders-managment"
          element={<OrdersManagmentPage />}
        />
        <Route path="/admin/orders/23" element={<OrderDetailesPage />} />
        <Route path="/admin/add-brand" element={<AddBrandPage />} />
        <Route path="/admin/add-category" element={<AddCategoryPage />} />
        <Route path="/admin/add-subcategory" element={<AddSubCategoryPage />} />
        <Route path="/admin/add-product" element={<AddProductPage />} />
        {/* User Pages */}
        <Route path="/user/allorders" element={<Oreders />} />
        <Route path="/user/favoriteproducts" element={<FavoriteProducts />} />
        <Route path="/user/addresses" element={<Adress />} />
        <Route path="/user/add-address" element={<AddAdress />} />
        <Route path="/user/edit-address" element={<EditAdress />} />
        <Route path="/user/profile" element={<Profil />} />
        <Route path="/user/edit-profile" element={<EditProfil />} />
      </Routes>
      <Footer />
    </div>
  );
}
// /user/allorders
// /user/favoriteproducts
// /user/addresses
// /user/profile

// /user/add-address
// /user/edit-address
