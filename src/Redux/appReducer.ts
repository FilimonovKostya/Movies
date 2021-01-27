
type InitialStateType = {
    isLoading: boolean
}

const initialState: InitialStateType = {
    isLoading: false
}

type ActionsType = ReturnType<typeof  statusLoading>

export const appReducer = (state = initialState, actions: ActionsType):InitialStateType => {
    switch (actions.type) {
        case "STATUS-LOADING":
            return {...state, isLoading:actions.isLoad}
        default:
            return state
    }

}

const statusLoading = (isLoad: boolean) => ({type: 'STATUS-LOADING', isLoad} as const)

// export const thunkSetMovies = (title: string) => (dispatch: Dispatch<ActionsType>) => {
//     movieAPI().getByTitle(title)
//         .then(res => {
//             debugger
//             dispatch(setMoviesAC(res.data))
//         })
// }