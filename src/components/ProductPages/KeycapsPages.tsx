import { keycaps } from "../../products/Keycaps";

const KeycapsPages = () => {
    return (
        <div className="Products">
            {keycaps.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <p>${product.price} CAD</p>
                    <p>{product.quantity}x Keycaps</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default KeycapsPages;
