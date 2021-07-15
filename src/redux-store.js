import { createStore } from 'redux';

const INITIAL_STATE = {
    name: 'Anton',
    age: 33,
}

const reducer = (state = INITIAL_STATE,  action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            return {
                ...state,
                name: action.name,
            };
        }
        default: return state;
    }
    
}

const store = createStore(reducer);

const changeName = {
    type: 'CHANGE_NAME',
    payload: 
}

store.dispatch(changeName);

console.log("store: ", store.getState());