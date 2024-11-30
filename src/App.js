import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import CheckOut from "./components/CheckOut";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
