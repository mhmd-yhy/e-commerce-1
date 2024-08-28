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
      </Routes>
      <Footer />
    </div>
  );
}
