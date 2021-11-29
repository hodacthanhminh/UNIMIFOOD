// libs
import axios from 'axios';
import queryString from 'query-string';

const getAuthToken = () => {
  const tokenStogare = localStorage.getItem('authTokens')
    ? JSON.parse(localStorage.getItem('authTokens'))
    : null;

  return tokenStogare;
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    accept: 'application/json',
  },
  paramsSerializer: (params) =>
    queryString.stringify(params, { arrayFormat: 'brackets' }),
  timeout: 5000,
});

// Handle token inside
axiosClient.interceptors.request.use(async (config) => {
  const authTokens = getAuthToken();
  if (authTokens) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${authTokens?.access}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  },
);

export default axiosClient;
