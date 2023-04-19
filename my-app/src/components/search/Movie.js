import React from "react";

const Movie = ({ title, year, imdbID, type, poster }) => {
    return (
        <div className="search-movie">
            <div className="movie-img-cont">
                <img src={poster} />
            </div>
            <p>{title}</p>
            <p>{year}</p>

        </div>
    )
}

export default Movie