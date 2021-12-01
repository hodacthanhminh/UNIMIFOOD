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
