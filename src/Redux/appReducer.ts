type InitialStateType = {
    isLoading: boolean
    isError: boolean
}

const initialState: InitialStateType = {
    isLoading: false,
    isError: false
}

type ActionsType = ReturnType<typeof statusLoading> | ReturnType<typeof setErrorStatus>

export const appReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case "STATUS-LOADING":
            return {...state, isLoading: actions.isLoad}
        case "STATUS-ERROR":
            return {...state, isError: actions.isError}
        default:
            return state
    }

}

export const statusLoading = (isLoad: boolean) => ({type: 'STATUS-LOADING', isLoad} as const)
export const setErrorStatus = (isError: boolean) => ({type: 'STATUS-ERROR', isError} as const)
