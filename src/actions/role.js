import * as type from './type';

export const loadRole = (role, roleInfo) => (dispatch) => {
  const typeDispatch =
    role === 'customer'
      ? type.ROLE_LOAD_CUSTOMER
      : type.ROLE_LOAD_EMPLOYEE;
  console.log(typeDispatch);
  return dispatch({
    type: typeDispatch,
    payload: roleInfo,
  });
};

export const clearRole = (dispatch) =>
  dispatch({ type: type.ROLE_CLEAR_ALL });
