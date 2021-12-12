import * as type from './type';
import { openNoti } from './notification';
import orderApi from '../api/orderApi';

export const CreatingOrder = () => async (dispatch) =>
  dispatch({
    type: type.STORE_ID_ORDER_CREATE,
  });

export const CreateOrder = (formData) => async (dispatch) => {
  dispatch(CreatingOrder);
  try {
    const res = await orderApi.createOrder(formData);
    if (res.status === 'Error') {
      openNoti('error', 'Create order', 'Create order');

      dispatch({
        type: type.STORE_ID_ORDER_CREATE_FAILED,
      });
    } else {
      openNoti('success', 'Create order', 'Create order success');
      dispatch({
        type: type.STORE_ID_ORDER_CREATE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    if (error.response) {
      openNoti('error', 'Create order', 'Create order error');
      dispatch({
        type: type.STORE_ID_ORDER_CREATE_FAILED,
      });
    }
  }
};
