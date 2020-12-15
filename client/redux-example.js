const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    quantity: 5,
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {

    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1 
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value 
        }
    }

    return state;
}

// Store
const store = createStore(rootReducer);

// Subscription (Triggers when state updated)
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

console.log(store.getState())

// Despatching action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 20});

console.log(store.getState())