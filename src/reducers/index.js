import { combineReducers } from 'redux';
import appReducer from './appReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  app: appReducer,
  users: usersReducer
})