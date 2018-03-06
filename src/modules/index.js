import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import githubusers from './githubusers';

export default combineReducers({
  router: routerReducer,
  githubusers
});
