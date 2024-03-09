import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import NavBar from "./UI/NavBar";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ProductPage from "./Pages/ProductPage";

export default function App({ user, allProduct, img }) {
  return (
    <div className="container">
      <div>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product" element={<ProductPage user={user} allProduct={allProduct} img={img} />} />
        </Routes>
      </div>
    </div>
  );
}
