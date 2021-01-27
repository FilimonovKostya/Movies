import { movieAPI, ResponseType} from '../Api/api'
import {Dispatch} from "redux";
import { setErrorStatusAC, statusLoadingAC} from "./appReducer";

const initialState: ResponseType = {} as ResponseType

type ActionsType = ReturnType<typeof setMoviesAC> | ReturnType<typeof statusLoadingAC> | ReturnType<typeof setErrorStatusAC>

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
    dispatch(statusLoadingAC(true))
    movieAPI().getByTitle(title)
        .then((res) => {
            console.log(res.data)
            dispatch(setMoviesAC(res.data))
            dispatch(statusLoadingAC(false))

        })
        .catch(error => {
            if(error.data.Error){
                alert('Yedad')
                dispatch(setErrorStatusAC(true))
            }
        })

}