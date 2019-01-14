import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'; 

// import AuthExample from './AuthExample';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';
console.log( 'store = ', store );
console.log( 'store = ', store.getState() );

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById( 'root' )
);
// ReactDOM.render(
//     <AuthExample />
//     , document.getElementById( 'root' )
// );












// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

