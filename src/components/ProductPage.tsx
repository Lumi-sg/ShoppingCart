import { Product } from "./ProductFactory";

type ProductPageProps = {
    products: Product[];
};

const ProductPage = ({ products }: ProductPageProps) => {
    return (
        <div className="Products">
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <p>${product.price} CAD</p>
                    <p>{product.description}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
