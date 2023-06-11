import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes } from "react-router";

import "./styles/Products.css";
import "./styles/App.css";
import "./styles/Reset.css";

import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import { Product } from "./components/ProductFactory";

const App = () => {
    const [selectedProduct, setSelectedProduct] = useState("");
    const [search, setSearch] = useState("");
    const [cartData, setCartData] = useState<Product[]>(() => {
        const savedCartData = localStorage.getItem("cartData");
        return savedCartData ? JSON.parse(savedCartData) : [];
    });
    const [isCartActive, setIsCartActive] = useState(false);

    useEffect(() => {
        const savedCartData = localStorage.getItem("cartData");

        if (savedCartData) {
            setCartData(JSON.parse(savedCartData));
            console.log("cartData loaded from local storage");
        }
    }, []);

    useEffect(() => {
        console.log("cartData saved to local storage");
        localStorage.setItem("cartData", JSON.stringify(cartData));
    }, [cartData]);

    return (
        <BrowserRouter>
            <div className="App">
                <Search
                    search={search}
                    setSearch={setSearch}
                    setSelectedProduct={setSelectedProduct}
                    cartData={cartData}
                />
                <Sidebar
                    setSelectedProduct={setSelectedProduct}
                    setSearch={setSearch}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Products
                                selectedProduct={selectedProduct}
                                setSelectedProduct={setSelectedProduct}
                                search={search}
                                setSearch={setSearch}
                                setCartData={setCartData}
                            />
                        }
                    />
                </Routes>
                <Cart cartData={cartData} setCartData={setCartData} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
