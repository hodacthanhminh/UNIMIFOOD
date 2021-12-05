import axiosClient from './axiosClient';

const accountApi = {
  accountLogin: (params) => {
    const url = '/account/login';
    return axiosClient.post(url, params);
  },
  getSelf: () => {
    const url = '/account/';
    return axiosClient.get(url);
  },
  accountRegister: (params) => {
    const url = '/account/register';
    return axiosClient.post(url, params);
  },
  accountUpdate: (params, id) => {
    const url = `/account/${id}`;
    return axiosClient.put(url, params);
  },
};
export default accountApi;
