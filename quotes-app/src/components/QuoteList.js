import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FETCH_QUOTES, FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAILURE } from '../actions/constants';
import { getQuotesThunk } from '../actions/creators';

class QuoteList extends Component {
    render() {
        console.log( 'this.props = ', this.props );
        let el;

        switch( this.props.isLoading ) {
            case FETCH_QUOTES:
                el = (
                    <div className="alert alert-default">
                        quotes are being loaded...
                    </div>
                );
                break;
            case FETCH_QUOTES_SUCCESS:
                el = (
                    <div>
                        
                                    
                        
                    </div>
                );
                break;
            case FETCH_QUOTES_FAILURE:
                el = (
                    <div className="alert alert-danger">
                        Something went wrong. quotes could not be fetched.
                        <hr />
                        {this.props.QuoteList.error.message}
                    </div>
                );
                break;
            default: 
                el = (
                    <div className="alert alert-info">
                        Page is loading...
                    </div>
                );
        }

        return <div className="container">
            <h1>In QuoteList components</h1>
            <hr />
            {el}
        </div>;
    }

    componentDidMount() {
        this.props.dispatch( getQuotesThunk() );
    }
}

export default QuoteList;