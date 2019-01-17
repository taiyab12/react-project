import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import  { quoteListReducer } from    './reducers/quote-List-Reducer';
import { searchQuotesReducer } from './reducers/search-Quotes-Reducer';


// create store
export const store = createStore(
    combineReducers({
        quoteList   :   quoteListReducer,
        searchQuotes:   searchQuotesReducer
    }),
    {
        quoteList   :   {   quotes: {}, isLoading: false, error: null },
        searchQuotes :{query:null, searchquotes: {}, isLoading: false, error: null}
    },
    composeWithDevTools( applyMiddleware( logger, thunk ) )
);