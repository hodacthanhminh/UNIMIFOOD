import axiosClient from './axiosClient';

const orderApi = {
  createOrder: (params) => {
    const url = '/order';
    return axiosClient.post(url, params);
  },
};

export default orderApi;
