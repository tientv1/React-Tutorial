import { useEffect, useState } from "react";
import axios from "axios";

function Search() {
    // Keyword
    const [keyword, setKeyWord] = useState("");
    // Result
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!keyword) {
            setResults([]);
            return;
        }
        // https://www.omdbapi.com/?apikey=a0c9b149&s=${keyword}
        const featchMovie = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `https://www.omdbapi.com/?apikey=a0c9b149&s=${keyword}`
                );

                if (
                    res.data.Response === "True" &&
                    Array.isArray(res.data.Search)
                ) {
                    setResults(res.data.Search);
                } else {
                    // Không có phim
                    setResults([]);
                }
            } catch (error) {
                console.error("Lỗi: ", error);
                setResults([]);
            }
            setLoading(false);
        };

        featchMovie();
    }, [keyword]);

    const listItems = results.map((movie) => (
        <li key={movie.imdbID}>
            <img src={movie.Poster} width={50} />
            {movie.Title} ({movie.Year})
        </li>
    ));
    return (
        <div>
            <input
                value={keyword}
                // Get DATA for Keyword
                onChange={(e) => setKeyWord(e.target.value)}
                placeholder="Search..."
            />
            {loading ? (
                <div>Đang tìm kiếm...</div>
            ) : keyword ? (
                results.length > 0 ? (
                    <ul>{listItems}</ul>
                ) : (
                    <div>Không có phim</div>
                )
            ) : null}
        </div>
    );
}

export default Search;
