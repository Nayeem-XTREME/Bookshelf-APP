const initialState = {
    user: {
        name: null,
        age: null,
        phone: null,
        email: null
    }
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

        case 'LOGOUT_USER':
            return {
                ...state,
                user: {
                    name: null,
                    age: null,
                    phone: null,
                    email: null
                }
            }
        default:
            return state;
    }
    
}

export default rootReducer;