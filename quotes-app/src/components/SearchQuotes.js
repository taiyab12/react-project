import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn, logout } from '../services/auth';

import { FETCH_SEARCH_QUOTES,  FETCH_SEARCH_QUOTES_SUCCESS , FETCH_SEARCH_QUOTES_FAILURE } from '../actions/constants';
import { getSearchQuotesThunk } from '../actions/creators';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/searchcss.css';


class SearchQuotes extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            query : ''
        };

        this.queryInputRef = React.createRef();
    }

    logout = () => {
        logout();
        this.props.history.push( '/' );
    }

    Search = ( event ) => {
        event.preventDefault();

    }
    // this.updateSearchText=this.updateSearchText.bind();
    updateSearchText = (event) => {
        event.preventDefault();
        this.setState({
            query: this.queryInputRef.current.value    
        });
    }
    render() {
        console.log( 'this.props insude SearchQuotes = ', this.props );
        let el;

        switch( this.props.searchQuotes.isLoading ) {
            case FETCH_SEARCH_QUOTES:
                el = (
                    <div className="alert alert-default">
                        SearchQuotes are being loaded...
                    </div>
                );
                break;
            case  FETCH_SEARCH_QUOTES_SUCCESS :
                el = (
                    <div>
                        {this.props.searchQuotes.searchquotes.quotes.slice(1,10).map((quote,index)=>{
                                return(
                                    <div>
                                    {quote.body}
                                   </div>  
                                )
                                })
                            }
                    </div>
                );
                break;
            case FETCH_SEARCH_QUOTES_FAILURE:
                el = (
                    <div className="alert alert-danger">
                        Something went wrong. Quotes could not be fetched.
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
        return <div className="">

            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className=" offset-md-2 offset-sm-2 searchbrand" to="/" >FAVQS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse offset-md-5" id="navbarNav">
                    <ul className="navbar-nav" style={{marginTop:'.1em'}}>
                    <li className="nav-item">
                        <Link className=" searchsearch " to="/search">SEARCH</Link>
                    </li>
                    <li className="nav-item"> 
                            <Link className="searchprofile" to="/login">PROFILE</Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.logout} className="searchlogout">Logout</button>
                    </li>
                    </ul>
                </div>
            </nav> 
           
            <div className="row no-gutters offset-md-4 ">
                <form className="searchForm" onSubmit={this.Search}>
                    <p className="searchfafa"><i class="fa fa-search" aria-hidden="true"></i></p>
                    <div className="form-group ">
                        <input type="text" className="form-control searchFormText "id="search" name="search"
                            placeholder={'Search  for Quotes..'} ref={this.queryInputRef} onChange={this.updateSearchText} />
                    </div>
                    <div className="form-group">
                        <button className="searchbtn">Search</button>
                    </div>
                </form>
            </div>
            {el}
        </div>
    }
    componentDidMount() {
        this.props.dispatch( getSearchQuotesThunk('funny') );
    }
}

export default SearchQuotes;