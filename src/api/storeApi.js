import axiosClient from './axiosClient';

const storeApi = {
  storeGetList: () => {
    const url = '/store';
    return axiosClient.get(url);
  },
};

export default storeApi;
