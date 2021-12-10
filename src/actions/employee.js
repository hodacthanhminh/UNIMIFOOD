import * as type from './type';
import employeeApi from '../api/employeeApi';

export const LoadingEmployee = (dispatch) =>
  dispatch({
    type: type.EMPLOYEE_LOAD_PROFILE,
  });

export const LoadEmployee = () => async (dispatch) => {
  dispatch(LoadingEmployee);
  try {
    const res = await employeeApi.getSelf();
    if (res.status === 'Error') {
      dispatch({ type: type.EMPLOYEE_LOAD_PROFILE_FAILED });
    } else {
      dispatch({
        type: type.EMPLOYEE_LOAD_PROFILE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({ type: type.EMPLOYEE_LOAD_PROFILE_FAILED });
  }
};

export const CreateNewStore = (form) => async (dispatch) => {
  try {
    const res = await employeeApi.createStore(form);
    if (res.status === 'Error') {
      dispatch({ type: type.EMPLOYEE_CREATE_STORE_FAILED });
    } else {
      dispatch({
        type: type.EMPLOYEE_CREATE_STORE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({ type: type.EMPLOYEE_CREATE_STORE_FAILED });
  }
};
