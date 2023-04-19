import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

import reducer from './reducer/index'

const enhancers = process.env.NODE_ENV !== 'production' ?
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && "") :
    null

const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunk] :
    [thunk];

const store = configureStore({
    reducer,
    middleware,
    enhancers,
})


export default store