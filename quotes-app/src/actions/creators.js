import * as Constants from './constants';
import * as QuotesService from '../services/quotes';

function getQuotes( ) {
    return {
        type: Constants.FETCH_QUOTES
    }
}

function getQuotesSuccess( quotes ) {
    return {
        type: Constants.FETCH_QUOTES_SUCCESS,
        payload: {
            quotes: quotes
        }
    }
}

function getQuotesFailure( error ) {
    return {
        type: Constants.FETCH_QUOTES_FAILURE,
        payload: {
            error: error
        }
    };
}

function getQuotesThunk() {
    return function( dispatch ) {
        dispatch( getQuotes() );

        QuotesService.getQuotes()
            .then( quotes => dispatch( getQuotesSuccess( quotes ) ) )
            .catch( error => dispatch( getQuotesFailure( error ) ) );
    }
}



function getSearchQuotes(query ) {
    return {
        type: Constants.FETCH_SEARCH_QUOTES,
        payload:{
            query:query
        }
    }
}

function getSearchQuotesSuccess( searchquotes ) {
    return {
        type: Constants.FETCH_SEARCH_QUOTES_SUCCESS,
        payload: {
            searchquotes: searchquotes
        }
    }
}

function getSearchQuotesFailure( error ) {
    return {
        type: Constants.FETCH_SEARCH_QUOTES_FAILURE,
        payload: {
            error: error
        }
    };
}

function getSearchQuotesThunk(query) {
    return function( dispatch ) {
        dispatch( getSearchQuotes(query) );

        QuotesService.getSearchQuotes(query)
            .then( searchquotes => dispatch( getSearchQuotesSuccess( searchquotes ) ) )
            .catch( error => dispatch( getSearchQuotesFailure( error ) ) );
    }
}

function getUserDetails( ) {
    return {
        type: Constants.FETCH_USER_DETAILS
    }
}

function getUserDetailsSuccess( user ) {
    return {
        type: Constants.FETCH_USER_DETAILS_SUCCESS,
        payload: {
            user: user
        }
    }
}

function getUserDetailsFailure( error ) {
    return {
        type: Constants.FETCH_USER_DETAILS_FAILURE,
        payload: {
            error: error
        }
    };
}

function getUserDetailsThunk() {
    return function( dispatch ) {
        dispatch( getUserDetails() );

        QuotesService.getUserDetails()
            .then( user => dispatch( getQuotesSuccess( user ) ) )
            .catch( error => dispatch( getQuotesFailure( error ) ) );
    }
}




export {
    getQuotes,
    getQuotesSuccess,
    getQuotesFailure,
    getQuotesThunk,

    getSearchQuotes,
    getSearchQuotesSuccess,
    getSearchQuotesFailure,
    getSearchQuotesThunk,
    getUserDetails,
    getUserDetailsSuccess,
    getUserDetailsFailure,
    getUserDetailsThunk
};