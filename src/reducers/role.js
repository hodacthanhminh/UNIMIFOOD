import * as actionType from '../actions/type';

const initialState = {
  employee: {},
  customer: {},
};

const role = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.ROLE_LOAD_EMPLOYEE:
      return {
        ...state,
        employee: payload,
      };
    case actionType.ROLE_LOAD_CUSTOMER:
      return {
        ...state,
        customer: payload,
      };
    case actionType.ROLE_CLEAR_ALL:
      return {
        ...state,
        customer: {},
        employee: {},
      };
    default:
      return state;
  }
};

export default role;
