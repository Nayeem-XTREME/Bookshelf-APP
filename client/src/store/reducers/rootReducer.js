const initialState = {
    user: {
        name: "",
        age: "",
        email: "",
        phone: "",
        token: ""
    }
}

const rootReducer = (state = initialState, action) => {
    return state;
}

export default rootReducer;