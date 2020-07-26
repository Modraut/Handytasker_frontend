import axios from 'axios';
// import { makeUserMocker } from './mockAxios';
import { BACKEND_URL } from '../common/common'
import { postData as jwtPostData } from '../Util';

// const mockBackendurl = 'backendurl';
const userDetailsURL = BACKEND_URL + "/userinfos";
const userCredentialsURL = BACKEND_URL + "/users";
const userAvatarURL = BACKEND_URL + "/userinfos/avatar/";

const userAPI = {
  /** 
   * @todo 
   * need to change this function with no mock.
   * should add other filters as well.
   * can be implemented just like to taskAPI.
   * @description search users with such category in skills
   * 
   */
  fetchUsersInfo: async (filter = { categories: "" }) => {

    try {
      let url = userDetailsURL
      if (filter.categories !== '' && filter.categories !== undefined) {
        url += '/category/' + encodeURI(filter.categories);
      }
      //console.log(url)
      let res = await axios.get(url);
      //console.log(res)


      return res.data;
    }

    catch (e) {
      // //console.log(e)
    }
  },

  /**
   * @description
   * takes newUser and fire post request to create new user.
   * return res.data from axios
   * only register email and passwords
   */
  createUser: async (newUser) => {
    // //console.log(JSON.stringify(newUser));
    // //console.log(JSON.stringify(backendurl));
    try {
      let res = await axios.post(userCredentialsURL, newUser);
      return res.data
    } catch (e) {
      //console.log(e)
      throw e;
    }
  },

  /**
   * @descriptoin
   * user log in with email and password.
   * returns an error if login fail.
   */
  login: async (credentials) => {
    let url = userCredentialsURL + '/login';
    let res;
    try {
      res = await jwtPostData(url, credentials);
      // console.log(res);
      return res.data
    }
    catch (e) {
      // if (e.message === 'Request failed with status code 401') 
      // console.log(JSON.stringify(e.message));
      throw e;
    }
  },

  /**
   * @todo can combine create and update in same function
   * @description 
   * create 1 document of user detail
   *
   */
  createDetail: async (user) => {
    let res;
    try {
      res = await jwtPostData(userDetailsURL, user);
      // console.log(res);
      return res.data
    }
    catch (e) {
      // if (e.message === 'Request failed with status code 401')
      //   console.log(JSON.stringify(e.message));
      throw e;
    }
  },
  uploadAvatar: async (params) => {
    // const object = {};
    // params.forEach((value, key) => {
    // 	object[key] = value;
    // });
    // console.log(object)
    try {
      let res = await axios.post(userAvatarURL, params, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      return BACKEND_URL + '/' + res.data;
    } catch (e) {
      //console.log(e)
      throw e;
    }
  },
  /** 
   * @description 
   * fetch 1 document of user details from uerInfo with given user id 
   */
  fetchUserInfo: async (basicId) => {
    // console.log(id);
    let res;
    let url = userDetailsURL + '/' + basicId;
    //console.log(url);
    try {
      res = await axios.get(url);
      //console.log(res);
      return res.data
    }
    catch (e) {
      // if (e.message === 'Request failed with status code 401')
      //   console.log(JSON.stringify(e.message));
      throw e;
    }
  }
}

export default userAPI;
export { userAPI };