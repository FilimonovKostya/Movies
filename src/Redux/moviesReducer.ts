import {movieAPI, ResponseType} from '../Api/api'
import {Dispatch} from "redux";
import {setErrorStatusAC, setStatusGetFilms, setStatusLoadingAC} from "./appReducer";

const initialState: ResponseType = {} as ResponseType

type ActionsType =
    ReturnType<typeof setMoviesAC>
    | ReturnType<typeof setStatusLoadingAC>
    | ReturnType<typeof setErrorStatusAC>
    | ReturnType<typeof setStatusGetFilms>

export const moviesReducer = (state: ResponseType = initialState, actions: ActionsType): ResponseType => {
    switch (actions.type) {
        case "SET-MOVIES":
            return {...state, ...actions.movies}
        default:
            return state
    }

}

const setMoviesAC = (movies: ResponseType) => ({type: 'SET-MOVIES', movies} as const)

export const thunkSetMovies = (title: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusLoadingAC(true))
    dispatch(setStatusGetFilms('loading'))
    movieAPI().getByTitle(title)
        .then((res) => {
            dispatch(setStatusGetFilms('success'))
            dispatch(setMoviesAC(res.data))
            dispatch(setStatusLoadingAC(false))
            if (res.data.Error) {
                dispatch(setStatusGetFilms('failed'))
                dispatch(setErrorStatusAC(res.data.Error))
            }

        })
        .catch(() => {
            dispatch(setStatusGetFilms('failed'))
            dispatch(setErrorStatusAC('Какая-то неведанная ошибка'))
        })

}