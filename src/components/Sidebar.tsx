import "../styles/Sidebar.css";

type SidebarProps = {
    setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({ setSelectedProduct }: SidebarProps) => {
    const handleProductClick = (product: string) => {
        setSelectedProduct(product);
    };

    return (
        <div className="Sidebar">
            <div className="Rectangles">
                <span>Box Controllers</span>
                <button onClick={() => handleProductClick("Box Builds")}>
                    Completed Builds
                </button>
                <button onClick={() => handleProductClick("Switches")}>
                    Switches
                </button>
                <button onClick={() => handleProductClick("Keycaps")}>
                    Keycaps
                </button>
                <button onClick={() => handleProductClick("Chassis")}>
                    Chassis
                </button>
                <button onClick={() => handleProductClick("Cables")}>
                    Cables
                </button>
                <button onClick={() => handleProductClick("Box Commissions")}>
                    Commission
                </button>
            </div>
            <div className="Controllers">
                <span>Gamecube Controllers</span>
                <button onClick={() => handleProductClick("Phobs")}>
                    Phobs
                </button>
                <button onClick={() => handleProductClick("GCC DIY Kit")}>
                    DIY Kit
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
