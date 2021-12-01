import * as actionType from '../actions/type';

const initialState = {
  isLoading: true,
  isError: false,
  storeList: [],
};

const storeview = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.STORE_VIEW_LOAD:
      return {
        ...state,
        isLoading: true,
        storeList: [],
      };
    case actionType.STORE_VIEW_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        storeList: payload,
        isError: false,
      };
    case actionType.STORE_VIEW_LOAD_FAILED:
      return {
        ...state,
        isLoading: false,
        storeList: [],
        isError: true,
      };
    default:
      return { ...state };
  }
};

export default storeview;
