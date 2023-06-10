import { createProduct } from "../components/ProductFactory";

import ranaCapsImage from "../assets/Keycaps/aww3brqb.png";
import frame1CapsImage from "../assets/Keycaps/4q0njelc.png";
import hyperXImage from "../assets/Keycaps/u3gilyx2.png";

const ranaCaps = createProduct(
    "Rana Caps",
    30,
    "(Controller not included)",
    30,
    ranaCapsImage
);

const frame1Caps = createProduct(
    "Frame 1 PBT Buttons",
    30,
    "Frame 1 PBT Buttons by Frame 1",
    22,
    frame1CapsImage
);

const hyperX = createProduct(
    "HyperX PBT Keycaps",
    40,
    "Full Set of PBT Keycaps by HyperX",
    100,
    hyperXImage
);
export const keycaps = [ranaCaps, frame1Caps, hyperX];
