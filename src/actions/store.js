import * as type from './type';
import storeApi from '../api/storeApi';

export const loadStoreView = () => (dispatch) =>
  dispatch({ type: type.STORE_VIEW_LOAD });

export const loadStore = () => (dispatch) =>
  dispatch({ type: type.STORE_LOAD });

export const storeSelectCategory = (listStore) => (dispatch) => {
  dispatch(loadStoreView());
  setTimeout(() => {
    dispatch({
      type: type.STORE_VIEW_LOAD_SUCCESS,
      payload: listStore,
    });
  }, 300);
};

export const loadStoreList = () => async (dispatch) => {
  loadStore();
  const store = await storeApi.storeGetList();
  dispatch({ type: type.STORE_LOAD_SUCCESS, payload: store.data });
};

export const loadStoreByID = () => (dispatch) =>
  dispatch({
    type: type.STORE_ID_LOAD,
  });

export const storeByID = (storeId) => async (dispatch) => {
  dispatch(loadStoreByID());
  try {
    const res = await storeApi.getStoreByID(storeId);
    if (res.status === 'Error') {
      dispatch({
        type: type.STORE_ID_LOAD_FAILED,
      });
    } else {
      setTimeout(() => {
        dispatch({
          type: type.STORE_ID_LOAD_SUCCESS,
          payload: res.data,
        });
      }, 300);
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      dispatch({
        type: type.STORE_ID_LOAD_FAILED,
      });
    }
  }
};

export const AddCart = (item) => (dispatch) =>
  dispatch({
    type: type.STORE_ID_ADD_CART,
    payload: item,
  });

export const RemoveCart = (item) => (dispatch) =>
  dispatch({
    type: type.STORE_ID_REMOVE_CART,
    payload: item,
  });
