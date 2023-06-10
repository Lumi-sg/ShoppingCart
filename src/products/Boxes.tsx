import { createProduct } from "../components/ProductFactory";
import OFOF1Image from "../assets/boxes/3nxz5ztr.png";
import ranaDigitalImage from "../assets/boxes/200199077-9dda4490-ee79-46d5-b45f-55e830ee64f4.png";
import chocwaImage from "../assets/boxes/20220724_160904.jpg";
import frame1Image from "../assets/boxes/final_models_heavy_2021.webp";
import frame1lightImage from "../assets/boxes/f1light.png";
import b0xxImage from "../assets/boxes/maxresdefault.jpg";
import HTANGLImage from "../assets/boxes/IMG_20220324_213747.jpg";
import prismImage from "../assets/boxes/prism.png";

const OFOF1 = createProduct(
    "OFOF1",
    175,
    "Open Frame Open Frame 1 by Rana Labs",
    1,
    OFOF1Image
);

const ranaDigital = createProduct(
    "Rana Digital",
    200,
    "Rana Digital by Rana Labs",
    1,
    ranaDigitalImage
);

const chocwa = createProduct(
    "Chocwa Bar",
    225,
    "Chocwa Bar by RyanEmZed Customs",
    1,
    chocwaImage
);

const frame1 = createProduct(
    "Frame 1 Heavy",
    250,
    "Frame 1 Heavy by Frame 1 Controllers",
    1,
    frame1Image
);

const frame1light = createProduct(
    "Frame 1 Light",
    150,
    "Frame 1 Light by Frame 1 Controllers",
    1,
    frame1lightImage
);

const b0xx = createProduct(
    "B0XX",
    275,
    "B0XX by 20XX Controllers",
    1,
    b0xxImage
);

const HTNGL = createProduct("HTANGL", 175, "HTANGL by Hadoe", 1, HTANGLImage);

const prism = createProduct("Prism", 300, "Prism by WunVzn", 1, prismImage);

export const boxes = [
    OFOF1,
    ranaDigital,
    chocwa,
    frame1,
    frame1light,
    b0xx,
    HTNGL,
    prism,
];
