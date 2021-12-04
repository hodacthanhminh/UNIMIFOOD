import * as actionType from '../actions/type';

const initialState = {
  isLoading: true,
  isError: false,
  storeDataList: [],
};

const storedata = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.STORE_LOAD:
      return {
        ...state,
        isLoading: true,
        storeDataList: [],
      };
    case actionType.STORE_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        storeDataList: payload.stores,
        isError: false,
      };
    case actionType.STORE_LOAD_FAILED:
      return {
        ...state,
        isLoading: false,
        storeDataList: [],
        isError: true,
      };
    default:
      return { ...state };
  }
};

export default storedata;
