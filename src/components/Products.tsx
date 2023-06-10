import { useEffect, useState } from "react";
import PhobPage from "../components/ProductPages/phobPage";
import GCCCommissions from "./ProductPages/GCCDIYKitPage";
import BoxesPage from "./ProductPages/BoxesPage";
import SwitchPage from "./ProductPages/SwitchPage";
import KeycapsPages from "./ProductPages/KeycapsPages";
import { allProducts } from "../products/AllProducts";
import { Product } from "./ProductFactory";
import AllProductPage from "./ProductPages/AllProductPage";

type ProductProps = {
    selectedProduct: string;
    setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Products = ({
    selectedProduct,
    setSelectedProduct,
    search,
    setSearch,
}: ProductProps) => {
    const [matchedProducts, setMatchedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const filteredProducts = allProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        setMatchedProducts(filteredProducts);
    }, [search]);

    useEffect(() => {
        if (selectedProduct !== "") {
            setSearch("");
        }
    }, [selectedProduct]);

    if (search !== "") {
        return <AllProductPage matchedProducts={matchedProducts} />;
    } else {
        switch (selectedProduct) {
            case "Phobs":
                return <PhobPage />;
            case "GCC DIY Kit":
                return <GCCCommissions />;
            case "Box Builds":
                return <BoxesPage />;
            case "Switches":
                return <SwitchPage />;
            case "Keycaps":
                return <KeycapsPages />;
            default:
                return <AllProductPage matchedProducts={matchedProducts} />;
        }
    }
};
export default Products;
