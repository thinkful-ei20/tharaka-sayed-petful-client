import { FETCH_DOG_SUCCESS, FETCH_DOG_ERROR, FETCH_DOG_REQUEST } from '../actions/';

const initialState = {
    dogs: [],
    error: null,
    loading: false
};

const dogReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DOG_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_DOG_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: false,
                dogs: action.dog
            }
        
        case FETCH_DOG_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}

export default dogReducer