import * as actionTypes from './actionTypes';
import { fromJS} from 'immutable';

const defaultState = fromJS({
    login: false,
    avatar: '',
    profileImage: '',
    firstName: '',
    lastName: '',
    tagline: '',
    location: '',
    emailForContact: '',
    birthday: '',
    abn: '',
    description: '',
    postTasks: '',
    earnMoney: '',
    mobile: '',
    // **************** Skills
    goodAt: '',
    howToTravel: [],
    languages: '',
    qualifications: '',
    workExperience: '',
    // ****************
});
export default (state = defaultState,action) => {
    switch (action.type){
        case(actionTypes.LOAD_USER):
            return action.data
        default: return state;
    }
}