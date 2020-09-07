import {actionTypes} from './index';
import axios from 'axios';
import {fromJS} from 'immutable';
import { userAPI } from '../../services/userAPI'


const setUserInfo = (data) => {
  data.login = true;
  return  {
    type: actionTypes.LOAD_USER,
    data
  }
}

// default headers with jwt token for axios has been set under userAPI.js
export const loadUser = () =>{
  return async (dispatch) => {
    userAPI.loadUserWithJwt().then(res => {
      console.log(res);
      res.status===200 && dispatch(setUserInfo(res.data));
      res.status===401 && console.log('Invalid jwt token');
    })
  }
};

