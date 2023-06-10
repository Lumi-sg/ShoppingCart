import { useEffect, useState } from "react";
import { allProducts } from "../products/AllProducts";
import { phobs } from "../products/Controllers";
import { diyKitArray } from "../products/Controllers";
import { boxes } from "../products/Boxes";
import { switches } from "../products/Switches";
import { keycaps } from "../products/Keycaps";
import { Product } from "./ProductFactory";
import ProductPage from "./ProductPages/ProductPage";

type ProductProps = {
    selectedProduct: string;
    setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Products = ({ selectedProduct, search, setSearch }: ProductProps) => {
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
        return <ProductPage products={matchedProducts} />;
    } else {
        switch (selectedProduct) {
            case "Phobs":
                return <ProductPage products={phobs} />;
            case "GCC DIY Kit":
                return <ProductPage products={diyKitArray} />;
            case "Box Builds":
                return <ProductPage products={boxes} />;
            case "Switches":
                return <ProductPage products={switches} />;
            case "Keycaps":
                return <ProductPage products={keycaps} />;
            case "All":
                return <ProductPage products={matchedProducts} />;
            default:
                return <ProductPage products={matchedProducts} />;
        }
    }
};
export default Products;
