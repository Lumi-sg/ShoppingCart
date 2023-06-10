import "../styles/Search.css";

type SearchProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ search, setSearch, setSelectedProduct }: SearchProps) => {
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
                <button className="CartButton">Cart</button>
            </div>
        </div>
    );
};

export default Search;
