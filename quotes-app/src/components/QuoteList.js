import React, { Component } from 'react';
// import ProductDetail from '../containers/ProductDetail';
import { Link } from 'react-router-dom';
import { isLoggedIn, logout } from '../services/auth';

import { FETCH_QUOTES,  FETCH_QUOTES_SUCCESS , FETCH_QUOTES_FAILURE } from '../actions/constants';
import { getQuotesThunk } from '../actions/creators';
import QuoteList from '../containers/QuoteList';
import { Carousel,  CarouselInner, CarouselItem, View } from "mdbreact";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/homecss.css';


class QuotesList extends Component {
    render() {
        console.log( 'this.props inside quoteslist component = ', this.props );
        let el;

        switch( this.props.quoteList.isLoading ) {
            case FETCH_QUOTES:
                el = (
                    <div className="alert alert-default">
                        Quotes are being loaded...
                    </div>
                );
                break;
            case  FETCH_QUOTES_SUCCESS :
                el = (
                    <div>
                        <div className="row no-gutters">
                        <div className="offset-md-3 col-md-6 text-center corouselstyle">
                        <Carousel activeItem={1} length={10} showControls={true} showIndicators={false} className="z-depth-1">
                            <CarouselInner>
                            {
                                this.props.quoteList.quotes.quotes.slice(1,10).map((quote,index)=>{
                                return(
                                    <CarouselItem itemId={index+1}> 
                                    <View>
                                      <p> "{ quote.body}" </p>
                                       <p>-{quote.author}</p>
                                       <div>
                                       <span class="fa-stack fa-lg">
                                            <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                                            <i class="fa fa-heart fa-stack-1x"></i>
                                        </span>
                                        <span class="fa-stack fa-lg">
                                            <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                                            <i class="fa fa-thumbs-o-down fa-stack-1x"></i>
                                        </span>
                                        <span class="fa-stack fa-lg">
                                            <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                                            <i class="fa fa-thumbs-o-up fa-stack-1x"></i>
                                        </span>
                                       </div>
                                    </View>
                                    </CarouselItem>   
                                )
                                })
                            }
                            </CarouselInner>
                        </Carousel>
                        </div>
                        </div>
                    </div>
                );
                break;
            case FETCH_QUOTES_FAILURE:
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
                <Link className=" offset-md-2 offset-sm-2 homebrand" to="/" >FAVQS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse offset-md-5" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        {
                            isLoggedIn ? <button onClick={this.logout} className="btn btn-primary">LOGOUT</button> : 
                            <Link className=" btnloginhome btn btn-primary" to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</Link>
                        }
                    </li>
                    <li className="nav-item">
                        <Link className=" btnregisterhome btn btn-primary" to="/register"><i class="fa fa-users" aria-hidden="true"></i> REGISTER</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            {el}
        </div>
    }

    componentDidMount() {
        this.props.dispatch( getQuotesThunk() );
    }
}

export default QuotesList;