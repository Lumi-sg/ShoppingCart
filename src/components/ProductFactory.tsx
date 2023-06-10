import { v4 as uuidv4 } from "uuid";

type Product = {
    name: string;
    price: number;
    id: string;
    description: string;
    quantity: number;
    image: string;
};

export const createProduct = (
    name: string,
    price: number,
    description: string,
    quantity = 1,
    image: string
): Product => {
    const id = uuidv4();
    return { name, price, id, description, quantity, image };
};
