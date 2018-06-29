import { FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, FETCH_CAT_REQUEST } from '../actions/';

const initialState = {
    cats: [],
    error: null,
    loading: false
};

const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_CAT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cats: action.cat
            }

        case FETCH_CAT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        default:
            return state
    }
}

export default catReducer