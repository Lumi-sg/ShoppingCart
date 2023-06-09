import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/Reset.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Search />
                <Sidebar />
                <Routes>
                    <Route />
                    <Route path="/" element={<Products />} />
                </Routes>
                <Cart />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
