import React from 'react';
import pic from "../images/payments_earned_2.jpg";

export function PaymentsHistoryEarned() {
  return (
    <div className="account_main_payments-history_body_earned">
      <span>Showing</span>
      <select>
        <option value="all">All</option>
        <option value="range">Range</option>
      </select>
      <div>
        <h7>Net earned</h7>
        <span>$0.00</span>
      </div>
      <div>
        <p>0 transactions for 1st Jan 2012 - 16th Nov 2019</p>

        <img src={pic} alt="Not found" />
        <p>You haven't earned from any tasks yet. Yet to find the right task?</p>
        <p>Browse tasks</p>
      </div>
    </div>
  )
}