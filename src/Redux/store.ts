import {applyMiddleware, combineReducers, createStore} from "redux";
import {moviesReducer} from "./moviesReducer";
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    app:appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStoreType = ReturnType<typeof rootReducer>