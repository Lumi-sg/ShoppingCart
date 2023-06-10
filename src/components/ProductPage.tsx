import { Product } from "./ProductFactory";

type ProductPageProps = {
    products: Product[];
};

const ProductPage = ({ products }: ProductPageProps) => {
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
                            console.log(
                                `Added ${product.name} to Cart. ID: ${product.id}`
                            )
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
