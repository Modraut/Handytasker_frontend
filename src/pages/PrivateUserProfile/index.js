import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './style.scss';
// import store from '../../redux/store.js';

import Sidebar from './subpages/sidebar';
import Account from './subpages/account';
import Dashboard from './subpages/dashboard';
import Password from './subpages/password';
import Skills from './subpages/skills';
import PaymentMethods from './subpages/payment';
import paymentsHistory from './subpages/paymentsHistory';
import Notifications from './subpages/notifications';
import { isObjectEmpty } from '../../common/common'


class PrivateUserProfile extends React.Component {
  // componentDidMount() {
  //   const user = store.getState().currentUser;
  //   if (isObjectEmpty(user)) {
  //     document.location.href = '/';
  //   }

  // }

  render() {
    return (
      <div className='account'>
        <Sidebar />
        <div className="account_main">
          <Switch>
            <Route path='/account/dashboard' component={Dashboard} />
            <Route path='/account/profile' component={Account} />
            <Route path='/account/password' component={Password} />
            <Route path='/account/skills' component={Skills} />
            <Route path='/account/payment' component={PaymentMethods} />
            <Route path='/account/paymentshistory' component={paymentsHistory} />
            <Route path='/account/notifications' component={Notifications} />
            <Route path='/account/' component={()=> (<Redirect to="/account/dashboard" />)} />
          </Switch>
        </div>
      </div>
    )
  }

}
export default withRouter(PrivateUserProfile);


