// libs
import { combineReducers } from 'redux';
import auth from './auth';
import storeview from './storeview';
import storedata from './storedata';
import storeid from './storeid';
import role from './role';

export default combineReducers({
  auth,
  storeview,
  storedata,
  storeid,
  role,
});
