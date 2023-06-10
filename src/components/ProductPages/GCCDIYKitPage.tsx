import { diyKit } from "../../products/Controllers";

const GCCDIYKitPage = () => {
    return (
        <div className="Products">
            <div key={diyKit.id}>
                <img src={diyKit.image} alt={diyKit.name} />
                <p>{diyKit.name}</p>
                <p>${diyKit.price} CAD</p>
                <p>{diyKit.description}</p>
            </div>
        </div>
    );
};

export default GCCDIYKitPage;
