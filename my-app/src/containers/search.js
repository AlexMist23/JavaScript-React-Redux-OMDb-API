import React from "react";
import {connect} from "react-redux"
import Search from "../components/search";
import { selectSearchMovies } from "./selectors";
import { fetchSearch } from "../redux/reducer/search";


const mapState = state => ({
    movies: selectSearchMovies(state)
})
const mapDispatch = dispatch => ({
    fetchSearch: (title) => dispatch(fetchSearch(title))
})

export default connect(mapState, mapDispatch)(Search)