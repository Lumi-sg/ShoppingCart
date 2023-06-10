import { useEffect } from "react";

import PhobPage from "../components/ProductPages/phobPage";
import GCCCommissions from "./ProductPages/GCCDIYKitPage";
import BoxesPage from "./ProductPages/BoxesPage";
import SwitchPage from "./ProductPages/SwitchPage";
import KeycapsPages from "./ProductPages/KeycapsPages";

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
        case "Switches":
            return <SwitchPage />;
        case "Keycaps":
            return <KeycapsPages />;
        default:
            return null;
    }
};

export default Products;
