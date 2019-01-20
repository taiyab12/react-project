import { FETCH_USER_DETAILS, FETCH_USER_DETAILS_SUCCESS,  FETCH_USER_DETAILS_FAILURE } from '../actions/constants';

export const userDetailsReducer = ( curState = 
    {   user: {}, isLoading: false, error: null }, action ) => {
    let newState;
    switch( action.type ) {
        case FETCH_USER_DETAILS:
            newState = { ...curState, error: null, isLoading: FETCH_USER_DETAILS };
            break;
        case FETCH_USER_DETAILS_SUCCESS:
            newState = { ...curState, isLoading: FETCH_USER_DETAILS_SUCCESS, user: action.payload.user };
            break;
        case FETCH_USER_DETAILS_FAILURE:
            newState = { ...curState, isLoading: FETCH_USER_DETAILS_FAILURE,  error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    return newState;
}