import axios from 'axios';

const contactsURL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = contactsURL;

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const resetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const regApi = async (data) => await axios.post('/users/signup', data);
export const loginApi = async (data) => await axios.post('/users/login', data);
export const logoutApi = async () => await axios.post('/users/logout');
export const currentApi = async () => await axios.get('/users/current');


