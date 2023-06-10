import { useEffect } from "react";

import PhobPage from "../components/ProductPages/phobPage";

type ProductProps = {
    selectedProduct: string;
};

const Products = ({ selectedProduct }: ProductProps) => {
    useEffect(() => {
        console.log(selectedProduct);
    }, [selectedProduct]);

    switch (selectedProduct) {
        case "Phobs":
            return <PhobPage />;
        default:
            return null;
    }
};

export default Products;
