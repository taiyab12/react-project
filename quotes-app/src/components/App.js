import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import QuoteList from '../containers/QuoteList'
// import { isLoggedIn, logout } from '../services/auth';

//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../node_modules/font-awesome/css/font-awesome.min.css';


class App extends Component {
    // logout = () => {
    //     logout();
    //     this.props.history.push( '/login' );
    // }
    render() {
        // const navbarElement=(<div className="container">
        //                 <nav className="navbar navbar-expand-lg navbar-padding" style={{paddingTop:'8px',paddingLeft:'12px'}}>
        //                     <Link className="navbar-brand" to="/Home" ><i className="fa fa-film"></i>argon</Link>
        //                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                         <span class="navbar-toggler-icon">
        //                         <i class="fa fa-navicon" style={{color:'white'}}></i>
        //                         </span>
        //                          </button>

        //                     <div class="collapse navbar-collapse" id="navbar">
        //                     { isLoggedIn ? <ul className="navbar-nav mr-auto">
        //                         <li className="nav-item nav-item-font" style={{fontSize: '11px'}}>
        //                             <Link className="nav-link color-white" to="/home">Home</Link>
        //                         </li>
        //                         <li className="nav-item nav-item-font" style={{fontSize: '11px'}}>
        //                             <Link className="nav-link color-white" to="/about">About</Link>
        //                         </li>
        //                     </ul>:  <div></div>
        //                     }
        //                     {isLoggedIn ?
        //                      <ul className="navbar-nav ml-auto " style={{paddingRight: '7px'}}>
        //                         <li className="nav-item " style={{fontSize: '9px'}}>
        //                             <button className="btn btn-log" style={{fontSize: '10px'}} onClick={this.logout}>
        //                             <i className="fa fa-lock icon-pr"></i>LOGOUT
        //                             </button>
        //                         </li>
        //                     </ul>:  <div></div> } </div>                   
        //                 </nav>
        //                 </div>) 
        // console.log( 'this.props within App = ', this.props );
        return ( 
            <div> 
                {/* {navbarElement}               */}
                <div >
                    <Switch>
                        <Route path="/QuoteList" exact component={QuoteList} />
                        <Route path="/" exact component={QuoteList} />
                        {/* <Route path="/login" exact component={Login} />                     */}
                        {/* <Route path="*" exact component={PageNotFound} /> */}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
