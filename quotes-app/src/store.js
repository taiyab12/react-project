import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import  { quoteListReducer } from    './reducers/quote-List-Reducer';


// create store
export const store = createStore(
    combineReducers({
        quoteList   :   quoteListReducer
    }),
    {
        quoteList   :   {   quotes: {}, isLoading: false, error: null }
    },
    composeWithDevTools( applyMiddleware( logger, thunk ) )
);