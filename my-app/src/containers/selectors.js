import { createSelector } from "@reduxjs/toolkit"

const selectSearch = state => state.search

const selectSearchMovies = createSelector(
    selectSearch,
    (search) => search.movies
)

export {selectSearch, selectSearchMovies}