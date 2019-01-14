import { FETCH_QUOTES, FETCH_QUOTES_SUCCESS,  FETCH_QUOTES_FAILURE } from '../actions/constants';

export const quoteListReducer = ( curState = 
    {   quotes: {}, isLoading: false, error: null }, action ) => {
    let newState;
    switch( action.type ) {
        case FETCH_QUOTES:
            newState = { ...curState, error: null, isLoading: FETCH_QUOTES };
            break;
        case FETCH_QUOTES_SUCCESS:
            newState = { ...curState, isLoading: FETCH_QUOTES_SUCCESS, quotes: action.payload.quotes };
            break;
        case FETCH_QUOTES_FAILURE:
            newState = { ...curState, isLoading: FETCH_QUOTES_FAILURE,  error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    return newState;
}