import { Product } from "./ProductFactory";
type CartProps = {
    cartData: Product[];
    setCartData: React.Dispatch<React.SetStateAction<Product[]>>;
};
const Cart = ({ cartData }: CartProps) => {
    return (
        <div className="Products">
            {cartData.map((product) => (
                <div className="Card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <p className="Name">{product.name}</p>
                    <p className="Price">${product.price}</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;
