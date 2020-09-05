import React from 'react';
import './style.scss';
import { Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { getReturnPath } from "../../common.js"
import userAPI from '../../../services/userAPI';
import PasswordStrengthBar from 'react-password-strength-bar';


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            redirect: null,
            email: '',
            password: '',
            passwordScore: 0,
            invalidCredential: false,  //failure due to credential in wrong format
            invalidEmail: true,
            toShortPassword: true,
        }
        this.handleSignUp = this.handleSignUp.bind(this);

        this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this);
        this.handleInputChangePassword = this.handleInputChangePassword.bind(this);
        this.getPasswordScore = this.getPasswordScore.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    getPasswordScore(score){  // think about how to use it
        this.setState({
            passwordScore:score
        }, ()=>{})
    }
    // handleSignUp = async (e)=>{
    //     e.preventDefault();
    //     if(!window.localStorage){
    //         return false
    //     }else{
    //         const storage = window.localStorage;
    //         const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjJhOGQ3ZmRlMWJjNDNiOTRiOTM0NzkiLCJlbWFpbCI6ImNoYWRtb2RyZWRAZ21haWwuY29tIiwiaWF0IjoxNTk2NjI0MjU1LCJleHAiOjE1OTY2MjQzMTV9.qS-x1RyBHiVrBZ6-ei_OADLe2uXDZw0mdQ0kRbTVCtc';
    //         storage.setItem('token',token);
    //         this.setState({
    //             redirect: "/"
    //         })
    //     }
    // }
    // *********************
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
    getPasswordScore(score){
        this.setState({
            passwordScore:score
        },()=>{})
    }
    handleSignUp(e){
        e.preventDefault();
        const { email, password, invalidEmail, tooShortPassword, passwordScore } = this.state;
        this.validateEmail();
        this.validatePassword();
        if(!invalidEmail && passwordScore>=2){
            const userCredential = { email, password };
            userAPI.signUp(userCredential).then(data=>{
                // window.localStorage.setItem('token',data.token);
                console.log(data.token);
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
        if(password.length<7){
            this.setState({
                tooShortPassword: true
            },()=>{})
        }else{
            this.setState({
                tooShortPassword: false
            },()=>{})
        }
    }

    render(){
        const { email, password } = this.state;
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div className="signUp" data-test="signUp">
                <div className="signUp_content">
                    <div className="signUp_content_header">
                        <div>
                            <span className="signUp_content_close" onClick={()=>this.props.history.push(getReturnPath())}>&times;</span>
                            <h2>Sign up</h2>
                        </div>
                    </div>
                    <form className="signUp_content_main">
                        <div className="signUp_content_main_input">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" id="email" placeholder="Email" autoComplete="on" autoFocus="on" 
                                onChange={this.handleInputChangeEmail} value={email} data-test="email" />
                                {this.state.invalidCredential && this.state.invalidEmail && <p data-test="invalidEmail">Please enter a valid email address</p> }
                        </div>
                        <div className="signUp_content_main_input">
                            <label htmlFor="password" >Password</label>
                            <input 
                                type="text" id="password" placeholder="Password" autoComplete="on"
                                onChange={this.handleInputChangePassword} value={password} data-test="password"
                            />
                            {this.state.invalidCredential && this.state.tooShortPassword && <p data-test="tooShortPassword">Please enter a minimum of 7 characters</p> }
                            {this.state.invalidCredential && this.state.passwordScore<2 && !this.state.tooShortPassword && <p data-test="weakPassword">Please choose a stronger password</p> }

                            <PasswordStrengthBar className="signUp_content_main_input_strength" password={password} onChangeScore={(score)=>{this.getPasswordScore(score)}} />
                        </div>
                        <button className="signUp_content_main_join" type="submit" onClick={this.handleSignUp} data-test="submit" >Join Handytasker</button>
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
