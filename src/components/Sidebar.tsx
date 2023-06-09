import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="Controllers">
                <span>Gamecube Controller</span>
                <button>Completed Phobs</button>
                <button>Completed OEMs</button>
                <button>DIY Kits</button>
                <button>Individual Parts</button>
                <button>Commissions</button>
            </div>
            <div className="Rectangles">
                <span>Box Controllers</span>
                <button>Completed Builds</button>
                <button>DIY Kits</button>
                <button>Switches</button>
                <button>Keycaps</button>
                <button>Chassis</button>
                <button>Cables</button>
                <button>Commissions</button>
            </div>
        </div>
    );
};

export default Sidebar;
