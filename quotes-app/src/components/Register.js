import React, { Component } from 'react';
import { login } from '../services/auth';
import { Link } from 'react-router-dom';
import { isLoggedIn, logout, } from '../services/auth';
import '../css/registercss.css';

class Register extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            username:'',
            email: '',
            password: '',
            confirmpassword:''
        };
        this.username = React.createRef();
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.confirmpasswordInputRef = React.createRef();
    }

    login = ( event ) => {
        event.preventDefault();
        login( this.state )
            .then( data => this.props.history.push( '/' ) )
            .catch( error => alert( 'Invalid credentials' ) );
    }

    updateCredentials = () => {
        this.setState({
            username: this.usernameInputRef.current.value,
            email: this.emailInputRef.current.value,
            password: this.passwordInputRef.current.value,
            confirmpassword: this.confirmpasswordInputRef.current.value
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
                <div className="row no-gutters">
                    <div className="registercontent offset-3 col-md-6" >
                        <div className="row no-gutters">
                            <div className="col-md-1 col-sm-1 ">
                                <p className="fafaumbrella"><i class="fa fa-umbrella" aria-hidden="true"></i></p>
                                <p className="fafamap"><i class="fa fa-map-signs"></i></p>
                                <p className="fafauser"><i class="fa fa-user-secret"></i></p>
                            </div>
                            <div className="col-md-5 registertext col-sm-5">
                                <p id ="reghead1">George Carlin</p>
                                <p id="reg">Let a smile be your umbrella, and you'll end up with a face full of rain.</p>
                                <p>Bob Marley</p>
                                <p>Life is one big road with lots of sign, So when you riding through the ruts, 
                                    Don't you complicate your mind Flee from hate, mischief jealousy Don't bury 
                                    your thoughts; put your vision to reality.
                                </p>
                                <p>Sherlock Holmes</p>
                                <p>Education never ends, Watson. It is a series of lessions with the greatest for last</p>
                            </div>
                        </div>
                    </div>
                    <div className="card registerCard " >
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
                </div>
                <p id="logincopy"><i class="fa fa-copyright"></i>2018</p>
            </div>
        );
    }
}

export default Register;