import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

import { FETCH_USER_DETAILS,  FETCH_USER_DETAILS_SUCCESS , FETCH_USER_DETAILS_FAILURE } from '../actions/constants';
import { getUserDetailsThunk } from '../actions/creators';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/searchcss.css';


class UserDetails extends Component {
    constructor( props ) {
        super( props );
    }

    logout = () => {
        logout();
        this.props.history.push( '/' );
    }


    // this.updateSearchText=this.updateSearchText.bind();
    // updateSearchText = (event) => {
    //     event.preventDefault();
    //     this.setState({
    //         query: this.queryInputRef.current.value    
    //     });
    // }
    render() {
        console.log( 'this.props inside UserDetails = ', this.props );
        let el;

        switch( this.props.userDetails.isLoading ) {
            case FETCH_USER_DETAILS:
                el = (
                    <div className="alert alert-default">
                        userdetails are being loaded...
                    </div>
                );
                break;
            case  FETCH_USER_DETAILS_SUCCESS :
                el = (
                    <div className="offset-md-1 offset-sm-1 container row">
                        {/* {this.props.searchQuotes.searchquotes.quotes.slice(1,10).map((quote,index)=>{
                                return(
                                    
                                    <div className="card col-md-4" style={{display:'inline-block'}}>
                                    <p className="text-center"><img className="col-md-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ul0RASuMwyt8ALqYw3TcPU5QlurGljQtrWYRKO18pa6ZYbvN"></img></p>
                                    <p style={{fontSize:'.85em'}}>{quote.body}</p>
                                    <p style={{fontSize:'.65em'}}>{quote.author}</p>
                                   <p className="text-center"> <img className="rounded-circle col-md-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStU4IBbTg641epSxf2q0A7z6MEWIRlDiEo1djzpp_iZ37EHoh3"/></p>  
                                   </div>
                                )
                                })
                            } */}
                    </div>
                );
                break;
            case FETCH_USER_DETAILS_FAILURE:
                el = (
                    <div className="alert alert-danger">
                        Something went wrong. User Details could not be fetched.
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
           
            {el}
        </div>
    }
    componentDidMount() {
        this.props.dispatch( getUserDetailsThunk( ) );
    }
}

export default UserDetails;