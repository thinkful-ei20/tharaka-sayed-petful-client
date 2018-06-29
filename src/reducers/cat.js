import { FETCH_CAT_SUCCESS, FETCH_CAT_ERROR } from '../actions/';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_CAT_SUCCESS) {
        return Object.assign({}, state, {
            cat: action.cat
        });
    } else if(action.type === FETCH_CAT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } 
    return state;
}