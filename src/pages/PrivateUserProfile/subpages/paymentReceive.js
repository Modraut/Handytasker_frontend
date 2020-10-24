import React from 'react';



function ReceivePayments() {
  return (
      <div className="account_main_payment_body_receive">
        <p>Once a task is completed, you will be able to request payment from the Job Poster,
           who will then release it to your nominated account.</p>
        <form>
          <h6>Bill address</h6>
          <p>Your billing address will be verified before you can receive payments.</p>
          <label for="address1">Address Line 1 <br />
            <input type="text" id="address1" />
          </label><br />

          <label for="address2">Address Line 2 (optional)<br />
            <input type="text" id="address2" />
          </label><br />

          <label for="suburb">Suburb<br />
            <input type="text" id="suburb" placeholder="Mini Bio" />
          </label><br />

          <label for="state">State<br />
            <input type="text" id="state" />
          </label><br />

          <label for="postcode">Postcode<br />
            <input type="text" id="postcode" />
          </label><br />

          <label for="country">Country<br />
            <input type="text" id="country" />
          </label><br />
          <p>For account verification purposes, your address will never be shown publicly.</p>
          <button>Add billing address</button>
        </form>
        <form>
          <h6>Bill address</h6>
          <p>Your billing address will be verified before you can receive payments.</p>
          <label for="accountholder">Account holder name <br />
            <input type="text" id="accountholder" />
          </label><br />

          <label for="accountname">Account name<br />
            <input type="text" id="accountname" placeholder="12345678"/>
          </label><br />

          <label for="bsb">BSB<br />
            <input type="text" id="bsb" placeholder="000-000" />
          </label><br />

          <button>Add billing address</button>
        </form>
      </div>
  )
}

export default ReceivePayments;

