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
            <div className="Controllers">
                <span>Gamecube Controllers</span>
                <button onClick={() => handleProductClick("Phobs")}>
                    Completed Phobs
                </button>
                <button onClick={() => handleProductClick("OEMs")}>
                    Completed OEMs
                </button>
                <button onClick={() => handleProductClick("GCC DIY Kits")}>
                    DIY Kits
                </button>
                <button onClick={() => handleProductClick("GCC Parts")}>
                    Individual Parts
                </button>
                <button onClick={() => handleProductClick("GCC Commissions")}>
                    Commissions
                </button>
            </div>
            <div className="Rectangles">
                <span>Box Controllers</span>
                <button onClick={() => handleProductClick("Box Builds")}>
                    Completed Builds
                </button>
                <button onClick={() => handleProductClick("Box DIY Kits")}>
                    DIY Kits
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
                    Commissions
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
