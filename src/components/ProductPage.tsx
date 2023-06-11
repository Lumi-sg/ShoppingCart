import { Product } from "./ProductFactory";

type ProductPageProps = {
    products: Product[];
    setCartData: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductPage = ({ products, setCartData }: ProductPageProps) => {
    function handleAddToCart(product: Product): void {
        setCartData((prevCartData) => {
            const existingProductIndex = prevCartData.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
                const updatedCartData = [...prevCartData];
                updatedCartData[existingProductIndex] = {
                    ...updatedCartData[existingProductIndex],
                    quantity:
                        updatedCartData[existingProductIndex].quantity + 1,
                };
                return updatedCartData;
            } else {
                return [...prevCartData, { ...product, quantity: 1 }];
            }
        });
    }

    return (
        <div className="Products">
            {products.map((product) => (
                <div className="Card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <p className="Name">{product.name}</p>
                    <p className="Price">${product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={() => handleAddToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
