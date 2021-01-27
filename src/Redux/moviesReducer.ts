import {movieAPI, ResponseType} from '../Api/api'
import {Dispatch} from "redux";
import {statusLoading} from "./appReducer";

const initialState: ResponseType = {} as ResponseType

type ActionsType = ReturnType<typeof setMoviesAC> | ReturnType<typeof statusLoading>

export const moviesReducer = (state: ResponseType = initialState, actions: ActionsType): ResponseType => {
    switch (actions.type) {
        case "SET-MOVIES":
            debugger
            return {...state, ...actions.movies}
        default:
            return state
    }

}

const setMoviesAC = (movies: ResponseType) => ({type: 'SET-MOVIES', movies} as const)

export const thunkSetMovies = (title: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(statusLoading(true))
    movieAPI().getByTitle(title)
        .then(res => {
            dispatch(setMoviesAC(res.data))
            dispatch(statusLoading(false))
        })
}