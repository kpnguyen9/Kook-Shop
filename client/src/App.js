import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { CartProvider } from "react-use-cart";
import ProductsList from "./components/ProductsList";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import ResponsiveAppBar from "./components/navBar";
import { CartContext } from "./helper/Context";
import Cart from "./components/cart/Cart";
import SurfboardProducts from "./components/surfboardProducts";
import FinProducts from "./components/finProducts";
import BoogieProducts from "./components/boogieProducts";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer/footer";
import "./App.css";
import Success from "./components/Success";
import OrderHistory from "./components/orderHistory";
import { UserContext } from "./helper/UserContext";

function App() {
  const [user, setUser] = useState("");
  const [cartItems, setCartItems] = useState("");

  console.log("app user", user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <CartProvider>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/surfboards" element={<SurfboardProducts />} />
            <Route path="/fins" element={<FinProducts />} />
            <Route path="/boogie" element={<BoogieProducts />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shopping-cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/success" element={<Success />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
          <Footer />
        </CartProvider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
