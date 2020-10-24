import React from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';


import './payment.scss';
import MakePayments from './paymentMake';
import ReceivePayments from './paymentReceive';

function PaymentMethods(props) {
  const url = props.location.pathname.replace("/account/payment/","")
  return (
    <div className="account_main_payment">
      <div className="account_main_payment_header">
        <h4>Payment methods</h4>
        <div>
          <NavLink to="/account/payment/" 
            className={url==="receive"?"":"account_main_payment_header--active"}
          > <h6>Make Payments</h6></NavLink>
          <NavLink to="/account/payment/receive"
            className={url==="receive"?"account_main_payment_header--active":""}
            ><h6>Receive Payments</h6></NavLink>
        </div>
      </div>
      <div className="account_main_payment_body">
        <Switch>
          <Route path='/account/payment/receive' exact component={ReceivePayments} />
          <Route path='/account/payment/' exact component={MakePayments} />
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(PaymentMethods);

