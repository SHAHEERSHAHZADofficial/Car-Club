const initialState = {
    token: null
}

export default function AuthReducer(state = initialState, actions) {
    switch (actions.type) {
        case "LOGIN":
            return {
                token: actions.payload
            }


        case "LOGOUT":
            return {
                ...state,
                token: null
            }

        default:
            return state;
    }

}