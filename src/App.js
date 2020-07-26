import React, { Component, Fragment } from 'react';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './globalStyle.scss';
import './style.scss';

import Home from './pages/home/index';
import SignUp from './common/components/SignUp';
import LogIn from './common/components/Login';
import Navbar from './common/components/Navbar';

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
  render(){
    return (
      <Provider store = {store}>
        <Fragment>
          <Router>
            <Navbar />
            <main>
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>
            </main>
            <footer></footer>
            <Route path='/*/sign-up' component={() => <SignUp handleLoginStatus={this.handleLoginStatus} />} />
            <Route path='/sign-up' component={() => <SignUp handleLoginStatus={this.handleLoginStatus} />} />
            <Route path='/*/login' component={() => <LogIn handleLoginStatus={this.handleLoginStatus} />} />
            <Route path='/login' component={() => <LogIn handleLoginStatus={this.handleLoginStatus} /> } />
          </Router>
        </Fragment>
      </Provider>
    )
  }
}


export default App;

