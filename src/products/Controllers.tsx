import { createProduct } from "../components/ProductFactory";
import phobOneImage from "../assets/phobs/ExwrQh5VoAElVix.png";
import phobTwoImage from "../assets/phobs/FP3YNrmVgAQgPto.png";
import phobThreeImage from "../assets/phobs/ExlWimdUcAEjmXY.png";
import phobFourImage from "../assets/phobs/Fv5KxDwakAAAmRA.jpg";
import phobFiveImage from "../assets/phobs/FGx-AdYVEAA9Zf5.webp";
import budgetPhobImage from "../assets/phobs/il_fullxfull.4679327499_ny7t.avif";
import diyKitImage from "../assets/phobs/20230330_124608.webp";

const phobOne = createProduct(
    "Phob One",
    350,
    "This is Phob One",
    1,
    phobOneImage
);
const phobTwo = createProduct(
    "Phob Two",
    325,
    "This is Phob Two",
    1,
    phobTwoImage
);
const phobThree = createProduct(
    "Phob Three",
    300,
    "This is Phob Three",
    1,
    phobThreeImage
);
const phobFour = createProduct(
    "Phob Four",
    275,
    "This is Phob Four",
    1,
    phobFourImage
);
const phobFive = createProduct(
    "Phob Five",
    325,
    "This is Phob Five",
    1,
    phobFiveImage
);
const budgetPhob = createProduct(
    "Budget Phob",
    500,
    "This is a budget no frills Phob",
    1,
    budgetPhobImage
);

export const diyKit = createProduct(
    "DIY Kit",
    225,
    "This is a DIY Kit for a 2.0 Phob",
    1,
    diyKitImage
);

export const phobs = [
    phobOne,
    phobTwo,
    phobThree,
    phobFour,
    phobFive,
    budgetPhob,
];
