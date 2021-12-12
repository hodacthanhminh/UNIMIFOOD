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
  createItem: (params) => {
    const url = '/item';
    return axiosClient.post(url, params);
  },
  updateItem: (params, id) => {
    const url = `/item/${id}`;
    return axiosClient.put(url, params);
  },
};

export default menuApi;
