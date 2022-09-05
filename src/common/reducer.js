import { SET_USEREMAIL, SET_TOKEN } from './constant';

const INITIAL_STATE = {
  userEmail: 'Defualt One',
  token: null,
  loading: true,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USEREMAIL:
      return {
        ...state,
        userEmail: action.userEmail,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
export default reducer;