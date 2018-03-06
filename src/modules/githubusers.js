// https://github.com/erikras/ducks-modular-redux

import axios from 'axios';
export const SEARCH_USER_REQUEST = 'githubusers/SEARCH_USER_REQUEST';
export const SEARCH_USER_SUCCESS = 'githubusers/SEARCH_USER_SUCCESS';
export const SEARCH_USER_ERROR = 'githubusers/SEARCH_USER_ERROR';

const initialState = {
  users: [],
  isRequesting: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER_REQUEST: {
      return {
        ...state,
        isRequesting: true
      }
    }
    default: {
      return state;
    }
  }
};

export const searchUserReq = (keyword) => {
  return dispatch => {
    dispatch({
      type: SEARCH_USER_REQUEST
    });

    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => {
        dispatch({
          type: SEARCH_USER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: SEARCH_USER_ERROR
        });
      })
  }
}
