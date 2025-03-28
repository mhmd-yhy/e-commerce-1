import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import NavBar from "../Components/Utility/NavBar";
import AllCategory from "./Category/AllCategory";
import AllBrands from "./Brand/AllBrands";
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
import AdressPage from "./User/AdressPage";
import AddAdressPage from "./User/AddAdressPage";
import EditAdressPage from "./User/EditAdressPage";
import Profil from "./User/Profil";
import EditProfil from "./User/EditProfil";
import EditProductPage from "./AdminPages/EditProductPage";
import ForgotPassword from "./Auth/ForgotPassword";
import VerifyResetCode from "./Auth/VerifyResetCode";
import ResetPassword from "./Auth/ResetPassword";
import CouponPage from "./AdminPages/CouponPage";
import EditCouponPage from "./AdminPages/EditCouponPage";
import Protected_RouteHook from "../Custom Hooks/auth/Protected_RouteHook";
import ProtectedRoute from "../Components/Utility/ProtectedRoute";
import ShopProductsByCategoryPage from "./Products/ShopProductsByCategoryPage";
import ShopProductsByBrandPage from "./Products/ShopProductsByBrandPage";
export default function Pages() {
  const [isUser, isAdmin] = Protected_RouteHook();
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-category" element={<AllCategory />} />
        <Route path="/products" element={<ShopProductsPage />} />
        <Route path="/products/category/:id" element={<ShopProductsByCategoryPage />} />
        <Route path="/products/brand/:id" element={<ShopProductsByBrandPage />} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/products/:id" element={<ProductDetiles />} />

        {/* Admin Pages */}
        <Route element={<ProtectedRoute auth={isAdmin} />}>
          <Route path="/admin/products-managment" element={<ProductsManagmentPage />} />
          <Route path="/admin/orders-managment" element={<OrdersManagmentPage />} />
          <Route path="/admin/orders/:id" element={<OrderDetailesPage />} />
          <Route path="/admin/add-brand" element={<AddBrandPage />} />
          <Route path="/admin/add-category" element={<AddCategoryPage />} />
          <Route path="/admin/add-subcategory" element={<AddSubCategoryPage />} />
          <Route path="/admin/add-product" element={<AddProductPage />} />
          <Route path="/admin/update-product/:id" element={<EditProductPage />} />
          <Route path="/admin/coupons-managment" element={<CouponPage />} />
          <Route path="/admin/edit-coupon/:id" element={<EditCouponPage />} />
        </Route>
        {/* User Pages */}
        <Route element={<ProtectedRoute auth={isUser} />}>
          <Route path="/user/allorders" element={<Oreders />} />
          <Route path="/user/favoriteproducts" element={<FavoriteProducts />} />
          <Route path="/user/addresses" element={<AdressPage />} />
          <Route path="/user/add-address" element={<AddAdressPage />} />
          <Route path="/user/edit-address/:id" element={<EditAdressPage />} />
          <Route path="/user/profile" element={<Profil />} />
          <Route path="/user/edit-profile/:id" element={<EditProfil />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/order/paymethoud" element={<CheckoutPage />} />
        </Route>
        {/* Login Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/verifyResetCode" element={<VerifyResetCode />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}