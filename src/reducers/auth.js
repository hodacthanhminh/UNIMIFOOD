import * as actionType from '../actions/type';

const initialState = {
  isAuthenticated: false,
  authTokens: localStorage.getItem('authTokens'),
  user: {},
  isLoadingAccount: false,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.ACCOUNT_LOGIN_SUCCESS:
      localStorage.setItem('authTokens', JSON.stringify(payload));
      return {
        ...state,
        isAuthenticated: true,
        authTokens: payload,
        isLoadingAccount: true,
      };
    case actionType.ACCOUNT_AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionType.ACCOUNT_LOAD_PROFILE:
      return {
        ...state,
        isLoadingAccount: true,
      };
    case actionType.ACCOUNT_LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        isLoadingAccount: false,
        user: payload.user,
      };
    case actionType.ACCOUNT_LOGIN_FAIL:
    case actionType.ACCOUNT_LOGOUT:
    case actionType.ACCOUNT_AUTHENTICATION_FAILED:
      localStorage.removeItem('authTokens');
      return {
        ...state,
        isLoadingAccount: false,
        isAuthenticated: false,
        authTokens: null,
        user: {},
      };
    default:
      return state;
  }
};

export default auth;
