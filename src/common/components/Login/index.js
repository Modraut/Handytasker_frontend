import React from 'react';
import axios from 'axios';
import './style.scss';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { getReturnPath } from "../../common.js"
import userAPI from '../../../services/userAPI';
// import { validate } from '../../common.js';
import PasswordStrengthBar from 'react-password-strength-bar';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            email: '',
            password: '',
            invalidCredential: false,  //failure due to credential in wrong format
            invalidEmail: true,
            invalidPassword: true,
            incorrectCredential: false,   // failure due to incorrect credential
        }
        this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this);
        this.handleInputChangePassword = this.handleInputChangePassword.bind(this);
        this.getPaswordScore = this.getPaswordScore.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }
    handleInputChangeEmail(e){
        this.setState({
            email: e.target.value
        }, ()=>{
            this.state.invalidCredential && this.validateEmail()
        })
    }
    handleInputChangePassword(e){
        this.setState({
            password: e.target.value
        }, ()=>{
            this.state.invalidCredential && this.validatePassword()
        })
    }
    getPaswordScore(score){
        this.setState({
            passwordScore:score
        })
    }

    handleLogin(e){   // should async?
        e.preventDefault();
        const { email, password, invalidEmail, invalidPassword } = this.state;
        if(!invalidEmail && !invalidPassword){
            userAPI.login({email, password}).then(data=>{
                window.localStorage.setItem('email',data.email);
                window.localStorage.setItem('password',data.password);
            }).catch(error=>{
                this.setState({
                    incorrectCredential: true  // login failed due to wrong credential
                })
            })
        }else{
            this.setState({
                invalidCredential: true   // login failed due to wrong format
            })
        }  // login failed 
    }
    validateEmail(){  // email needs to meet the format and length is between 4 and 32
        const { email } = this.state;
        const exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.length<4 || email.length>32 || !exp.test(email)){
            this.setState({
                invalidEmail: true
            },()=>{})
        }else{
            this.setState({
                invalidEmail: false
            },()=>{})
        }
    }
    validatePassword(){   // password can't be ''
        const { password } =  this.state;
        if(password===''){
            this.setState({
                invalidPassword: true
            },()=>{})
        }else{
            this.setState({
                invalidPassword: false
            },()=>{})
        }
    }
    render(){
        const { email, password, invalidEmail, invalidPassword, passwordScore } = this.state;
        return(
            <div className="login" data-test="login">
                <div className={this.state.incorrectCredential?"login_status-fail":"login_status"}> 
                    <div>
                        <h3>Login failed</h3>
                        <p>Sorry, these login details do not match an existing client profile. Please try again</p>
                        <button onClick={this.handleIncorrectCredential}>OK</button>
                    </div>
                </div>
                <div className="login_content">
                    <div className="login_content_header">
                        <span className="login_content_close" onClick={()=>this.props.history.push(getReturnPath())}>&times;</span>
                        <h2>
                            Log in
                        </h2>
                    </div>
                    <form className="login_content_main">
                        <div className="login_content_main_input">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" id="email" placeholder="Email" autoComplete="on" autoFocus="on"
                                onChange={this.handleInputChangeEmail} value={email} data-test="email"
                            />
                            {this.state.invalidCredential && this.state.invalidEmail && <p data-test="invalidEmail">Please enter a valid email address</p> }
                        </div>
                        <div className="login_content_main_input">
                            <label htmlFor="password" >Password</label>
                            <input 
                                type="text" id="password" placeholder="Password" autoComplete="on"
                                onChange={this.handleInputChangePassword} value={password} data-test="password"
                            />
                            {this.state.invalidCredential && this.state.invalidPassword && <p data-test="invalidPassword">please enter your password</p> }
                        </div>
                        <div className="login_content_main_forgotPassword">
                            <p>Forgot Password?</p>
                        </div>
                        <button className="login_content_main_join" type="submit" onClick={this.handleLogin} data-test="submit">Log in</button>
                        <div className="login_content_main_signUpWith">
                            <p>or sign up with</p>
                        </div>
                        <button className="login_content_main_facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                            <span>Facebook</span>
                        </button>
                        <button className="login_content_main_google">
                            <img src="https://img.icons8.com/color/20/000000/google-logo.png"/>
                            <span>Google</span>
                        </button>
                        <div className="login_content_main_signUp">
                            <p>
                                <span
                                    onClick={()=>this.props.history.push(getReturnPath()+'sign-up')}
                                >Sign up</span>
                                Don't have an account?
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default withRouter(Login);
