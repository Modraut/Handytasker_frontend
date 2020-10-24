import React from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';


import './paymentsHistory.scss';
import { PaymentsHistoryEarned } from './paymentsHistoryEarned';
import { PaymentsHistoryOutgoing } from './paymentsHistoryOutgoing';


function PaymentsHistory(props) {
  const url = props.location.pathname.replace("/account/paymentsHistory/","")
  return (
    <div className="account_main_payments-history">
      <div className="account_main_payments-history_header">
        <h4>Payments History</h4>
        <div>
          <NavLink to="/account/paymentsHistory/earned" 
          className={url==="outgoing"?"":"account_main_payments-history_header--active"}
          > <h6>Earned</h6></NavLink>
          <NavLink to="/account/paymentsHistory/outgoing"
            className={url==="outgoing"?"account_main_payments-history_header--active":""}
            ><h6>Outgoing</h6></NavLink>
        </div>
      </div>
      <div className="account_main_payments-history_body">
        <Switch>
          <Route path='/account/paymentsHistory/outgoing'  component={PaymentsHistoryOutgoing} />
          <Route path='/account/paymentsHistory/'  component={PaymentsHistoryEarned} />
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(PaymentsHistory);

