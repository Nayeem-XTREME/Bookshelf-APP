const initialState = {
    user: {}
}

const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload
            }

        case 'SIGNUP_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
    
}

export default rootReducer;