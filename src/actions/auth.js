import * as type from './type';
import accountApi from '../api/accountApi';

export const Logout = () => (dispatch) =>
  dispatch({
    type: type.ACCOUNT_LOGOUT,
  });

export const LoadUser = () => async (dispatch) => {
  try {
    const res = await accountApi.getSelf();
    if (res.status === 'Error') {
      dispatch({ type: type.ACCOUNT_LOAD_PROFILE_FAILED });
    } else {
      dispatch({
        type: type.ACCOUNT_AUTHENTICATION_SUCCESS,
      });
      dispatch({
        type: type.ACCOUNT_LOAD_PROFILE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({ type: type.ACCOUNT_AUTHENTICATION_FAILED });
  }
};

export const Login = (params) => async (dispatch) => {
  try {
    const res = await accountApi.accountLogin(params);
    if (res.status === 'Error') {
      dispatch({
        type: type.ACCOUNT_LOGIN_FAIL,
      });
    } else {
      dispatch({
        type: type.ACCOUNT_LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(LoadUser());
    }
  } catch (error) {
    dispatch({
      type: type.ACCOUNT_LOGIN_FAIL,
    });
  }
};

export const Register = (formData) => async (dispatch) => {
  try {
    const res = await accountApi.accountRegister(formData);
    if (res.status === 'Error') {
      dispatch({
        type: type.ACCOUNT_REGISTERED_FAILED,
      });
    } else {
      dispatch({ type: type.ACCOUNT_REGISTERED_SUCCESS });
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      dispatch({
        type: type.ACCOUNT_REGISTERED_FAILED,
      });
    }
  }
};

export const UpdateAccount = (formData, id) => async (dispatch) => {
  try {
    console.log(formData, id);
    const res = await accountApi.accountUpdate(formData, id);
    if (res.status === 'Error') {
      dispatch({
        type: type.ACCOUNT_UPDATE_FAILED,
      });
    } else {
      dispatch({
        type: type.ACCOUNT_UPDATE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      dispatch({
        type: type.ACCOUNT_UPDATE_FAILED,
      });
    }
  }
};
