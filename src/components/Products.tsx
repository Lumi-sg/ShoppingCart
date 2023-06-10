import { useEffect, useState } from "react";
import { phobs } from "../products/Controllers";
import { diyKitArray } from "../products/Controllers";
import { boxes } from "../products/Boxes";
import { switches } from "../products/Switches";
import { keycaps } from "../products/Keycaps";
import { Product } from "./ProductFactory";
import ProductPage from "./ProductPage";
import AboutPage from "./AboutPage";

type ProductProps = {
    selectedProduct: string;
    setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setCartData: React.Dispatch<React.SetStateAction<Product[]>>;
};

const allProducts = boxes.concat(keycaps, switches, phobs, diyKitArray);

const Products = ({
    selectedProduct,
    setSelectedProduct,
    search,
    setSearch,
    setCartData,
}: ProductProps) => {
    const [matchedProducts, setMatchedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const filteredProducts = allProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        setMatchedProducts(filteredProducts);
        if (search === "") {
            setSelectedProduct("All");
        }
    }, [search]);

    useEffect(() => {
        if (selectedProduct !== "") {
            setSearch("");
        }
    }, [selectedProduct]);

    if (search !== "") {
        return (
            <ProductPage products={matchedProducts} setCartData={setCartData} />
        );
    } else {
        switch (selectedProduct) {
            case "Phobs":
                return (
                    <ProductPage products={phobs} setCartData={setCartData} />
                );
            case "GCC DIY Kit":
                return (
                    <ProductPage
                        products={diyKitArray}
                        setCartData={setCartData}
                    />
                );
            case "Box Builds":
                return (
                    <ProductPage products={boxes} setCartData={setCartData} />
                );
            case "Switches":
                return (
                    <ProductPage
                        products={switches}
                        setCartData={setCartData}
                    />
                );
            case "Keycaps":
                return (
                    <ProductPage products={keycaps} setCartData={setCartData} />
                );
            case "All":
                return (
                    <ProductPage
                        products={matchedProducts}
                        setCartData={setCartData}
                    />
                );
            case "About":
                return <AboutPage />;
            default:
                return <AboutPage />;
        }
    }
};
export default Products;
