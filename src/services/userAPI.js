import axios from 'axios';
// import { makeUserMocker } from './mockAxios';
// import { postData as jwtPostData } from '../Util';

const BACKEND_URL = "http://localhost:8080";
const userDetailsURL = BACKEND_URL + "/userinfos";
const userCredentialsURL = BACKEND_URL + "/users";
const userAvatarURL = BACKEND_URL + "/userinfos/avatar/";

const userAPI = {

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
      return res.data.token;
    } catch(e){
      console.log(e);
    }
  }
}

export default userAPI;
export { userAPI };