import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API_KEY from './API_KEY'

const initialState = {
    isFetching: false,
    movies: null,
    fetchErr: null
}

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async (searchValue) => {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
        return response.json()
    }
)

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSearch.pending, () => ({
            ...initialState,
            isFetching: false,
        }))
        builder.addCase(fetchSearch.fulfilled, (state, {payload}) => ({
            ...state,
            isFetching: false,
            movies: payload.Search

        }))
        builder.addCase(fetchSearch.rejected, (state, {payload}) => ({
            ...state,
            isFetching: false,
            fetchErr: payload
        }))
    }


})

export const { } = searchSlice.actions
export default searchSlice.reducer