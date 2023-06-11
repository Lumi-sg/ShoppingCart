import "../styles/Search.css";
import { Product } from "./ProductFactory";

type SearchProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
    cartData: Product[];
};

const Search = ({
    search,
    setSearch,
    setSelectedProduct,
    cartData,
}: SearchProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="Searchbar">
            <div className="topLeftButtons">
                <button onClick={() => setSelectedProduct("All")}>Shop</button>
                <button onClick={() => setSelectedProduct("About")}>
                    About
                </button>
            </div>
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                </form>
            </div>
            <div className="cartButtonDiv">
                <button className="CartButton">Cart ({cartData.length})</button>
            </div>
        </div>
    );
};

export default Search;
