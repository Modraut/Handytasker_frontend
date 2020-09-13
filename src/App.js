import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './globalStyle.scss';
import './style.scss';
import { actionCreators } from './store/user/index';
import store from './store';

import Home from './pages/home/index';
import SignUp from './common/components/SignUp';
import LogIn from './common/components/Login';
import Navbar from './common/components/Navbar';
import PostTask from './common/components/PostTask';
import PrivateUserProfile from './pages/PrivateUserProfile';
class App extends Component {
  constructor(){
    super();
    this.state = {
      login: false
    }
    this.handleLoginStatus = this.handleLoginStatus.bind(this);
  }
  handleLoginStatus(){
    this.setState({
      login: true
    })
  }
  componentDidMount(){
    if(!window.localStorage){
      console.log('No token');
    }else{
    this.props.loadUser()
    // userAPI.loadUserWithJwt(token)
    }
  }

  render(){
    return (
      <Fragment>
        <Navbar />
        <main>
          <Switch>
            <Route path="/account" render={PrivateUserProfile} />
            <Route path="/" render={()=> <Home key={Math.random()} />} />
          </Switch>
        </main>
        <footer></footer>
        <Route path='/*/sign-up' component={() => <SignUp handleLoginStatus={this.handleLoginStatus} />} />
        {/* callback to enable this.props for <SignUp>. To be remove later */}
        <Route path='/sign-up' component={() => <SignUp handleLoginStatus={this.handleLoginStatus} />} />
        <Route path='/*/login' component={() => <LogIn handleLoginStatus={this.handleLoginStatus} />} />
        <Route path='/login' component={() => <LogIn handleLoginStatus={this.handleLoginStatus} /> } />
        <Route path='/*/post-task' component={() => <PostTask handleLoginStatus={this.handleLoginStatus} />} />
        <Route path='/post-task' component={() => <PostTask handleLoginStatus={this.handleLoginStatus} /> } />
      </Fragment>
    )
  }
}

// const mapState = (state) => ({
//   firstName: state.get('user').get('firstName')
// })
const mapDispatch= (dispatch) => ({
  loadUser(){
    dispatch(actionCreators.loadUser())
  }
})

export default connect(null, mapDispatch)(App);

