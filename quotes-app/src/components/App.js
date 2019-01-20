import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import QuoteList from '../containers/QuoteList';
import SearchQuotes from '../containers/SearchQuotes';
import UserDetails from '../containers/UserDetails';
import Login from './Login';
import Register from './Register';

class App extends Component {
    render() {
        
        return ( 
            <div >
                <Switch>
                    <Route path="/QuoteList" exact component={QuoteList} />
                    <Route path="/" exact component={QuoteList} />
                    <Route path="/login" exact component={Login} /> 
                    <Route path="/register" exact component={Register} />
                    <Route path="/search" exact component={SearchQuotes} />
                    <Route path="/profile" exact component={UserDetails} />                    
                    {/* <Route path="*" exact component={PageNotFound} /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
