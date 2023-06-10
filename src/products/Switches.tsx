import { createProduct } from "../components/ProductFactory";
import gatWhiteImage from "../assets/switches/q7ewddh0.png";
import gatSilverImage from "../assets/switches/50lt1yaf.png";
import gatYellowImage from "../assets/switches/znglbhgw.png";

const gateronWhite = createProduct(
    "Gateron Pro V2 White Switches",
    5,
    "Pretravel 2.0+/-0,6mm | Actuation force 38g",
    10,
    gatWhiteImage
);

const gateronSilver = createProduct(
    "Gateron Pro V2 Silver Switches",
    5,
    "Pretravel 1.2+/-0.3mm | Actuation force 43g",
    10,
    gatSilverImage
);

const gateronYellow = createProduct(
    "Gateron Pro V2 Yellow Switches",
    5,
    "Pretravel 2.0+/-0,6mm | Actuation force 50g",
    10,
    gatYellowImage
);

export const switches = [gateronWhite, gateronSilver, gateronYellow];
