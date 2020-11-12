import { FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIULRE, POST_SMURF_SUCCESS } from '../actions/smurfAction';

const initialState = {
    smurfData: [],
    error: ''
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfData: action.payload
            }
        case FETCH_SMURF_FAIULRE:
            return {
                ...state,
                error: action.payload
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfData: action.payload
            }
        default:
            return state;
    }
}