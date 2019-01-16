import { FETCH_SEARCH_QUOTES, FETCH_SEARCH_QUOTES_SUCCESS,  FETCH_SEARCH_QUOTES_FAILURE } from '../actions/constants';

export const searchQuotesReducer = ( curState = 
    {  query:null, searchquotes: {}, isLoading: false, error: null }, action ) => {
    let newState;
    switch( action.type ) {
        case FETCH_SEARCH_QUOTES:
            newState = { ...curState, error: null, isLoading: FETCH_SEARCH_QUOTES , query: action.payload.query};
            break;
        case FETCH_SEARCH_QUOTES_SUCCESS:
            newState = { ...curState, isLoading: FETCH_SEARCH_QUOTES_SUCCESS, searchquotes: action.payload.searchquotes };
            break;
        case FETCH_SEARCH_QUOTES_FAILURE:
            newState = { ...curState, isLoading: FETCH_SEARCH_QUOTES_FAILURE,  error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    return newState;
}