import React from 'react';
// import store from '../../../redux/store.js';
import './sidebar.scss';
import { NavLink } from "react-router-dom";



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
    return (
      <div className="account_sidebar">
        <div className="account_sidebar_avatar">
          {/* <img src={currentUser.avatar} alt="pending" />
          <div>{currentUser.firstName + ' ' + currentUser.lastName} </div> */}
        </div>
        <nav>
          <ul>
            <div className={this.state.showSettings ? "account_sidebar-hideDefault" : "account_sidebar-showDefault"}>
              <NavLink to="/privateUserProfile/dashboard"><li>Dashboard</li></NavLink>
              <NavLink to="/privateUserProfile/payment/"><li>Payment method</li></NavLink>
              <NavLink to="/privateUserProfile/paymentshistory"><li>Payments history</li></NavLink>
              <NavLink to="/privateUserProfile/notifications"><li>Notifications</li></NavLink>
            </div>
            <li
              onClick={this.toggleShowSettings}
              className={this.state.showSettings ? "account_sidebar-settingsMode settings" : "account_sidebar-defaultMode settings"}
            >
              settings<span></span><span></span></li>
            {/* The page only shows either default or settings at one time */}
            <div className={this.state.showSettings ? "account_sidebar-showSetting" : "account_sidebar-hideSettings"}>
              <NavLink to="/privateUserProfile/account"><li>account</li></NavLink>
              <NavLink to="/privateUserProfile/skills"><li>skills</li></NavLink>
              <NavLink to="/privateUserProfile/password"><li>password</li></NavLink>
            </div>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
