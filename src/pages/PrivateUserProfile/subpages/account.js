import React from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import './account.scss';
import store from '../../../store/index.js';
import userAPI from '../../../services/userAPI';
// import { getCurrentID } from '../../../../Util'

import './account.scss';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "", // duplicate in worker as Name
      lastName: "", // duplicate in worker as Name
      tagline: "",
      location: "", // duplicate in worker as Location
      mobileNumber: "",
      email: "",
      birthday: "",
      abn: "",
      description: "",
      postTasks: false,  // true if the user will post task
      earnMoney: false, // true if the user will take task from other people
      avatar: "",
      // user: getCurrentID(),
      // avatarURL: '',
      imgError: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  };


  componentDidMount() {
    setTimeout(() => {
      const userData = store.getState().currentUser;
      this.setState(userData)
      console.log(userData)
    }, 100);
  };
  handleInputChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  };
  toggleCheckbox(e) {
    if (this.state[e.target.name]) {
      this.setState({
        [e.target.name]: false
      })
    } else {
      this.setState({
        [e.target.name]: true
      })
    }
    // this.setState({
    //   [e.target.id]: (e.target.checked === "checked") ? false : true
    // })
  }

  render() {
    // const {
    //   firstName,
    //   lastName,
    //   tagline,
    //   location,
    //   mobileNumber,
    //   email,
    //   birthday,
    //   abn,
    //   description,
    //   postTasks,
    //   earnMoney,
    //   handleInputChange,
    //   toggleCheckbox,
    // } = this.props;

    return (
      <div className="account_main_account">
        <div className="account_main_account_header">
          <h4>Account</h4>
          <div>Your profile is 74% complete</div><br />
          <div><div></div></div>
        </div>
        <div className="account_main_account_body">
          <div className="account_main_account_body_avatar">
            {/* <label>Upload Avatar</label><br /> */}
            <div>
              <img className="pic" src={this.props.avatar} alt="user avatar" />
              {/* <img className="pic" src={this.state.imgError ? avatar : this.state.avatarURL} alt="user avatar" /> */}

              <label forhtml="avatar">Upload photo
								<input type="file" name="file" id="avatar"  accept="image/*" />
                {/* <img className="pic" src={this.state.avatar} alt="user avatar" /> */}
                {/* <img className="pic" src={this.state.imgError ? this.state.avatar : this.state.avatarURL} alt="user avatar" /> */}

              </label>

              <button>View your public profile</button><br />
            </div>
          </div>
          <form onSubmit={this.updateData}>
            <div>
              <label for="firstName">First name </label><br />
              <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
            </div>

            <div>
              <label for="lastName">Last name</label><br />
              <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
            </div>

            <div>
              <label for="tagline">Tagline</label><br />
              <input type="text" id="tagline" placeholder="Mini Bio" value={this.state.tagline} onChange={this.handleInputChange} />
            </div>

            <div>
              <label for="location">Location</label><br />
              <input type="text" id="location" value={this.state.location} onChange={this.handleInputChange} />
            </div>

            <div>
              <label for="mobileNumber">Mobile number</label><br />
              <input type="tel" id="mobileNumber" value={this.state.mobileNumber} onChange={this.handleInputChange} />
            </div>

            <div>
              <label for="email">Email</label><br />
              <input type="email" id="email" value={this.state.email} onChange={this.handleInputChange} />
            </div>

            <div>
              <label for="birthday">Birthday</label><br />
              <input type="date" id="birthday" value={this.state.birthday} onChange={this.handleInputChange} />
            </div>

            <div>
              <label for="abn">ABN</label><br />
              <input type="text" id="abn" value={this.state.abn} onChange={this.handleInputChange} />
            </div>

            <div>
              <label for="description">Description</label><br />
              <textarea cols="35" rows="3" id="description" value={this.state.description} onChange={this.handleInputChange} /><br />
            </div>

            <div className="account_main_account_body_checkbox">
              <label>On Airtasker I want to</label><br />
              <input type="checkbox" value="post tasks" name="postTasks" checked={this.state.postTasks ? "checked" : ""} onChange={this.toggleCheckbox} /><label>Post tasks</label><br />
              <input type="checkbox" value="earn money" name="earnMoney" checked={this.state.earnMoney ? "checked" : ""} onChange={this.toggleCheckbox} /><label>Earn money</label><br />
            </div>

            <button type="submit" >Save profile</button>
          </form>
        </div>
        <button>Deactivate my account</button>
      </div>
    )
  }

}



const mapState = state => ({
  // login: state.getIn(["user", "login"]),
  avatar: state.getIn(["user","avatar"])
});

// const mapDispatchToProps = dispatch => {
//   return {
//     handleInputChange(e) {
//       dispatch(changeInput(e))
//     },
//     toggleCheckbox(e) {
//       dispatch(toggleCheckbox(e))
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(Account);
export default connect(mapState, null)(Account);
