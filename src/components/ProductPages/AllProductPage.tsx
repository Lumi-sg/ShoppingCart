import { Product } from "../ProductFactory";
type AllProductProps = {
    matchedProducts: Product[];
};
const AllProductPage = ({ matchedProducts }: AllProductProps) => {
    return (
        <div className="Products">
            {matchedProducts.map((product) => (
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

export default AllProductPage;
