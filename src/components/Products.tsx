import { useEffect } from "react";

import PhobPage from "../components/ProductPages/phobPage";
import GCCCommissions from "./ProductPages/GCCDIYKitPage";
import BoxesPage from "./ProductPages/BoxesPage";

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
        case "GCC DIY Kit":
            return <GCCCommissions />;
        case "Box Builds":
            return <BoxesPage />;
        default:
            return null;
    }
};

export default Products;
