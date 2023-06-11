import "../styles/Search.css";
import { Product } from "./ProductFactory";

type SearchProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
    cartData: Product[];
    isCartActive: boolean;
    setIsCartActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({
    search,
    setSearch,
    setSelectedProduct,
    cartData,
    setIsCartActive,
}: SearchProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    const totalQuantity = cartData.reduce(
        (acc, curr) => acc + curr.quantity,
        0
    );

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
                <button
                    className="CartButton"
                    onClick={() => setIsCartActive((prevState) => !prevState)}
                >
                    Cart ({totalQuantity})
                </button>
            </div>
        </div>
    );
};

export default Search;
