import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const saveToLocalStorage = (state) => {
    try {
        console.log(state);
        localStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
        console.log(error);
    }
}

const loadFromLocalStorage = () => {
    try {
        const currentState = localStorage.getItem('state');
        if (currentState === null)
            return undefined;
        return JSON.parse(currentState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;