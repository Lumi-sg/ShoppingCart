import { boxes } from "../../products/Boxes";

const BoxesPage = () => {
    return (
        <div className="Products">
            {boxes.map((box) => (
                <div key={box.id}>
                    <img src={box.image} alt={box.name} />
                    <p>{box.name}</p>
                    <p>${box.price} CAD</p>
                    <p>{box.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BoxesPage;
