import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    user: '',
    location: ''
});
export default (state = defaultState,action) => {
    switch (action.type){
        // case(actionTypes.LOAD_USER):
        //     return action.data
        default: return state;
    }
}