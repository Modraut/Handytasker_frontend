import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
// import { actionCreators } from './store/index';
import './style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPenNib, faCompass, faFileDownload, faGem, faBars } from '@fortawesome/free-solid-svg-icons';
// import logoPic from "../../pic/navbar_logo.png";
import { getReturnPath } from '../../common';
import defaultAvatar from "./pic/default.jpg";

class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            login: false,
        }
        this.handleTransparency = this.handleTransparency.bind(this);

    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleTransparency);
        this.header = document.querySelector('.header');

    }
    componentDidUpdate(){
        if(this.props.login===true){
            this.header.classList.remove("transparent")
        }
    }
    handleTransparency(){
        let distanceFromTop = window.scrollY;
        if(this.props.login===false && distanceFromTop===0){
            this.header.classList.add("transparent")
        }else{
            this.header.classList.remove("transparent")
        }
    }
    logoPic = ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="42.000000pt" viewBox="0 0 700.000000 112.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,112.000000) scale(0.100000,-0.100000)" stroke="none" className="header_navbar_logo_svg">
        <path d="M3 1003 c7 -137 24 -209 73 -312 65 -140 217 -257 376 -292 52 -11 58 -15 64 -43 21 -101 119 -216 227 -266 113 -53 164 -62 402 -67 l220 -5 35 101 35 101 200 0 200 0 34 -100 34 -100 128 0 c71 0 129 2 129 5 0 3 -88 238 -196 523 -108 284 -201 529 -206 545 l-10 27 -107 0 -108 0 -153 -407 c-85 -225 -162 -428 -172 -452 l-18 -43 -128 5 c-145 5 -211 22 -274 70 -64 48 -88 103 -88 203 l0 82 -102 4 c-90 3 -112 8 -169 35 -37 17 -85 48 -108 68 -44 40 -96 136 -107 198 l-6 38 423 -3 c412 -3 425 -4 464 -25 53 -28 78 -56 112 -125 l28 -58 44 117 c41 109 43 118 28 142 -24 42 -107 100 -177 123 -63 22 -79 23 -599 26 l-534 3 6 -118z m1693 -403 l52 -150 -114 0 -113 0 50 143 c27 78 52 148 54 156 9 23 17 5 71 -149z"/>
        <path d="M2284 1106 c-50 -22 -74 -61 -74 -121 0 -61 24 -99 76 -121 45 -19 73 -18 113 4 94 51 92 185 -3 232 -49 23 -69 24 -112 6z"/>
        <path d="M3070 659 c0 -316 4 -475 12 -506 16 -65 70 -117 138 -133 59 -14 218 -9 263 9 27 10 27 11 27 104 l0 94 -55 -10 c-31 -5 -71 -6 -90 -3 -59 11 -65 31 -65 203 l0 153 105 0 105 0 0 105 0 105 -105 0 -105 0 0 93 c0 50 -5 108 -10 128 -15 52 -59 89 -127 105 -104 24 -93 77 -93 -447z"/>
        <path d="M4980 571 l0 -551 115 0 115 0 0 175 c0 96 3 175 8 175 4 -1 68 -79 142 -175 l135 -174 143 -1 c78 0 142 2 142 4 0 2 -67 88 -150 192 -82 104 -150 194 -150 199 0 6 59 84 130 174 72 91 130 166 130 168 0 2 -64 3 -142 3 l-143 -1 -120 -152 -120 -152 -5 280 c-5 270 -6 281 -27 311 -26 36 -75 58 -150 69 l-53 7 0 -551z"/>
        <path d="M3796 790 c-56 -9 -160 -52 -199 -82 -17 -13 -15 -18 33 -78 28 -36 55 -69 60 -74 5 -5 22 1 39 13 63 45 167 65 213 40 21 -11 48 -66 48 -99 0 -17 -6 -20 -47 -20 -126 -1 -250 -35 -301 -83 -92 -85 -87 -260 8 -325 66 -44 122 -54 348 -59 l212 -5 0 279 c0 320 -4 345 -73 412 -71 71 -203 102 -341 81z m192 -537 l3 -83 -58 0 c-101 0 -148 45 -119 114 17 40 54 56 126 53 l45 -2 3 -82z"/>
        <path d="M4550 789 c-114 -19 -208 -88 -230 -169 -29 -105 10 -204 100 -250 19 -9 78 -29 130 -44 127 -36 163 -79 104 -125 -52 -41 -146 -25 -246 42 l-26 18 -57 -70 c-65 -80 -65 -82 13 -124 146 -79 368 -78 482 3 72 51 108 171 76 254 -32 83 -91 123 -240 163 -93 24 -126 44 -126 73 0 74 136 85 234 18 l39 -27 45 57 c25 31 50 63 55 70 13 17 -7 39 -62 66 -81 41 -202 59 -291 45z"/>
        <path d="M5993 775 c-199 -44 -319 -213 -300 -421 20 -213 175 -346 406 -346 127 0 223 36 294 110 l38 39 -82 52 c-81 52 -82 52 -103 33 -44 -41 -86 -54 -156 -50 -55 3 -74 9 -104 31 -34 26 -66 73 -66 97 0 7 88 10 270 10 l270 0 0 48 c0 181 -88 330 -224 381 -72 27 -168 33 -243 16z m184 -171 c30 -19 51 -52 59 -92 l7 -32 -162 0 c-142 0 -161 2 -161 16 0 24 37 79 64 97 56 37 144 42 193 11z"/>
        <path d="M2220 401 l0 -381 121 0 120 0 -3 323 c-3 301 -4 324 -23 356 -26 44 -76 69 -153 77 l-62 7 0 -382z"/>
        <path d="M2925 763 c-38 -8 -99 -34 -127 -54 l-28 -20 0 35 0 36 -120 0 -120 0 0 -370 0 -370 120 0 120 0 0 182 c0 164 2 186 21 225 28 58 82 101 152 120 l57 16 0 104 0 103 -27 -1 c-16 -1 -37 -3 -48 -6z"/>
        <path d="M6888 756 c-26 -7 -65 -25 -87 -39 l-41 -27 0 35 0 35 -120 0 -120 0 0 -370 0 -370 120 0 120 0 0 183 c0 173 1 186 23 228 31 57 93 105 159 119 l53 12 -3 104 -3 104 -27 -1 c-15 0 -48 -6 -74 -13z"/>
        <path d="M6875 155 c-15 -14 -25 -36 -25 -53 0 -32 32 -72 58 -71 13 0 12 2 -5 9 -46 19 -56 74 -19 109 31 29 68 23 93 -15 21 -32 9 -73 -27 -91 -17 -9 -20 -13 -8 -13 18 0 58 45 58 66 0 26 -23 62 -47 73 -36 16 -51 14 -78 -14z"/>
        <path d="M6901 98 c1 -24 3 -35 6 -25 6 21 12 22 28 0 10 -14 12 -10 11 23 -1 32 -5 40 -23 42 -21 3 -23 0 -22 -40z m37 20 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z"/>
        </g>
        </svg>
    )

    render(){
        const Logo = this.logoPic;
        // this.currentPath = this.props.location.pathname;
        this.currentPath = window.location.pathname;
        return(
            <header className="header transparent">
                <nav  className="header_navbar">
                    <Link to="./" className="header_navbar_logo">
                        <Logo />
                    </Link>
                    {this.props.login===false &&
                    // navbar for visitor (not logged in)
                        <Fragment>
                            <ul className="header_navbar_user">
                                <li><Link to={this.currentPath==="/"? "/sign-up": this.currentPath+"sign-up"}>Sign up</Link></li>
                                <li><Link to={this.currentPath==="/"? "/login": this.currentPath+"login"}>Log in</Link></li>
                                <li><button>Become a tasker</button></li>
                            </ul>
                            <ul className="header_navbar_nav">
                                <li className="header_navbar_nav_logo"><button  className="visitor">Post a task</button></li>
                                <li><Link to="/">Categories</Link></li>
                                <li><Link to="/">Browse tasks</Link></li>
                                <li><Link to="/">How it works</Link></li>
                            </ul>
                        </Fragment>
                    }
                    {this.props.login===true &&
                    // navbar for user (logged in)
                        <Fragment>
                            <ul className="header_navbar_user">
                                <li><Link to="/">Help</Link></li>
                                <li><Link to="/">Notifications</Link></li>
                                <li><Link to="/">Messages</Link></li>
                                <li><Link><img src={defaultAvatar} alt="avatar" /></Link></li>
                            </ul>
                            <ul className="header_navbar_nav">
                                <li className="header_navbar_nav_logo"><button className="loggedin">Post a task</button></li>
                                <li><Link to="/">Browse tasks</Link></li>
                                <li><Link to="/">My tasks</Link></li>
                            </ul>
                        </Fragment>
                    }
                </nav>
            </header>
        )
    }
}


const mapState = state => ({
    login: state.getIn(["user", "login"])
});

// const mapDispatch = (dispatch) => ({
//     updateHomeData(){
//         dispatch(actionCreators.updateHomeData())
//     }

// })

// export default withRouter(Navbar);
export default connect(mapState, null)(Navbar);