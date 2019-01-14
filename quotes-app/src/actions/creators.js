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


export {
    getQuotes,
    getQuotesSuccess,
    getQuotesFailure,
    getQuotesThunk
};