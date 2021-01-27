import {applyMiddleware, combineReducers, createStore} from "redux";
import {moviesReducer} from "./moviesReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    movies: moviesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStoreType = ReturnType<typeof rootReducer>