import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isFetching: false,
    isFetched: false,
    FetchSucced: null,
    movies: null,
    fetchErr: null
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        fetchStart: () => ({
            ...initialState,
            isFetching: true
        }),
        fetchSucced: (state, {payload}) => ({
            ...state,
            isFetched: true,
            fetchSucced: true,
            movies: payload
        }),
        fetchFailed: (state, {payload}) => ({
            ...state,
            isFetched: true,
            fetchSucced: false,
            fetchErr: payload
        })

    }
})


export const searchFetch = () =>{
    console.log('FETCHING')
}
export const { change } = searchSlice.actions
export default searchSlice.reducer