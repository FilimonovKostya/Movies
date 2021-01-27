import {movieAPI, ResponseType} from '../Api/api'
import {Dispatch} from "redux";

const initialState: ResponseType = {} as ResponseType
type ActionsType = ReturnType<typeof setMoviesAC>
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
    movieAPI().getByTitle(title)
        .then(res => {
            debugger
            dispatch(setMoviesAC(res.data))
        })
}