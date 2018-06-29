import { FETCH_DOG_SUCCESS, FETCH_DOG_ERROR } from '../actions/dogs';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_DOG_SUCCESS) {
        return Object.assign({}, state, {
            dog: action.dog
        });
    } else if(action.type === FETCH_DOG_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } 
    return state;
}