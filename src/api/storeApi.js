import axiosClient from './axiosClient';

const storeApi = {
  storeGetList: () => {
    const url = '/store';
    return axiosClient.get(url);
  },
  getStoreByID: (storeId) => {
    const url = `/store/${storeId}`;
    return axiosClient.get(url);
  },
};

export default storeApi;
