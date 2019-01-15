import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import QuoteList from '../containers/QuoteList'

class App extends Component {
    render() {
        
        return ( 
            <div >
                <Switch>
                    <Route path="/QuoteList" exact component={QuoteList} />
                    <Route path="/" exact component={QuoteList} />
                    {/* <Route path="/login" exact component={Login} />                     */}
                    {/* <Route path="*" exact component={PageNotFound} /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
