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


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            existingEmail: false,
            invalidEmail: false,
            invalidPassword: false,
            passwordScore: 0,
            signUpFailed: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        this.getPaswordScore = this.getPaswordScore.bind(this);
        // this.handleLoginFail = this.handleLoginFail.bind(this);
    }
    handleInputChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    getPaswordScore(score){
        this.setState({
            passwordScore:score
        })
    }

    render(){
        const { email, password } = this.state;
        return(
            <div className="signUp">
                <div className="signUp_content">
                    <div className="signUp_content_header">
                        <span className="signUp_content_close" onClick={()=>this.props.history.push(getReturnPath())}>&times;</span>
                        <h2>
                            Join Senryu
                        </h2>
                    </div>
                    <form className="signUp_content_main">
                        <div className="signUp_content_main_input">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Email" autoComplete="on" autoFocus="on" onChange={this.handleInputChange} value={email} />
                        </div>
                        <div className="signUp_content_main_input">
                            <label htmlFor="password" >Password</label>
                            <input type="text" id="password" placeholder="Password" autoComplete="on" onChange={this.handleInputChange} value={password} />
                            {/* <p>Password strength</p> */}
                            <PasswordStrengthBar className="signUp_content_main_input_strength" password={password} onChangeScore={(score)=>{this.getPaswordScore(score)}} />
                        </div>
                        <button className="signUp_content_main_join" type="submit" onClick={this.handleSignUp}>Join Senryu</button>
                        <div className="signUp_content_main_signUpWith">
                            <p>or sign up with</p>
                        </div>
                        <button className="signUp_content_main_facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                            <span>Facebook</span>
                        </button>
                        <button className="signUp_content_main_google">
                            <img src="https://img.icons8.com/color/20/000000/google-logo.png"/>
                            <span>Google</span>
                        </button>
                        <div className="signUp_content_main_marketing">
                            <input type="checkbox" />
                            <p>Please don't send me tips or marketing via email or sms</p>
                        </div>
                        <p className="signUp_content_main_agreement">
                            By signing up, I agree to easy-writing's <a>Terms & Conditions</a>,
                            and <a>Community Guidelines.</a><a>Privacy Policy.</a>
                        </p>
                        <div className="signUp_content_main_login">
                            <p>
                                <span
                                    onClick={()=>this.props.history.push(getReturnPath()+'login')}
                                >Log in</span>
                                Already have an account?
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


// const mapState = state => ({
//     loginStatus: state.getIn(["signUp", "signUpStatus"])
// });

// const mapDispatch = (dispatch) => ({
//     updateHomeData(){
//         dispatch(actionCreators.updateHomeData())
//     }

// })

export default withRouter(SignUp);