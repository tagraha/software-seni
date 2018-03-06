// https://github.com/erikras/ducks-modular-redux

import axios from 'axios';
export const SEARCH_USER_REQUEST = 'githubusers/SEARCH_USER_REQUEST';
export const SEARCH_USER_SUCCESS = 'githubusers/SEARCH_USER_SUCCESS';
export const SEARCH_USER_ERROR = 'githubusers/SEARCH_USER_ERROR';

export const FETCH_USER_REPOS = 'githubusers/FETCH_USER_REPOS';
export const FETCH_USER_REPOS_ERROR = 'githubusers/FETCH_USER_REPOS_ERROR';

const initialState = {
  users: [],
  userDetail: {},
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
    case SEARCH_USER_SUCCESS: {
      return {
        ...state,
        users: action.payload.items,
        isRequesting: false
      }
    }
    case SEARCH_USER_ERROR: {
      return {
        ...state,
        users: [],
        isRequesting: false
      }
    }
    case FETCH_USER_REPOS: {
      return {
        ...state,

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

export const fetchUserRepos = (slug) => {
  return dispatch => {
  axios.get(`https://api.github.com/users/${slug}/repos`)
    .then(res => {
      dispatch({
        type: FETCH_USER_REPOS,
        payload:res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USER_REPOS_ERROR
      });
    });
  }
}