import SearchBar from "./SearchBar";
import './search.css'
import Movie from "./Movie";

const Search = ({ moviesList }) => {
    return <div id="search-page">
        <SearchBar />
        {moviesList ?
            moviesList.map(({title, year, imdbID, type, poster}) => <Movie title={title} year={year} imdbID={imdbID} type={type} poster={poster}/>) :
            <h1>searched title</h1>
        }

    </div>
}

export default Search