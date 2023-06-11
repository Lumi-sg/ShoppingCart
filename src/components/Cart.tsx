import "../styles/Cart.css";
import { Product } from "./ProductFactory";

type CartProps = {
    cartData: Product[];
    setCartData: React.Dispatch<React.SetStateAction<Product[]>>;
};

const Cart = ({ cartData, setCartData }: CartProps) => {
    const totalPrice = cartData.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
    );

    const handleDecrement = (productId: string) => {
        setCartData((prevCartData) =>
            prevCartData.map((product) => {
                if (product.id === productId) {
                    const newQuantity = product.quantity - 1;
                    return {
                        ...product,
                        quantity: newQuantity >= 0 ? newQuantity : 0,
                    };
                }
                return product;
            })
        );
    };

    const handleIncrement = (productId: string) => {
        setCartData((prevCartData) =>
            prevCartData.map((product) =>
                product.id === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const handleDelete = (productId: string) => {
        setCartData((prevCartData) =>
            prevCartData.filter((product) => product.id !== productId)
        );
    };

    return (
        <div className="CartContainer">
            <div className="Cart">
                <h1>Shopping Cart</h1>
                {cartData.map((product) => {
                    const { id, name, quantity, price } = product;
                    const productTotal = price * quantity;

                    return (
                        <div className="CartItem" key={id}>
                            <div className="CartItemInfo">
                                <p className="CartProductName">{name}</p>
                                <p className="CartQuantity">
                                    <button
                                        onClick={() => handleDecrement(id)}
                                        disabled={quantity === 1}
                                    >
                                        -
                                    </button>
                                    {quantity}
                                    <button onClick={() => handleIncrement(id)}>
                                        +
                                    </button>
                                </p>
                            </div>
                            <p className="CartPrice">${productTotal}</p>
                            <button
                                className="CartDeleteButton"
                                onClick={() => handleDelete(id)}
                            >
                                X
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="Checkout">
                <p className="CheckOutTotalPrice">Total: ${totalPrice}</p>
                <button onClick={() => setCartData([])}>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
