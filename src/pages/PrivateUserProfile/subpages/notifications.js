import React from 'react';
// import { connect } from "react-redux";
import './notifications.scss';


const MAKE_AN_OFFER = "make_an_offer";
const RECEIVE_AN_OFFER = "receive_an_offer";
const TASK_COMPLETE = "task_complete";

class Notifications extends React.Component {
  constructor() {
    super();
    this.state = {
      notifications: [{
        type: MAKE_AN_OFFER,
        time: "01/01/2020",
        task: "For testing",
        user: "Leon",
        price: 100
      },{
        type: RECEIVE_AN_OFFER,
        time: "02/01/2020",
        task: "For testing",
        user: "Tong",
        price: 200
      },{
        type: TASK_COMPLETE,
        time: "03/01/2020",
        task: "For testing",
        user: "Chad",
        price: 300
      },
    ]
    };

  };
  showNotifications(){
    
  }
  render() {
    
    return (
      <div className="account_main_notifications">
        <div className="account_main_notifications_header">
          <h4>Notifications</h4>
          <div>Your profile is 74% complete</div><br />
          <div><div></div></div>
        </div>
        <div className="account_main_notifications_body">
          <p>Keep up to date with your tasks</p>
          <div>
            {
              this.state.notifications.map(item => {
                switch (item.type) {
                  case "make_an_offer":
                    return (
                      <section>
                        <p>
                          <span>{item.user}</span> has made an offer on your task <span>{item.task}</span> - $<span>{item.price}</span>
                        </p>
                        <time>{item.time}</time>
                      </section>
                    )
                    break;
                  case "receive_an_offer":
                    return (
                      <section>
                        <p>
                          You have made an offer on <span>{item.task}</span> by $<span>{item.price}</span>
                        </p>
                        <time>{item.time}</time>
                      </section>
                    )
                  case "task_complete":
                    return (
                      <section>
                        <p>
                          You have completed <span>{item.task}</span> and earned $<span>{item.price}</span>!!!
                        </p>
                        <time>{item.time}</time>
                      </section>
                    )
                  default:
                    break;
                }
              })
            }
          </div>

        </div>
      </div>
    )
  }
  
}
export default Notifications;