import React from "react";

const Movie = ({title, year, imdbID, type, poster}) =>{
    return (
        <div className="search-movie">
            <p>{title}</p>
            <p>{year}</p>
            <p>{imdbID}</p>
            <p>{type}</p>
            <p>{poster}</p>
        </div>
    )
}

export default Movie