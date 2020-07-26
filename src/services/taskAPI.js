import axios from 'axios';
import { BACKEND_URL } from '../common/common'
import { postData, putData, deleteData } from '../Util'
const backendurl = BACKEND_URL + "/tasks";


const taskAPI = {
  /**
    * @description 
    * fatch all tasks
    */
  fetchTasks: async () => {
    try {
      let res = await axios.get(backendurl);
      return res.data;
    }
    catch (e) {
      //console.log(e)
      // window.localStorage.removeItem(token);
    }
  },

  /**
   * @description 
   * perform exact serch in category and  regex search with title. 
   * if no filter is provided then fatch all tasks
   * @param
   * example \{ category: 'Anything', title: '' }
   *  params are optional
   */
  fetchTasksByFilter: async ({ category, title }) => {

    try {

      let url = backendurl;
      if (category !== '' && category !== 'Anything' && category !== undefined) {
        url += '/category/' + encodeURI(category);
      }
      if (title !== '' && title !== undefined) {
        url += '/title/' + encodeURI(title);
      }
      // console.log(url)
      let res = await axios.get(url);

      return res.data;
    }

    catch (e) {
      // //console.log(e)
    }
  },

  /**
  * @description 
  * fetch task by id
  */
  fetchTaskByID: async (id) => {

    //console.log(id);

    try {
      let url = backendurl + id;

      //console.log(url)
      let res = await axios.get(url);
      //console.log(res)

      return res.data;
    }

    catch (e) {
      //console.log(e)
    }
  },

  /**
  * @description 
  * fetch task by id
  */
  fetchTasksByUserID: async (id) => {

    //console.log(id);

    try {
      let url = backendurl + '/user/' + id;

      // console.log(url)
      let res = await axios.get(url);
      // console.log(res)



      return res.data;
    }

    catch (e) {
      //console.log(e)
    }
  },


  createTask: async (newTask) => {

    try {
      let url = backendurl;
      let res = await postData(url, newTask);
      return res.data;
    }

    catch (e) {
      //console.log(e)
      throw e;
    }
  },

  updateTask: async (task) => {

    try {
      let url = backendurl + '/' + task._id;
      let res = await putData(url, task);
      return res.data;
    }

    catch (e) {
      //console.log(e)
      throw e;
    }
  },



  deleteTask: async (task) => {

    try {
      let url = backendurl + '/' + task._id;
      console.log(url)
      let res = await deleteData(url);
      return res.data;
    }

    catch (e) {
      //console.log(e)
      throw e;
    }
  }

}
export default taskAPI;


