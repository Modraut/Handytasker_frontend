import React from 'react';
import { connect } from "react-redux";
import './password.scss';


class Password extends React.Component{
    constructor(){
        super();
        this.state = {
            oldPassword: "",
            newPassword1: "",
            newPassword2: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount(){
        
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    };
    render(){
        return (
            <div className="account_main_password">
                <div className="account_main_password_header">
                    <h4>password</h4>
                </div>
                <form>
                    <div>
                        <label for="oldPassword">Current password</label><br />
                        <input type="password" id="oldPassword" value={this.state.oldPassword} onChange={this.handleInputChange} />
                    </div>
    
                    <div>
                        <label for="newPassword1">New password</label><br />
                        <input type="text" id="newPassword1" value={this.state.newPassword1} onChange={this.handleInputChange} />
                    </div>
    
                    <div>
                        <label for="newPassword2">Repeat password</label><br />
                        <input type="text" id="newPassword2" value={this.state.newPassword2} onChange={this.handleInputChange} />
                    </div>
    
                    <button type="submit">Update password</button>
                </form>
            </div>
        )
    }
}
export default Password;
// function Password(props) {
//     const {
//         oldPassword,
//         newPassword1,
//         newPassword2,
//         handleInputChange,
//         } = props;
//     return (
//         <div className="account_main_password">
//             <div className="account_main_password_header">
//                 <h4>password</h4>
//             </div>
//             <form>
//                 <div>
//                     <label for="oldPassword">Current password</label><br />
//                     <input type="password" id="oldPassword" value={oldPassword} onChange={handleInputChange} />
//                 </div>

//                 <div>
//                     <label for="newPassword1">New password</label><br />
//                     <input type="text" id="newPassword1" value={newPassword1} onChange={handleInputChange} />
//                 </div>

//                 <div>
//                     <label for="newPassword2">Repeat password</label><br />
//                     <input type="text" id="newPassword2" value={newPassword2} onChange={handleInputChange} />
//                 </div>

//                 <button type="submit">Update password</button>
//             </form>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//       oldPassword: state.private.oldPassword,
//       newPassword1: state.private.newPassword1,
//       newPassword2: state.private.newPassword2,
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         handleInputChange(e){
//         dispatch(actionCreators.changeInput(e))
//         },

//         handleSubmit(e){
//         dispatch(actionCreators.handleSubmit(e))
//         }
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Password);
