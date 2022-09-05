import {SET_USEREMAIL, SET_TOKEN} from './constant';

export function setUserEmail(userEmail) {
  return {
    type: SET_USEREMAIL,
    userEmail,
  };
}
export function setTokenAction(payload) {
  return {
    type: SET_TOKEN,
    payload,
  };
}
