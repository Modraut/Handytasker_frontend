import React from 'react';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faPlusCircle
  } from '@fortawesome/free-solid-svg-icons';
import { NavLink} from 'react-router-dom';

function MakePayments() {
  return (
    <div className="account_main_payment_body_make">
      <p>
      When you are ready to accept a Tasker's offer, you will be required to pay for the task using Airtasker Pay.
       Payment will be held securely until the task is complete and you release payment to the Tasker.
      </p>
      <div>
        <h7>Credit card</h7> <br/>
        <NavLink to="">
          <div>
            <FontAwesomeIcon icon={faPlusCircle} color="#2da2c0" />
          </div>
          <span>Add your credit card</span>
        </NavLink>
      </div>
    </div>

  )
}

export default MakePayments;

