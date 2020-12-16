import axios from "../../axios-base";

export const login = user => {

    return async dispatch => {
        try {
            const res = await axios.post('/users/login', user);
            const data = res.data;
            
            localStorage.setItem("token", data.token);
            dispatch(loginUser(data.user));
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

export const signup = user => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/signup', user);
            const data = res.data;

            localStorage.setItem("token", data.token);
            dispatch(signupUser(data.user))
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const logout = () => {
    return async dispatch => {
        try {
            localStorage.removeItem("token");
            dispatch(logoutUser());
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

const loginUser = data => ({
    type: 'LOGIN_USER',
    payload: data
})

const signupUser = data => ({
    type: 'SIGNUP_USER',
    payload: data
})

const logoutUser = () => ({
    type: 'LOGOUT_USER'
})