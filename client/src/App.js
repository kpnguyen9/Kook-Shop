import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import ProductsList from "./components/ProductsList";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import Secret from "./components/users/Secret";
import ResponsiveAppBar from "./components/navBar";
import { CartContext } from "./helper/Context";
import Cart from "./components/cart/Cart";

function App() {
	const [cartItems, setCartItems] = useState("");

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			<CartProvider>
				<ResponsiveAppBar />
				<Routes>
					<Route path="/" element={<ProductsList />} />
					<Route path="/register" element={<Register />} />
					<Route path="/shopping-cart" element={<Cart />} />
					<Route path="/login" element={<Login />} />
					<Route path="/secret" element={<Secret />} />
				</Routes>
			</CartProvider>
		</CartContext.Provider>
	);
}

export default App;
