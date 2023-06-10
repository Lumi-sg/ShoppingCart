import { switches } from "../../products/Switches";

const SwitchPage = () => {
    return (
        <div className="Products">
            {switches.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <p>${product.price} CAD</p>
                    <p>{product.quantity}x Switches</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default SwitchPage;
