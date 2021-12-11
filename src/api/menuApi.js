import axiosClient from './axiosClient';

const menuApi = {
  createMenu: (params) => {
    const url = '/menu';
    return axiosClient.post(url, params);
  },
  updateMenu: (params, id) => {
    const url = `/menu/${id}`;
    return axiosClient.put(url, params);
  },
};

export default menuApi;
