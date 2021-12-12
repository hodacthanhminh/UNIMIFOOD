import * as type from './type';
import { loadRole, clearRole } from './role';
import { ClearStoreControl } from './storecontrol';
import accountApi from '../api/accountApi';
import { openNoti } from './notification';

export const Logout = () => (dispatch) => {
  dispatch({
    type: type.ACCOUNT_LOGOUT,
  });
  dispatch(clearRole);
  dispatch(ClearStoreControl);
};

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
      dispatch(
        loadRole(
          res.data.user.account_role,
          res.data.user.account_role_info,
        ),
      );
    }
  } catch (error) {
    dispatch({ type: type.ACCOUNT_AUTHENTICATION_FAILED });
  }
};

export const Login = (params) => async (dispatch) => {
  try {
    const res = await accountApi.accountLogin(params);
    if (res.status === 'Error') {
      openNoti('error', 'Login', 'Login Fail');
      dispatch({
        type: type.ACCOUNT_LOGIN_FAIL,
      });
    } else {
      openNoti('success', 'Login', 'Login Success');
      dispatch({
        type: type.ACCOUNT_LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(LoadUser());
    }
  } catch (error) {
    openNoti('error', 'Login', 'Login Fail');
    dispatch({
      type: type.ACCOUNT_LOGIN_FAIL,
    });
  }
};

export const Register = (formData) => async (dispatch) => {
  try {
    const res = await accountApi.accountRegister(formData);
    if (res.status === 'Error') {
      openNoti(
        'error',
        'Register',
        'Register Fail - Password must have Capital and number/Email have been used',
      );
      dispatch({
        type: type.ACCOUNT_REGISTERED_FAILED,
      });
    } else {
      openNoti('success', 'Register', 'Register Success');
      dispatch({ type: type.ACCOUNT_REGISTERED_SUCCESS });
    }
  } catch (error) {
    if (error.response) {
      openNoti(
        'error',
        'Register',
        'Register Fail - Password must have Capital and number/Email have been used',
      );
      dispatch({
        type: type.ACCOUNT_REGISTERED_FAILED,
      });
    }
  }
};

export const UpdateAccount = (formData, id) => async (dispatch) => {
  try {
    const res = await accountApi.accountUpdate(formData, id);
    if (res.status === 'Error') {
      openNoti('error', 'Update Account', 'Update account error');

      dispatch({
        type: type.ACCOUNT_UPDATE_FAILED,
      });
    } else {
      openNoti('success', 'Update Account', 'Update account success');
      dispatch({
        type: type.ACCOUNT_UPDATE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    if (error.response) {
      openNoti('error', 'Update Account', 'Update account error');
      dispatch({
        type: type.ACCOUNT_UPDATE_FAILED,
      });
    }
  }
};
