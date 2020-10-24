import React from 'react';
import pic from "../images/payment_history.webp";


export function PaymentsHistoryOutgoing() {
  return (
    <div className="account_main_payments-history_body_outgoing">
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
        <p>0 transactions for 1st Jan 2012 - 16th Nov 2019</p><br />
        <img src={pic} alt="Not found" />
        <p>You haven't paid for any tasks yet. But let's change that!</p>
        <button>Post a task</button>
      </div>
    </div>
  )
}

