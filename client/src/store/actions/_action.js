import axios from "../../axios-base";

export const login = user => {

    return async dispatch => {
        try {
            const res = await axios.post('/users/login', user);
            const data = res.data;
            
            localStorage.setItem("token", data.token);
            dispatch(loginUser(data.user));
        } catch (err) {
            return console.log(err);
        }
    }
}

const loginUser = data => ({
    type: 'LOGIN_USER',
    payload: data
})