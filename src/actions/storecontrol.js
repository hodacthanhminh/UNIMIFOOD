import * as type from './type';
import storeApi from '../api/storeApi';
import menuApi from '../api/menuApi';

export const ClearStoreControl = (dispatch) =>
  dispatch({
    type: type.STORE_CONTROLL_CLEAR_ALL,
  });

export const StoreLoading = () => async (dispatch) =>
  dispatch({
    type: type.STORE_CONTROL_LOAD_STORE,
  });
export const MenuLoading = () => async (dispatch) =>
  dispatch({
    type: type.STORE_CONTROL_LOAD_MENU,
  });

export const LoadStore = (id) => async (dispatch) => {
  dispatch(StoreLoading);
  try {
    const res = await storeApi.getStoreByID(id);
    if (res.status === 'Error') {
      dispatch({
        type: type.STORE_CONTROL_LOAD_STORE_FAILED,
      });
    } else {
      dispatch({
        type: type.STORE_CONTROL_LOAD_STORE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: type.STORE_CONTROL_LOAD_STORE_FAILED,
    });
  }
};

export const UpdateStore =
  (formData, storeid) => async (dispatch) => {
    try {
      const res = await storeApi.updateStore(formData, storeid);
      if (res.status === 'Error') {
        dispatch({ type: type.STORE_CONTROL_UPDATE_STORE_FAILED });
      } else {
        dispatch({
          type: type.STORE_CONTROL_UPDATE_STORE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({ type: type.STORE_CONTROL_UPDATE_STORE_FAILED });
    }
  };

export const CreateMenu = (formData) => async (dispatch) => {
  dispatch(MenuLoading);
  try {
    const res = await menuApi.createMenu(formData);
    if (res.status === 'Error') {
      dispatch({ type: type.STORE_CONTROL_CREATE_MENU_FAILED });
    } else {
      dispatch({
        type: type.STORE_CONTROL_CREATE_MENU_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({ type: type.STORE_CONTROL_CREATE_MENU_FAILED });
  }
};

export const UpdateMenu = (formData, id) => async (dispatch) => {
  dispatch(MenuLoading);
  try {
    const res = await menuApi.updateMenu(formData, id);
    if (res.status === 'Error') {
      dispatch({ type: type.STORE_CONTROL_UPDATE_MENU_FAILED });
    } else {
      dispatch({
        type: type.STORE_CONTROL_UPDATE_MENU_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({ type: type.STORE_CONTROL_UPDATE_MENU_FAILED });
  }
};

export const UpdateItem = (formData, id) => async (dispatch) => {
  dispatch(MenuLoading);
  try {
    const res = await menuApi.updateItem(formData, id);
    if (res.status === 'Error') {
      dispatch({ type: type.STORE_CONTROL_UPDATE_ITEM_FAILED });
    } else {
      dispatch({
        type: type.STORE_CONTROL_UPDATE_ITEM_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({ type: type.STORE_CONTROL_UPDATE_ITEM_FAILED });
  }
};
