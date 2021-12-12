import axiosClient from './axiosClient';

const employeeApi = {
  getSelf: () => {
    const url = '/employee';
    return axiosClient.get(url);
  },
  createStore: (params) => {
    const url = '/store';
    return axiosClient.post(url, params);
  },
};

export default employeeApi;
