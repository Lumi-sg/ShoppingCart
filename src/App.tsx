import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import { Routes } from "react-router";

import "./styles/Products.css";
import "./styles/App.css";
import "./styles/Reset.css";

import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

const App = () => {
    const [selectedProduct, setSelectedProduct] = useState("");

    return (
        <BrowserRouter>
            <div className="App">
                <Search />
                <Sidebar setSelectedProduct={setSelectedProduct} />
                <Routes>
                    <Route
                        path="/"
                        element={<Products selectedProduct={selectedProduct} />}
                    />
                </Routes>
                <Cart />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
