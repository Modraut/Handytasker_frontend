import axios from 'axios';
// import { makeUserMocker } from './mockAxios';
// import { postData as jwtPostData } from '../Util';
const token = window.localStorage.getItem('jwtToken');
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// this part can be moved to .env?
const BACKEND_URL = "http://localhost:8080";
const userInfoURL = BACKEND_URL + "/userinfo";
const userCredentialsURL = BACKEND_URL + "/user";
const userAvatarURL = BACKEND_URL + "/userinfo/avatar/";

const userAPI = {
  /*
  @param { email,password }
  @return jwt token at res.data.token
  */
  // need to add login with jwt
  login: async (userCredential)=>{
    const url = userCredentialsURL + '/login';
    try{
      const res = await axios.post(url, userCredential);
      return res.data;
    } catch(e){
      console.log(e);
    }
  },
  /*
  @param { email,password }
  @return jwt token at res.data.token
  */
  signUp: async (userCredential)=>{
    const url = userCredentialsURL + "/sign-up";
    try{
      const res = await axios.post(url, userCredential);
      return res.data;
    } catch(e){
      console.log(e);
    }
  },
  /*
  @description: load userinfo after login
  @param: no, default headers with jwt token for axios has been set under userAPI.js
  @return: try => res - use res.data to get user info and res.status to get response status
          catch => e.response - use e.response.status to get error status
  */
  loadUserWithJwt: async ()=>{
    try{
      const res = await axios.get(userInfoURL);
      return res;
    } catch(e){
      return e.response
    }
  }
}

export default userAPI;
export { userAPI };