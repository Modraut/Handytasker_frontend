import React from 'react';
// import store from '../../../redux/store.js';
import './sidebar.scss';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';



class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      showSettings: false,
    }
    this.toggleShowSettings = this.toggleShowSettings.bind(this)
  }
  toggleShowSettings() {
    this.setState( prevState =>({
      showSettings: !prevState.showSettings
    }))
  }
  render() {
    const { avatar, firstName, lastName } = this.props;
    return (
      <div className="account_sidebar">
        <div className="account_sidebar_container">
          <div className="account_sidebar_container_avatar">
            <img src={avatar} alt="pending" />
            <div>{firstName + ' ' + lastName} </div>
          </div>
          <nav>
            <ul>
              <div className={this.state.showSettings ? "account_sidebar_container-hideDefault" : "account_sidebar_container-showDefault"}>
                <NavLink to="/account/dashboard"><li>Dashboard</li></NavLink>
                <NavLink to="/account/payment/"><li>Payment method</li></NavLink>
                <NavLink to="/account/paymentshistory"><li>Payments history</li></NavLink>
                <NavLink to="/account/notifications"><li>Notifications</li></NavLink>
              </div>
              <li
                onClick={this.toggleShowSettings}
                className={this.state.showSettings ? "account_sidebar_container-settingsMode settings" : "account_sidebar_container-defaultMode settings"}
              >
                settings<span></span><span></span></li>
              {/* The page only shows either default or settings at one time */}
              <div className={this.state.showSettings ? "account_sidebar_container-showSetting" : "account_sidebar_container-hideSettings"}>
                <NavLink to="/account/account"><li>account</li></NavLink>
                <NavLink to="/account/skills"><li>skills</li></NavLink>
                <NavLink to="/account/password"><li>password</li></NavLink>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  avatar: state.getIn(['user', 'avatar']),
  firstName: state.getIn(['user', 'firstName']),
  lastName: state.getIn(['user', 'lastName']),
})

export default connect(mapState)(Sidebar);
