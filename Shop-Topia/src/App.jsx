import React, { useEffect } from "react";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Layout from "./Layout/Layout";
import { fetchData } from "./Data/Data";

const App = () => {
  useEffect(() => {
    fetchData();
    AOS.init({
      once: false,
      duration: 1000,
      easing: "ease-out-back",
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route
          path="/products"
          element={<Layout children={<AllProducts />} />}
        />
        <Route path="/cart" element={<Layout children={<Cart />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
