import SearchBar from "./SearchBar";
import './search.css'
import Movie from "./Movie";

const Search = ({ movies, fetchSearch }) => {
    return <div id="search-page">
        <SearchBar fetchSearch={fetchSearch} />
        <div id="search-movies">
            {movies ?
                movies.map(({ Title, Year, imdbID, Type, Poster }) => <Movie key={imdbID} title={Title} year={Year} imdbID={imdbID} type={Type} poster={Poster} />) :
                <h1>[movies list placeholder]</h1>
            }
        </div>
    </div>
}

export default Search