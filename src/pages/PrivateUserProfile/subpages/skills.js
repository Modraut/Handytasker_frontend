import React from 'react';
// import { connect } from "react-redux";
import { actionCreators } from '../../../store/user/index';
import axios from 'axios';
import './skills.scss';
import store from '../../../store/index';
// import { getCurrentID } from '../../../../Util';

class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            howToTravel: [],
            languages: "",
            qualifications: "",
            workExperience: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.updateTravel = this.updateTravel.bind(this);
    }
    updateData = (event) => {
        event.preventDefault();
        // const userID = getCurrentID();
        const userID = "randomName";
        const userData = this.state;
        console.log(userData)
        axios.put("http://localhost:8080/userinfos/" + userID, userData).then(

        )
    }
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

    updateCategory(e) {
        if (this.state.categories.indexOf(e.target.value) === -1) {
            this.setState({
                categories: [...this.state.categories, e.target.value]
            })
        } else {
            var newList = this.state.categories.filter((item) => {
                return item !== e.target.value
            })
            this.setState({
                categories: newList
            })
        }
    }
    updateTravel(e) {
        if (this.state.howToTravel.indexOf(e.target.value) === -1) {
            this.setState({
                howToTravel: [...this.state.howToTravel, e.target.value]
            })
        } else {
            var newList = this.state.howToTravel.filter((item) => {
                return item !== e.target.value
            })
            this.setState({
                howToTravel: newList
            })
        }
    }

    render() {
        // const {
        //     skillset,
        //     howToTravel,
        //     languages,
        //     qualifications,
        //     workExperience,
        //     handleInputChange,
        //     updateSkillset,
        //     updateTravel
        // } = this.props;

        return (
            <div className="account_main_skills">
                <div className="account_main_skills_header">
                    <h4>Skills</h4>
                    <div>Your skills IS 74% complete</div><br />
                    <div><div></div></div>
                </div>
                <form onSubmit={this.updateData}>
                    <h5>These are your skills. Keep them updated with any new skills you learn so other members can know what you can offer.</h5>

                    <div className="account_main_skills_body_checkbox">What is your skill set?<br />
                        <div>
                            <input type="checkbox" value="clearning" checked={this.state.categories.indexOf("clearning") !== -1 ? "checked" : ""} onChange={this.updateCategory} /><span>Clearning</span>
                            <input type="checkbox" value="deliveryAndRemovals" checked={this.state.categories.indexOf("deliveryAndRemovals") !== -1 ? "checked" : ""} onChange={this.updateCategory} /><span>Delivery & removals</span>
                            <input type="checkbox" value="furnitureAssembly" checked={this.state.categories.indexOf("furnitureAssembly") !== -1 ? "checked" : ""} onChange={this.updateCategory} /><span>Furniture Assembly</span>
                            <input type="checkbox" value="Handyman" checked={this.state.categories.indexOf("Handyman") !== -1 ? "checked" : ""} onChange={this.updateCategory} /> <span>Handyman</span>
                        </div>
                        <div>
                            <input type="checkbox" value="marketingAndDesign" checked={this.state.categories.indexOf("marketingAndDesign") !== -1 ? "checked" : ""} onChange={this.updateCategory} /><span>Marketing & Design</span>
                            <input type="checkbox" value="homeAndGardening" checked={this.state.categories.indexOf("homeAndGardening") !== -1 ? "checked" : ""} onChange={this.updateCategory} /><span>Home & Gardening</span>
                            <input type="checkbox" value="anything" checked={this.state.categories.indexOf("anything") !== -1 ? "checked" : ""} onChange={this.updateCategory} /><span>Anything</span>
                        </div>
                    </div>

                    <div className="account_main_skills_body_checkbox">How do you get around?<br />
                        <div>
                            <input type="checkbox" value="bicycle" checked={this.state.howToTravel.indexOf("bicycle") !== -1 ? "checked" : ""} onChange={this.updateTravel} /><span>Bicycle</span>
                            <input type="checkbox" value="car" checked={this.state.howToTravel.indexOf("car") !== -1 ? "checked" : ""} onChange={this.updateTravel} /><span>Car</span>
                            <input type="checkbox" value="online" checked={this.state.howToTravel.indexOf("online") !== -1 ? "checked" : ""} onChange={this.updateTravel} /><span>Online</span>
                            <input type="checkbox" value="scooter" checked={this.state.howToTravel.indexOf("scooter") !== -1 ? "checked" : ""} onChange={this.updateTravel} /><span>Scooter</span>
                            <input type="checkbox" value="truck" checked={this.state.howToTravel.indexOf("truck") !== -1 ? "checked" : ""} onChange={this.updateTravel} /><span>Truck</span>
                            <input type="checkbox" value="walker" checked={this.state.howToTravel.indexOf("walker") !== -1 ? "checked" : ""} onChange={this.updateTravel} /><span>Walker</span>
                        </div>

                    </div><br />
                    <div>
                        <label for="languages">What languages can you speak/write?</label><br />
                        <input type="text" id="languages" value={this.state.languages} onChange={this.handleInputChange} placeholder="e.g. English and French" />
                    </div>

                    <div>
                        <label for="qualifications">What qualifications have you got?</label><br />
                        <input type="text" id="qualifications" value={this.state.qualifications} onChange={this.handleInputChange} placeholder="e.g. Higher School Certificate (HSC), Accredited Barista" />
                    </div>

                    <div>
                        <label for="workExperience">What's your work experience?</label><br />
                        <input type="text" id="workExperience" value={this.state.workExperience} onChange={this.handleInputChange} placeholder="e.g. 3 years as a Barista at The Cafe" />
                    </div>

                    <button type="submit">Save skills</button>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         skillset: state.private.skillset,
//         howToTravel: state.private.howToTravel,
//         languages: state.private.languages,
//         qualifications: state.private.qualifications,
//         workExperience: state.private.workExperience,
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         handleInputChange(e) {
//             dispatch(actionCreators.changeInput(e));
//         },

//         updateSkillset(e) {
//             dispatch(actionCreators.updateList(e, "skillset"));
//         },

//         updateTravel(e) {
//             dispatch(actionCreators.updateList(e, "howToTravel"));
//         },

//         handleSubmit(e) {
//             dispatch(actionCreators.handleSubmit(e))
//         }
//     };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Skills);
export default Skills;