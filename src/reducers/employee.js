import * as actionType from '../actions/type';

const initialState = {
  employeeInfo: {},
  employeeStore: {},
  isLoading: true,
  isError: false,
};

const employee = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.EMPLOYEE_LOAD_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.EMPLOYEE_LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        employeeInfo: payload?.employee,
        employeeStore: payload?.employee?.store,
      };
    case actionType.EMPLOYEE_CREATE_STORE_FAILED:
    case actionType.EMPLOYEE_LOAD_PROFILE_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        employeeInfo: {},
        employeeStore: {},
      };
    case actionType.EMPLOYEE_CREATE_STORE_SUCCESS:
      return {
        ...state,
        employeeStore: payload.store,
      };
    default:
      return state;
  }
};

export default employee;
