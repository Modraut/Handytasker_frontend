import axios from 'axios';
// import { makeUserMocker } from './mockAxios';
// import { postData as jwtPostData } from '../Util';


// this part can be moved to .env?
const BACKEND_URL = "http://localhost:8080";
const userInfoURL = BACKEND_URL + "/userinfo";
const userCredentialsURL = BACKEND_URL + "/user";
const userAvatarURL = BACKEND_URL + "/userinfos/avatar/";

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
  @param: none, get jwt from localStorage to fetch userInfo from backend
  @return: userInfo at res.data for private use
  */
  loadUserWithJwt: async ()=>{
    if(!window.localStorage){
      return false
    }else{
      try{
        const res = await axios.post(userInfoURL, {},
          { headers: { Authorization: "Bearer" + window.localStorage.getItem('jwtToken') } }
        )
        return res.data;
      } catch(e){
        console.log(e);
      }
    }
  }
}

export default userAPI;
export { userAPI };