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
    case actionType.ACCOUNT_UPDATE_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const newUser = { ...state.user, ...payload.user };
      return {
        ...state,
        isLoadingAccount: false,
        user: newUser,
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
    case actionType.ACCOUNT_UPDATE_FAILED:
      return state;
    default:
      return state;
  }
};

export default auth;
