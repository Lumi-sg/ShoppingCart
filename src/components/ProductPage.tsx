import { Product } from "./ProductFactory";

type ProductPageProps = {
    products: Product[];
    setCartData: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductPage = ({ products, setCartData }: ProductPageProps) => {
    return (
        <div className="Products">
            {products.map((product) => (
                <div className="Card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <p className="Name">{product.name}</p>
                    <p className="Price">${product.price}</p>
                    <p>{product.description}</p>
                    <button
                        onClick={() =>
                            setCartData((prevCartData) => [
                                ...prevCartData,
                                product,
                            ])
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
