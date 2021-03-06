import RT from "../types";


const initialState = {
    isLoading: false,
    userInfo: null,
    error: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RT.CHECK_AUTH:
            return { ...state, isLoading: true, error: null }
        case RT.CHECK_AUTH_SUCCESS:
            return { ...state, isLoading: false, userInfo: action.payload, error: null }
        case RT.CHECK_AUTH_FAIL:
            return { ...state, isLoading: false, error: action.payload }
        case RT.SIGN_OUT:
            return { ...initialState }
        default:
            break
    }
    return state
}