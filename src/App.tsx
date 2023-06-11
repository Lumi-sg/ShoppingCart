import { Route, HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes } from "react-router";
import classNames from "classnames";

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
    const cartContainerClasses = classNames("CartContainer", {
        Active: isCartActive,
    });

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

    useEffect(() => {
        console.log(isCartActive);
    }, [isCartActive]);

    return (
        <HashRouter>
            <div className="App">
                <Search
                    search={search}
                    setSearch={setSearch}
                    setSelectedProduct={setSelectedProduct}
                    cartData={cartData}
                    isCartActive={isCartActive}
                    setIsCartActive={setIsCartActive}
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

                <div className={cartContainerClasses}>
                    <Cart cartData={cartData} setCartData={setCartData} isCartActive={isCartActive} setIsCartActive={setIsCartActive}/>
                </div>

                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
