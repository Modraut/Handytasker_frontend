// move this line to environment later
export const BACKEND_URL = 'http://localhost:8080';

export function isObjectEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

/**
 * @description 
 * an function which supports getting params from RESTFUL url.
 * @param string a concatinated url where the baseURL has been removed.
 * @return Object< key:value >
 * @example 
 * given category/Anything/title/handytitle/aaa/bbb
 * will return  
 * {'category':'Anything',
 * 'title':'handytitle',
 * 'aaa':'bbb'}
 */
export const getParamsFromURLNew = (string) => {
  if (string === '') return {};
  let paramsPairs = string.match(/[^\/]+\/[^\/]+/g);
  if (!paramsPairs) return {};
  let params = {};
  paramsPairs.map(
    (pair) => {
      let a = pair.split('/');
      //console.log(a);
      params[`${a[0]}`] = decodeURI(a[1])
    }
  )
  return params;
}

/**
 * @description get params from old fashion urls with ?a=b&c=d structure
 * 
 * @param {*} url preprocessed url with structure of  a=b&c=d   only
 * @return Object< key:value >
 */
export function getParamsFromURLOld(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}


/**
 * @description get path without the last /*
 * 
 * @return url String with no origin. eg. /home
 */
export function getReturnPath() {
  let path = document.location.href;
  let fullReturnPath = path.replace(/\/[^/]*$/, "");//trim the last /... 
  let returnPath = fullReturnPath.replace(document.location.origin, "");
  if (returnPath === '') { returnPath = "/"; }
  return returnPath;
}

/**
 * @description get path without the last /*
 * 
 * @return url String with origin. eg. http://localhost/home
 */
export function getFullReturnPath() {
  let path = document.location.href;
  let fullReturnPath = path.replace(/\/[^/]*$/, "");//trim the last /... 
  return fullReturnPath;
}