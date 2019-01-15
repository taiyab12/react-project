import React, { Component } from 'react';
import { login } from '../services/auth';
import { Link } from 'react-router-dom';
import { isLoggedIn, logout } from '../services/auth';
import '../css/logincss.css';

class Login extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            email: '',
            password: ''
        };

        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }

    login = ( event ) => {
        event.preventDefault();
        login( this.state )
            .then( data => this.props.history.push( '/' ) )
            .catch( error => alert( 'Invalid credentials' ) );
    }

    updateCredentials = () => {
        this.setState({
            email: this.emailInputRef.current.value,
            password: this.passwordInputRef.current.value
        });
    }

    render() {
        return (
            <div className=" ">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className=" offset-md-2 offset-sm-2 homebrand" to="/" >FAVQS</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse offset-md-5" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            {
                                isLoggedIn ? <button onClick={this.logout} className="btn btn-primary" to="/">LOGOUT</button> : 
                                <Link className=" btnloginhome btn btn-primary" to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</Link>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className=" btnregisterhome btn btn-primary" to="/register"><i class="fa fa-users" aria-hidden="true"></i> REGISTER</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                <div className="mx-auto card loginCard" >
                    <p className="loginwel">Welcome</p>
                    <form className="loginForm" onSubmit={this.login}>
                        <div className="form-group">
                            <label htmlFor="email" className="control-label" >Email</label>
                            <input type="email" className="form-control" id="email" name="email" ref={this.emailInputRef} onChange={this.updateCredentials} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="control-label"style={{marginBottom:'.45em'}}>Password</label>
                            <input type="password" className="form-control" id="password" name="password" ref={this.passwordInputRef} onChange={this.updateCredentials} />
                        </div>
                        <div className="form-group">
                            <button className="btn btnlogin btn-primary">Login</button>
                        </div>
                        <p id="forgetpass">FORGET PASSWORD?</p>
                    </form>
                </div>
                <p id="logincopy"><i class="fa fa-copyright"></i>2018</p>
            </div>
        );
    }
}

export default Login;