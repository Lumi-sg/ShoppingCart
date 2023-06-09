import React from "react";
import "../styles/Search.css";

const Search = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="Searchbar">
            <div className="topLeftButtons">
                <button>Home</button>
                <button>Shop</button>
            </div>
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search"></input>
                </form>
            </div>
            <div className="cartButtonDiv">
                <button className="CartButton">Cart</button>
            </div>
        </div>
    );
};

export default Search;
