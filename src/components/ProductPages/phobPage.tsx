import { phobs } from "../../products/Controllers";

const PhobPage = () => {
    return (
        <div className="Products">
            {phobs.map((phob) => (
                <div key={phob.id}>
                    <img src={phob.image} alt={phob.name} />
                    <p>{phob.name}</p>
                    <p>${phob.price} CAD</p>
                    <p>{phob.description}</p>
                </div>
            ))}
        </div>
    );
};

export default PhobPage;
