// libs
import { combineReducers } from 'redux';
import auth from './auth';
import storeview from './storeview';
import storedata from './storedata';

export default combineReducers({ auth, storeview, storedata });
