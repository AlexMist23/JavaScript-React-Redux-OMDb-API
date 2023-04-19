import React from "react";
import {connect} from "react-redux"
import Search from "../components/search";
import { selectSearchMovies } from "./selectors";


const mapState = state => ({
    movies: selectSearchMovies(state)
})
const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Search)