import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './style.scss';
// import store from '../../redux/store.js';

import Sidebar from './components/sidebar';
// import Account from './components/pages/account';
// import Dashboard from './components/pages/dashboard';
// import Password from './components/pages/password';
// import Skills from './components/pages/skills';
// import PaymentMethods from './components/pages/payment';
// import paymentsHistory from './components/pages/paymentsHistory';
// import Notifications from './components/pages/notifications';
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
          {/* <Switch>
            <Route path='/account/dashboard' component={Dashboard} />
            <Route path='/account/profile' component={Account} />
            <Route path='/account/password' component={Password} />
            <Route path='/account/skills' component={Skills} />
            <Route path='/account/payment' component={PaymentMethods} />
            <Route path='/account/paymentshistory' component={paymentsHistory} />
            <Route path='/account/notifications' component={Notifications} />
          </Switch> */}
        </div>
      </div>
    )
  }

}
export default withRouter(PrivateUserProfile);


